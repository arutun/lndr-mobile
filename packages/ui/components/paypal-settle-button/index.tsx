import React, { Component } from 'react'
import { NativeModules, Text, View } from 'react-native'
import Button from 'ui/components/button'
import { LoadingContext } from 'ui/components/loading'

import { UserData } from 'lndr/user'

import formStyle from 'theme/form'
import general from 'theme/general'

import { getUser, getPrimaryCurrency } from 'reducers/app'
import { connect } from 'react-redux'
import { ToastActionsCreators } from 'react-native-redux-toast'

import language from 'language'
const { payPalLanguage } = language

import PALSClient from 'credit-protocol/pals-client'

const loadingPayPalInit = new LoadingContext()
const loadingPayPalAction = new LoadingContext()

interface Props {
  user: UserData
  navigation: any
  displayAmount: string
  direction: string
  primaryCurrency: string
  memo:string
  onPress: () => any
}

interface State {
  payPalPayee: any // the payee's PayPal id (email)
  confirmation: any
}

class PayPalSettlementButton extends Component<Props, State> {
  palsClient: PALSClient

  constructor(props) {
    super(props)
    this.state = {
      payPalPayee: null
      ,confirmation: null
    }
    this.palsClient = new PALSClient()
  }

  async componentWillMount() {
    await loadingPayPalInit.wrap(NativeModules.PayPalManager.initPayPal())

    if (this.state.payPalPayee == null) {
      // load payee's PayPal info, if available
      let payPalPayee
      if (this.isPayee()) {
        payPalPayee = await loadingPayPalAction.wrap(this.palsClient.getPayPalAccount(this.props.user))
      } else {
        const friend = this.props.navigation ? this.props.navigation.state.params.friend : {}
        payPalPayee = await loadingPayPalAction.wrap(this.palsClient.getPayPalAccountForFriend(this.props.user, friend))
      }
      this.setState({ payPalPayee })
    }
  }

  hasPayPalPayee() {
    return ( (this.state != null) && (this.state.payPalPayee != null) )
  }

  isPayee() {
    return (this.props.direction === 'borrow')
  }

  async requestPayPalPayment() {
    // TODO: add LoadingContext + Loading
    // send server authorization for friend to pay us via PayPal
    const friend = this.props.navigation ? this.props.navigation.state.params.friend : {}
    await loadingPayPalAction.wrap(this.palsClient.authorizeFriend(this.props.user, friend))
    // navigate onwards
    this.props.onPress()
  }

  async handlePayPalPayment() {
    try {
      const confirmation = NativeModules.PayPalManager.sendPayPalPayment(this.props.displayAmount, this.props.primaryCurrency, this.state.payPalPayee, this.props.memo)
      console.log('PayPal Server Confirmation', confirmation)
      // TODO: send confirmation to server. Note: is this necessary?
      
      // TODO: popup confirmation and close this window
      // this.setState({ confirmation })
      this.props.onPress()
    } catch (e) {
      // user cancelled
      console.log('User Cancelled PayPal Transaction', e)
    }
  }

  async handleConnectPayPal() {
    try {
      const authToken = await loadingPayPalAction.wrap(NativeModules.PayPalManager.connectPayPal())
      if (authToken) {
        // send response to server
        await loadingPayPalAction.wrap(this.palsClient.createPayPalAccount(this.props.user, authToken))
        const payPalPayee = await loadingPayPalAction.wrap(this.palsClient.getPayPalAccount(this.props.user))
        this.setState({payPalPayee: payPalPayee})
        // if we are the Payee, also authorize our friend to pay us
        if (this.isPayee()) {
          const friend = this.props.navigation ? this.props.navigation.state.params.friend : {}
          await loadingPayPalAction.wrap(this.palsClient.authorizeFriend(this.props.user, friend))
        }
        this.props.navigation.dispatch(ToastActionsCreators.displayInfo(payPalLanguage.connectSuccess));
      } else {
        this.setState({payPalPayee: null})
      }
    } catch (e) {
      // user cancelled
      console.log('User Cancelled PayPal Transaction', e)
    }
  }

  requestPayPalPayee() {
    this.props.onPress()
  }

  renderPaymentMessage() {
    const friend = this.props.navigation ? this.props.navigation.state.params.friend : {}
    if (this.hasPayPalPayee()) {
      return null
    }

    if (this.isPayee()) {
      const message = payPalLanguage.enablePayPalForFriend(friend.nickname)
      return (
        <View style={general.centeredColumn}>
          <View style={formStyle.infoView}>
            <Text style={[formStyle.title, {marginTop:0}]}>{message}</Text>
          </View>
        </View>
      )
    } else {
      const message = payPalLanguage.friendNotEnabled(friend.nickname)
      return (
        <View style={general.centeredColumn}>
          <View style={formStyle.warningView}>
            <Text style={[formStyle.title, {marginTop:0}]}>{message}</Text>
          </View>
        </View>
      )
    }
  }

  render() {
    let button
    const message = this.renderPaymentMessage()

    // only send 
    if (this.hasPayPalPayee()) {
      if (this.isPayee()) // we'd like to receive a PayPal payment and we're connected
        button = (<Button large round wide onPress={() => this.requestPayPalPayment()} text={payPalLanguage.requestPayPalPayment} />)
      else // we're ready to send payment AND friend has PayPal connected
        button = (<Button large round wide onPress={() => this.handlePayPalPayment()} text={payPalLanguage.sendWithPayPal} />)
    } else {
      if (this.isPayee()) // user is Payee and needs to connect PayPal
        button = (<Button large round wide onPress={() => this.handleConnectPayPal()} text={payPalLanguage.enablePayPal} />)
      else // friend needs to connect PayPal
        button = (<Button large round wide onPress={() => this.requestPayPalPayee()} text={payPalLanguage.requestPayPalPayee} />)
    }
    return (
      <View>
        {button}
        {message}
      </View>
    )
  }
}

export default connect((state) => ({ user: getUser(state)(), primaryCurrency: getPrimaryCurrency(state)}))(PayPalSettlementButton)
