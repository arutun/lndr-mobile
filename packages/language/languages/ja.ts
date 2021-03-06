const generalCommunicationError = 'サーバーに接続するのにエラーが発生しました。しばらくしてから、もう一度お試しください'

import { currencySymbols, transferLimits } from 'lndr/currencies'

const CUR = currencySymbols
const TL = transferLimits

export default {
  applicationName: `Lndr`,
  helloWorld: `Hello world`,
  noConnection: `接続なし`,
  retry: `リトライ`,
  submit: `送信`,
  next: `次へ`,
  cancel: `キャンセル`,
  back: `戻る`,
  copy: `クリップボードにコピー`,
  confirmAccount: `決定`,
  createAccount: `アカウント作成`,
  recoverAccount: `アカウント復元`,
  removeAccount: `アカウント削除`,
  updateAccount: `アカウント更新`,
  loginAction: `アンロック`,
  enterPin: `PINコードを入力してください`,
  changePin: `PINコードを変更する`,
  enterCurrentPin: `現在のPINコードを入力してください`,
  logoutAction: `ログアウト`,
  seeAllActivity: `全アクティビティを表示`,
  copiedClipboard: `クリップボードにコピーされました`,
  pleaseWait: `しばらくお待ちください`,
  addFriend: `友達を追加する`,
  addFriendConfirmationQuestion: `本当にこのユーザーを友達に追加しますか`,
  removeFriend: `友達からはずす`,
  currentFriends: `友達`,
  inviteFriends: `本当にこのユーザーを友達からはずしますか？`,
  tryLndr: `友達をLndrに招待する`,
  removeFriendConfirmationQuestion: `こちらからLndrをお試しください：`,
  friendInfo: `この友達の詳細`,
  noFriends: `まずは友達を何人か追加してみよう！`,
  noMatches: `ユーザーが見つかりませんでした`,
  noBalances: `誰にも借りていません`,
  addFriendButton: `友達を追加する`,
  alreadyFriendsButton: `友達`,
  friendShell: `友達`,
  tip: `ヒント`,
  notice: `注意：`,
  welcome: `Lndrへようこそ`,
  noBalanceWarning: `残高を読み込むことが出来ませんでした。しばらく経ってから再度お試しください。`,
  totalBalance: `残高`,
  totalBalances: `取引相手の数：`,
  newTransaction: `新しい取引`,
  needsReview: `承認待ち`,
  owesMe: `貸しがあります`,
  iOwe: `借りがあります`,
  newPassword: `新しいパスワード（８字以上）`,
  confirmPassword: `パスワードを確定する`,
  newPin: `新しい４字のPINを設定してください`,
  enterNewPin: `新しい４字のPINを確認してください`,
  confirmPin: `確認のためもう一度入力してください`,
  newAccount: `新しいアカウントを作成`,
  loginAccount: `アカウントを解除する`,
  recoverExistingAccount: `既存のアカウントを復元する`,
  recoverMnemonic: `ニューモニック（アカウントを復元する際に必要です）`,
  recoverMnemonicLengthError: `復元用の単語は12個です`,
  successTitle: `成功`,
  errorTitle: `エラー`,
  showMnemonic: `12個の復元用の単語を表示`,
  mnemonicExhortation: `この12個の単語はアカウントを復元する時に使用します。大切に保管しておいてください。`,
  addressExhortation: `あなたの財布のアドレスにETHまたはサポートされている任意のERC-20トークンを送信することができます。`,
  removeAccountTitle: `本当にアカウントをこのデバイスから削除しますか？`,
  removeAccountExhortation: `ニューモニックが保管されていることを確認してください。さもないと、デバイスから永久にあなたのデータが消去され復元できません。`,
  myAccount: `自分のアカウント`,
  setNickname: `友達から見つけてもらうためにニックネームを設定`,
  setEmail: `Lndrから最新情報を受け取るためのメールアドレスを設定`,
  nickname: `ニックネーム（小文字と数字）`,
  email: `メールアドレス`,
  lndrVerified: {
    ok: `OK`,
    title: `あなたの顧客の要件を知って完了することにより、高い決済上限と暗​​号引き出し額を設定してください。`,
    statusTitle: `あなたの検証の現在の状況は次のとおりです。`,
    tryAgain: `私たちは、あなたの身元を確認することができませんでした。あなたの情報を再送信し、あなたの写真が読みやすいことを確認してください。`,
    formMessage: `次のフィールドのすべてをご記入ください`,
    button: `本人確認`,
    prefix: `あなたの個人データが管理されるかについて、`,
    linkTitle: `当社のプライバシーポリシーを `,
    postfix: `お読みください。`,
    upload: `政府発行の`,
    governmentId: `IDをアップロード`,
    selfie: `あなたの政府発行のIDで自分撮りをアップロード`,
    proofOfAddress: `住所の証明`,
    ifNotId: `（ない場合はID）`,
    agree: `私は読み、プライバシーポリシーに同意します`,
    agreeLink: `同意します`,
    success: `KYCが送信されました。`,
    idInfoHeader: `IDの例としては、`,
    passport: `パスポート`,
    drivers: `運転免許証`,
    national: `国民IDカード`,
    addressInfoHeader: `住所の証明の例：`,
    bank: `銀行取引明細書`,
    utility: `公共料金`,
    other: `その他のドキュメント`,
    chooseGovernmentPhoto: `政府IDの写真を選択してください`,
    chooseSelfiePhoto: `自分撮り写真を選択します。`,
    chooseAddressPhoto: `アドレス・写真の証明を選択してください`,
    emailRequired: `あなたは、あなたの身元を確認するために電子メールを必要とする、"メールアドレスを変える" をクリックしてください`,
    approved: `承認`,
    rejected: `拒否された`,
    pending: `承認待ち`,
    error: generalCommunicationError,
    formFields: {
      firstName: `ファーストネーム`,
      lastName: `苗字`,
      street: `住所`,
      city: `シティ`,
      state: `州/地方`,
      postalCode: `郵便番号`,
      country: `国を選択`,
      phone: `電話番号`,
      dob: `生年月日（YYYY-MM-DD）`,
    },
    formErrors: {
      firstName: `姓が必要です`,
      lastName: `姓が必要です`,
      street: `ストリートが必要です`,
      city: `市が要求されます`,
      state: `州/都道府県が必要です`,
      postalCode: `郵便番号が必要です`,
      country: `国が要求されます`,
      phone: `電話番号が必要です`,
      dob: `生年月日が必要です`,
      general: `あなたはすべてのフィールドを記入し、正しい写真を添付し​​ていることを確認してください。`,
    }
  },
  accountManagement: {
    nickname: {
      lengthViolation: `ニックネームは３字以上である必要があります`,
      compositionViolation: `ニックネームに使用できる文字：数字、小文字`,
      duplicationViolation: `このニックネームは既に使われています`,
    },
    email: {
      compositionViolation: `正しいメールアドレスを入力してください`,
      duplicationViolation: `このメールアドレスで登録されているアカウントが既に存在します`,
    },
    pin: {
      lengthViolation: `PINは最低4字である必要があります`,
      matchViolation: `PINは合致する必要があります`,
      failedHashComparison: `PINが間違っています。正しいPINを入力してください。`,
      updateSuccess: `PINが更新されました`,
      updateError: `PIN更新中にエラーが発生しました`,
    },
    mnemonic: {
      lengthViolation: `アカウント復元用の単語は最低12語です`,
      unableToValidate: `ニューモニックが違います。再度入力してください。`,
    },
    setNickname: {
      success: `ニックネームが保存されました`,
      error: generalCommunicationError
    },
    setEmail: {
      success: `メールアドレスが登録されました`,
      error: generalCommunicationError
    },
    lockTimeout: {
      top: `後でPINを入力する必要があります`,
      bottom: `セッションが無効になるまでの時間`,
      update: `アップデート`,
      error: `アカウントの更新に失敗しました`,
      success: `ロックタイムアウト更新`,
    },
    addFriend: {
      success: X => `@${X}にフレンド・リクエストが送信されました`,
      error: generalCommunicationError
    },
    removeFriend: {
      success: X => `@${X}が友達から削除されました`,
      error: generalCommunicationError
    },
    loadInformation: {
      error: generalCommunicationError
    },
    cryptoBalance: {
      display: (N, B) => `Your ${N} balance is ${String(B).slice(0,8)}`,
      getError: `ETHの受けとりに失敗しました`,
      manage: `ETHの管理`,
    },
    sendEth: {
      error: {
        insufficient: `送金に必要な資金が不足しています`,
        generic: `エラーが発生しました。しばらく経ってから再度お試しください。`,
        address: `正しいアドレスを入力してください`,
        amount: `０より大きい値を入力してください`,
        limitExceeded: (A, M) => `一週間にLndrから引き出せるのは ${CUR(A)} ${TL(A, M)} までです`,
      },
      amount: `送金額`,
      address: `送金先アドレス`,
      transfer: `ETHを送金する`,
      transferAll: `全てを送金する`,
      balance: Y => `あなたの現在のETH残高は${typeof Y === 'string' ? Y.slice(0,8) :''}です`,
      ethAddress: `イーサリアムアドレス`,
      transferLowercase: `ETHを送金する`,
      note: (A, M) => `一週間にLndrから引き出せるのは ${CUR(A)} ${TL(A, M)} までです`,
      warning: (Z, A, M) => `現在 ${CUR(A)} ${TL(A, M)} のうち ${CUR(A)}${Z}残っています `,
    },
    sendERC20: {
      error: {
        insufficient: (name) => `送金に必要な${name}が不足しています`,
        generic: `エラーが発生しました。しばらく経ってから再度お試しください。`,
      },
      transfer: (name) => `${name}を送金する`,
      address: `送付先アドレス`,
      balance: (name, balance) => `あなたの現在の${name}残高は${typeof balance === 'string' ? balance.slice(0,8) :''}`,
      tokenAddress: (name) => `${name}アドレス`,
      txCost: (ethCost, currencyCost) => `取引コスト： ${ethCost} ETH (${currencyCost}) です`,
    },
    panelHeaders: [
      `ウォレット住所`,
      `暗号残高`,
      `アカウントを削除する`,
      `ETHの取引履歴`,
      `ペイパルを接続します`,
      `主要通貨を変更`,
      `追加機能のロックを解除`,
      `メールアドレスを変える`,
      `PINを変える`,
      `タイムアウトする時間を変える`,
      `復元用の単語（ニューモニック）`,
      `通知`,
    ],
    viewEtherscan: `Etherscanで履歴を確認する`,
    profilePic: {
      change: `プロフィール画像を変更する`,
      setError: `エラーが発生しました。しばらく経ってから再度お試しください。`,
      getError: `エラーが発生しました`,
      setSuccess: `プロフィール画像が更新されました`,
    },
    logoutSuccess: `ログアウトに成功しました`,
    logoutError: generalCommunicationError,
  },

  currentBalance: name => `現在の${name}残高は`,

  welcomeView: {
    by: `BUILT BY`,
    makeItEasy: `Lndrはお金の貸し借りを簡単に記録、管理することが出来ます`,
    weHelpFriends: `普段の生活はもちろん、仕事から娯楽までサポートします`,
    len: `Len`,
    dot: `.`,
    der: `der`,
    shareDinner: `ディナー代をシェア`,
    fillTank: `ガソリンを満タンに`,
    travelTogether: `旅をともに楽しむ`,
    runEthereum: `Lndrはイーサリアム上で機能します`,
    firstLendingApp: `ブロックチェーン上で動く、安全性が保証されているモバイルアプリ`,
    greatConcert: `素晴らしいコンサートを満喫`,
    youPlayWithFriends: `あなたは友人の時間を堪能し、会計はアプリにお任せ`,
    start: `はじめよう`,
  },

  walkthrough: {
    skip: `スキップ`,
    continue: `続ける`,
    step1: {
      easyToUse: `Lndrでは、様々な費用の分割や、友人や家族観でのお金の貸し借りを簡単に管理することが出来ます。`,
      len: `Len`,
      der: `der`,
    },
    step2: {
      getStarted: `友達を追加して、Lndrを使ってみましょう`,
      friendsScreen: `Lndrを友人や家族に紹介するために、を検索・追加・招待しましょう`,
    },
    step3: {
      title: `トランザクションの記録`,
      easy: `支払いを友人と分割や貸し借りの追跡は、Lndrであれば簡単です！`,
      selectFriend: `友達を選び、利用する通貨と金額を選択します。`,
      addMemo: `必要に応じてメモを追加し、[送信]をクリックします。`,
    },
    step4: {
      title: `決済する`,
      ready: `決済してもよろしいですか？`,
      payPal: `Lndrを利用する際、\ N-あなたはペイパルを選択することができます。`,
      ether: `- Etherのような暗号通貨で`,
      cash: `- あるいは通常通りに現金で`,
      positiveBalance: `10.46`,
    },
    step5: {
      title: `複数通貨`,
      multiCurrency: `Lndrでは、異なる通貨同士での取引も追跡することができます。`,
      exchangeRate: `貸し借りを帳消しすることが決定すると、すべてのトランザクションは最新の為替レートに応じて、主要通貨に換算されます。`,
      start: `Lndrを使ってみましょう！`,
    }
  },

  debtManagement: {
    shell: `新しい取引`,
    add: `借りを追加する`,
    selectFriend: `選択する`,
    lend: `新しく貸す`,
    borrow: `新しく借りる`,
    owesMe: `友達に貸します`,
    iOwe: `友達に借ります`,
    iLent: `友達に貸します`,
    iBorrowed: `友達に借ります`,
    settleUpLower: `決済する`,
    amountToSettle: `決済額`,
    total: `総額`,
    record: `履歴`,
    records: `履歴`,
    chooseCurrency: `通貨を選択してください`,

    createError: {
      amountTooLow: `$0以上の金額を入力してください`,
      amountTooHigh: `$1,000,000,000以下の金額を入力してください`,
      selfAsFriend: `自分自身は選択できません。別の友達を選択してください。`,
      pending: `別の取引を行う前に、現在の作業を完了してください`,
      insufficientEth: E => `決済するためには少なくとも ${E} ETH 必要です, 自分の残高を確認するには設定をご覧ください`,
    },

    fields: {
      currency: `通貨`,
      amount: `金額`,
      settlementAmount: `決済金額`,
      selectFriend: `友達`,
      memo: `メモ`,
      direction: `Statementを選択してください`,
    },
    memo: {
      example: `ここにメモを入力してください`,
    },
    direction: {
      lend: X => `${X} は私に借りがあります`,
      borrow: X => `私には ${X}の借りがあります`,
      initiatedLend: X => `${X}は、彼らに借りがあります`,
      initiatedBorrow: X => `${X}はあなたは貸しがあります`,
      pendingLend: X => `@${X} はあなたに借りがあります`,
      pendingBorrow: X => `あなたは @${X}に借りがあります`,
      pendingLendSettlement: S => `@${S.debtorNickname} が ${S.settlementCurrency}で決済することを要請しています`,
      pendingBorrowSettlement: S => `@${S.creditorNickname} があなたと ${S.settlementCurrency}での決済を求めています`,
      pendingLendSettlementMe: S => ` @${S.debtorNickname}と  ${S.settlementCurrency}で決済することを要請しました`,
      pendingBorrowSettlementMe: S => ` @${S.creditorNickname}に ${S.settlementCurrency}で決済するようリクエストしました`,
    },
    pending: {
      success: F => `@${F.nickname}に提出した借りは保留中`,
      error: generalCommunicationError
    },
    pendingParens: `承認待ち`,
    confirmation: {
      transaction: CP => ` ${CP} との取引が確定しました`,
      settlement: CP => ` ${CP}との決済が確定しました`,
      error: `取引を承認できませんでした。しばらく経ってから再度お試しください。`,
    },
    rejection: {
      success: `取引が拒否されました`,
      error: `取引を拒否できませんでした。再度お試しください`,
    },
    balances: {
      error: `残高を読み込めませんでした。サイドお試しください`,
    },
    for: M => `${M}宛て`,
    settleUp: `決済する`,
    settleTotal: `決済総額`,
    settleUpMemo: (D, A) => `${D === '貸す' ? 'を決済する ' :  ` ${A}の決済をリクエスト`}`,
    recordSettleUpMemo: `決済しています`,
    balanceByCurrency: `詳細`,
  },

  settlementManagement: {
    bilateral: {
      error: {
        insufficient: X => `資金不足のため ${X}との取引に失敗しました`,
        generic: X => ` ${X}との取引の処理中にエラーが起きました`,
      }
    },
    eth: `ETHで決済`,
    erc20: name => `Settle with ${name}`,
    paypal: `PayPalで決済`,
    nonPayment: `決済を記録する`,
    select: `決済タイプを選択します`,
  },

  accountViewLanguage: {
    lndr: `L n d r`,
    home: `ホーム`,
    friends: `友達`,
    activity: `アクティビティ`,
  },

  notifications: {
    toggleNotifications: `通知を設定する`,
    enable: `オンにする`,
    disable: `オフにする`,
  },

  pendingTransactionsLanguage: {
    shell: `承認待ちの取引`,
    title: `承認待ち`,
    memo: `メモ：`,
    for: `宛て`,
    none: `承認待ちの取引はありません`,
    confirmationQuestion: `本当にこの取引を承認しますか？`,
    pendingAnnouncement: `この取引は相手の承認待ちです`,
    bilateral: `送金が完了するのを待っています`,
    confirm: `確定する`,
    reject: `取引を拒否する`,
    rejectRequest: `拒否する`,
    cancel: `取引をキャンセルする`,
    direction: {
      lend: (X, Z) => `@${X} はあなたに対して ${Z}の負債（借り）があります`,
      borrow: (X, Z) => `あなたは @${X}に対して ${Z}の負債（借り）があります`,
    }
  },

  pendingSettlementsLanguage: {
    shell: `申請中の取引`,
    title: `申請中`,
    none: `承認待ちの決済はありません`,
    confirm: `確定する`,
    reject: `決済を拒否する`,
    cancel: `決済をキャンセルする`,
  },

  recentTransactionsLanguage: {
    title: `完了`,
    none: `取引は完了していません`,
    direction: {
      lend: (X, Z) => `あなたは@${X} に対して ${Z}の債権（貸し）があります`,
      borrow: (X, Z) => ` @${X}はあなたに対して ${Z}の債権（貸し）があります`,
    },
    balance: `残高`,
    consolidatedBalance: `貸し借り残高`,
    friends: FS => `(から${FS} ${FS === 1 ? '友達' :'友達'})`,
  },

  tabs: {
    home: `ホーム`,
    friends: `友達`,
    activity: `アクティビティ`,
  },

  confirmation: {
    shell: `確定`,
    done: `完了`,
    create: {
      start: ``,
      end: `へ記録を送信しました。`,
    },
    confirm: {
      start: ``,
      end: `から送信された記録を確認しました。`,
    },
    reject: {
      start: `あなたが、この記録を拒否したことを`,
      end: `に知らせました。`,
    },
    confirmFriend: {
      start: ``,
      end: `と友達になりました！`,
    },
    rejectFriend: {
      start: ``,
      end: `からの友達リクエストを拒否しました。`,
    },
    rejectOutboundFriendRequest: {
      start: `あなたは、`,
      end: `への友達リクエストをキャンセルしました`,
    },
    ethSent: {
      start: `ETHを送信するのに成功しました。あなたのトランザクション・ハッシュは`,
      end: `です`,
    },
    erc20Sent: {
      start: `を送信するのに成功しました。あなたのトランザクション・ハッシュは`,
      end: `です`,
    },
    requestPayPalPayee: {
      start: `あなたがPayPalで決済したい旨を`,
      end: `に知らせました。`,
    },
    requestPayPalPayment: {
      start: `あなたがPayPalで決済したい旨を`,
      end: `に知らせました。`,
    },
    settledWithPayPal: {
      start: `あなたがPayPalで決済したことを`,
      end: `に知らせました。`,
    },
    kycSuccess: {
      start: `ありがとうございました！アカウントが確認されています。

      `,
      end: `あなたの追加機能のロックが解除されたときに通知されます。`
    },
    status: `この取引の状況をアクティビティ`,
    activity: `のタブから見ることができます。`,
  },

  pendingFriendRequestsLanguage: {
    shell: `友達リクエスト`,
    message: `友達リクエスト`,
    request: F => `${F} があなたと友達になりたがっています`,
    outbound: F => `あなたは @${F}に友達リクエストを送信しました`,
  },

  privacyPolicy: {
    link: `blockmason.io/lndr/terms/`,
    message: `以下をクリックすることでBlockmasonのプライバシー・ポリシーに同意します。あなたのメールアドレスにBlockmasonやLndrに関する最新情報が送信される可能性があります。プライバシー・ポリシーへのリンクはこちら：`,
  },

  payPalLanguage: {
    connectPayPal: `ペイパルを接続する`,
    connectSuccess: `ペイパル利用が有効になりました`,
    disconnectPayPal: `ペイパルとの接続を解除`,
    disconnected: `ペイパルは切断されました`,
    requestPayPalPayment: `ペイパルの支払いを要求`,
    sendWithPayPal: `ペイパルで送ります`,
    enablePayPal: `ペイパルを有効にします`,
    requestPayPalPayee: `ペイパルをリクエスト`,
    enablePayPalForFriend: F => `PayPalを利用可能にすることで、@${F}はあなたに支払いができるようになります.`,
    friendNotEnabled: F => `の@${F}は、PayPal支払いを有効にしていません`,
    friendRequestedConnect: F => `が@${F}はPayPal経由で支払いを希望しています`,
    requestFriendConnect: F => `PayPalを有効にするようにi、@${F} に依頼しました`,
    feesNotification: `PayPalの手数料が含まれていません`,
    feesInformationHeader: `PayPalの手数料情報`,
    feesInformation: `1.あなたのPayPalアカウントを銀行口座に接続する必要があります。
    
2.あなたの銀行の通貨と異なる通貨で支払う場合$ 0.35の手数料が発生します。

3.国際取引手数料：
    アメリカからカナダ/ヨーロッパへ：$ 2.99
    アメリカから他の国へ：$ 4.99

4.これらの手数料は変更される可能性があります。最新情報をご確認ください。`,
    payPalSite: `PayPal.com`,
  },

  countries: [
    { name: `アフガニスタン`, code: 'AFG' },
    { name: `アルバニア`, code: 'ALB' },
    { name: `アルジェリア`, code: 'DZA' },
    { name: `アンドラ`, code: 'AND' },
    { name: `アンゴラ`, code: 'AGO' },
    { name: `アンギラ`, code: 'AIA' },
    { name: `南極大陸`, code: 'ATA' },
    { name: `アンティグア・バーブーダ`, code: 'ATG' },
    { name: `アルゼンチン`, code: 'ARG' },
    { name: `アルメニア`, code: 'ARM' },
    { name: `アルバ`, code: 'ABW' },
    { name: `オーストラリア`, code: 'AUS' },
    { name: `オーストリア`, code: 'AUT' },
    { name: `アゼルバイジャン`, code: 'AZE' },
    { name: `バハマ`, code: 'BHS' },
    { name: `バーレーン`, code: 'BHR' },
    { name: `バングラデシュ`, code: 'BGD' },
    { name: `バルバドス`, code: 'BRB' },
    { name: `ベラルーシ`, code: 'BLR' },
    { name: `ベルギー`, code: 'BEL' },
    { name: `ベリーズ`, code: 'BLZ' },
    { name: `ベニン`, code: 'BEN' },
    { name: `バーミューダ`, code: 'BMU' },
    { name: `ブータン`, code: 'BTN' },
    { name: `ボリビア`, code: 'BOL' },
    { name: `ボスニア・ヘルツェゴビナ`, code: 'BIH' },
    { name: `ボツワナ`, code: 'BWA' },
    { name: `ブラジル`, code: 'BRA' },
    { name: `ブルネイ`, code: 'BRN' },
    { name: `ブルガリア`, code: 'BGR' },
    { name: `ブルキナファソ`, code: 'BFA' },
    { name: `ブルンジ`, code: 'BDI' },
    { name: `カーボベルデ`, code: 'CPV' },
    { name: `カンボジア`, code: 'KHM' },
    { name: `カメルーン`, code: 'CMR' },
    { name: `カナダ`, code: 'CAN' },
    { name: `ケイマン諸島`, code: 'CYM' },
    { name: `中央アフリカ共和国`, code: 'CAF' },
    { name: `チャド`, code: 'TCD' },
    { name: `チリ`, code: 'CHL' },
    { name: `中国`, code: 'CHN' },
    { name: `コロンビア`, code: 'COL' },
    { name: `コモロ`, code: 'COM' },
    { name: `コンゴ`, code: 'COG' },
    { name: `コンゴ`, code: 'COD' },
    { name: `クック諸島`, code: 'COK' },
    { name: `コスタリカ`, code: 'CRI' },
    { name: `コートジボワール`, code: 'CIV' },
    { name: `クロアチア`, code: 'HRV' },
    { name: `キューバ`, code: 'CUB' },
    { name: `キュラソー`, code: 'CUW' },
    { name: `キプロス`, code: 'CYP' },
    { name: `チェコ`, code: 'CZE' },
    { name: `デンマーク`, code: 'DNK' },
    { name: `ジブチ`, code: 'DJI' },
    { name: `ドミニカ`, code: 'DMA' },
    { name: `ドミニカ共和国`, code: 'DOM' },
    { name: `エクアドル`, code: 'ECU' },
    { name: `エジプト`, code: 'EGY' },
    { name: `エルサルバドル`, code: 'SLV' },
    { name: `赤道ギニア`, code: 'GNQ' },
    { name: `エリトリア`, code: 'ERI' },
    { name: `エストニア`, code: 'EST' },
    { name: `Eswatini`, code: 'SWZ' },
    { name: `エチオピア`, code: 'ETH' },
    { name: `フィジー`, code: 'FJI' },
    { name: `フィンランド`, code: 'FIN' },
    { name: `フランス`, code: 'FRA' },
    { name: `フランス領ギアナ`, code: 'GUF' },
    { name: `フランス領ポリネシア`, code: 'PYF' },
    { name: `ガボン`, code: 'GAB' },
    { name: `ガンビア`, code: 'GMB' },
    { name: `ジョージア`, code: 'GEO' },
    { name: `ドイツ`, code: 'DEU' },
    { name: `ガーナ`, code: 'GHA' },
    { name: `ジブラルタル`, code: 'GIB' },
    { name: `ギリシャ`, code: 'GRC' },
    { name: `グリーンランド`, code: 'GRL' },
    { name: `グレナダ`, code: 'GRD' },
    { name: `グアドループ`, code: 'GLP' },
    { name: `グアム`, code: 'GUM' },
    { name: `グアテマラ`, code: 'GTM' },
    { name: `ギニア`, code: 'GIN' },
    { name: `ギニアビサウ`, code: 'GNB' },
    { name: `ガイアナ`, code: 'GUY' },
    { name: `ハイチ`, code: 'HTI' },
    { name: `バチカン`, code: 'VAT' },
    { name: `ホンジュラス`, code: 'HND' },
    { name: `香港`, code: 'HKG' },
    { name: `ハンガリー`, code: 'HUN' },
    { name: `アイスランド`, code: 'ISL' },
    { name: `インド`, code: 'IND' },
    { name: `インドネシア`, code: 'IDN' },
    { name: `イラン`, code: 'IRN' },
    { name: `イラク`, code: 'IRQ' },
    { name: `アイルランド`, code: 'IRL' },
    { name: `マン島`, code: 'IMN' },
    { name: `イスラエル`, code: 'ISR' },
    { name: `イタリア`, code: 'ITA' },
    { name: `ジャマイカ`, code: 'JAM' },
    { name: `日本`, code: 'JPN' },
    { name: `ヨルダン`, code: 'JOR' },
    { name: `カザフスタン`, code: 'KAZ' },
    { name: `ケニア`, code: 'KEN' },
    { name: `キリバス`, code: 'KIR' },
    { name: `韓国（朝鮮）`, code: 'PRK' },
    { name: `韓国（ROK）`, code: 'KOR' },
    { name: `クウェート`, code: 'KWT' },
    { name: `キルギス`, code: 'KGZ' },
    { name: `ラオス`, code: 'LAO' },
    { name: `ラトビア`, code: 'LVA' },
    { name: `レバノン`, code: 'LBN' },
    { name: `レソト`, code: 'LSO' },
    { name: `リベリア`, code: 'LBR' },
    { name: `リビア`, code: 'LBY' },
    { name: `リヒテンシュタイン`, code: 'LIE' },
    { name: `リトアニア`, code: 'LTU' },
    { name: `ルクセンブルク`, code: 'LUX' },
    { name: `マカオ`, code: 'MAC' },
    { name: `マケドニア`, code: 'MKD' },
    { name: `マダカスカル`, code: 'MDG' },
    { name: `マラウイ`, code: 'MWI' },
    { name: `マレーシア`, code: 'MYS' },
    { name: `モルディブ`, code: 'MDV' },
    { name: `マリ`, code: 'MLI' },
    { name: `マルタ`, code: 'MLT' },
    { name: `マーシャル諸島`, code: 'MHL' },
    { name: `マルティニーク`, code: 'MTQ' },
    { name: `モーリタニア`, code: 'MRT' },
    { name: `モーリシャス`, code: 'MUS' },
    { name: `メキシコ`, code: 'MEX' },
    { name: `ミクロネシア`, code: 'FSM' },
    { name: `モルドバ`, code: 'MDA' },
    { name: `モナコ`, code: 'MCO' },
    { name: `モンゴル`, code: 'MNG' },
    { name: `モンテネグロ`, code: 'MNE' },
    { name: `モントセラト`, code: 'MSR' },
    { name: `モロッコ`, code: 'MAR' },
    { name: `モザンビーク`, code: 'MOZ' },
    { name: `ビルマ`, code: 'MMR' },
    { name: `ナミビア`, code: 'NAM' },
    { name: `ナウル`, code: 'NRU' },
    { name: `ネパール`, code: 'NPL' },
    { name: `オランダ`, code: 'NLD' },
    { name: `ニューカレドニア`, code: 'NCL' },
    { name: `ニュージーランド`, code: 'NZL' },
    { name: `ニカラグア`, code: 'NIC' },
    { name: `ニジェール`, code: 'NER' },
    { name: `ナイジェリア`, code: 'NGA' },
    { name: `ニウエ`, code: 'NIU' },
    { name: `北マリアナ諸島`, code: 'MNP' },
    { name: `ノルウェー`, code: 'NOR' },
    { name: `オマーン`, code: 'OMN' },
    { name: `パキスタン`, code: 'PAK' },
    { name: `パラオ`, code: 'PLW' },
    { name: `パレスチナ`, code: 'PSE' },
    { name: `パナマ`, code: 'PAN' },
    { name: `パプアニューギニア`, code: 'PNG' },
    { name: `パラグアイ`, code: 'PRY' },
    { name: `ペルー`, code: 'PER' },
    { name: `フィリピン`, code: 'PHL' },
    { name: `ピトケアン`, code: 'PCN' },
    { name: `ポーランド`, code: 'POL' },
    { name: `ポルトガル`, code: 'PRT' },
    { name: `プエルトリコ`, code: 'PRI' },
    { name: `カタール`, code: 'QAT' },
    { name: `再会`, code: 'REU' },
    { name: `ルーマニア`, code: 'ROU' },
    { name: `ロシア連邦`, code: 'RUS' },
    { name: `ルワンダ`, code: 'RWA' },
    { name: `サン・バルテルミー島`, code: 'BLM' },
    { name: `セントヘレナ、アセンションおよびトリスタン・ダ・クーニャ`, code: 'SHN' },
    { name: `セントクリストファー・ネイビス`, code: 'KNA' },
    { name: `セントルシア`, code: 'LCA' },
    { name: `セント・マーチン`, code: 'MAF' },
    { name: `サンピエール島・ミクロン島`, code: 'SPM' },
    { name: `セントビンセント・グレナディーン`, code: 'VCT' },
    { name: `サモア`, code: 'WSM' },
    { name: `サンマリノ`, code: 'SMR' },
    { name: `サントメ・プリンシペ`, code: 'STP' },
    { name: `サウジアラビア`, code: 'SAU' },
    { name: `セネガル`, code: 'SEN' },
    { name: `セルビア`, code: 'SRB' },
    { name: `セイシェル`, code: 'SYC' },
    { name: `シエラレオネ`, code: 'SLE' },
    { name: `シンガポール`, code: 'SGP' },
    { name: `シントマールテン島`, code: 'SXM' },
    { name: `スロバキア`, code: 'SVK' },
    { name: `スロベニア`, code: 'SVN' },
    { name: `ソロモン諸島`, code: 'SLB' },
    { name: `ソマリア`, code: 'SOM' },
    { name: `南アフリカ`, code: 'ZAF' },
    { name: `南スーダン`, code: 'SSD' },
    { name: `スペイン`, code: 'ESP' },
    { name: `スリランカ`, code: 'LKA' },
    { name: `スーダン`, code: 'SDN' },
    { name: `スリナム`, code: 'SUR' },
    { name: `スウェーデン`, code: 'SWE' },
    { name: `スイス`, code: 'CHE' },
    { name: `シリア・アラブ共和国`, code: 'SYR' },
    { name: `台湾`, code: 'TWN' },
    { name: `タジキスタン`, code: 'TJK' },
    { name: `タンザニア`, code: 'TZA' },
    { name: `タイ`, code: 'THA' },
    { name: `東ティモール`, code: 'TLS' },
    { name: `行く`, code: 'TGO' },
    { name: `トケラウ諸島`, code: 'TKL' },
    { name: `トンガ`, code: 'TON' },
    { name: `トリニダード・トバゴ`, code: 'TTO' },
    { name: `チュニジア`, code: 'TUN' },
    { name: `七面鳥`, code: 'TUR' },
    { name: `トルクメニスタン`, code: 'TKM' },
    { name: `タークス・カイコス諸島`, code: 'TCA' },
    { name: `ツバル`, code: 'TUV' },
    { name: `ウガンダ`, code: 'UGA' },
    { name: `ウクライナ`, code: 'UKR' },
    { name: `アラブ首長国連邦`, code: 'ARE' },
    { name: `イギリス`, code: 'GBR' },
    { name: `アメリカ合衆国`, code: 'USA' },
    { name: `アメリカ合衆国外諸島`, code: 'UMI' },
    { name: `ウルグアイ`, code: 'URY' },
    { name: `ウズベキスタン`, code: 'UZB' },
    { name: `バヌアツ`, code: 'VUT' },
    { name: `ベネズエラ`, code: 'VEN' },
    { name: `ベトナム`, code: 'VNM' },
    { name: `イギリス領バージン諸島`, code: 'VGB' },
    { name: `米領バージン諸島`, code: 'VIR' },
    { name: `西サハラ`, code: 'ESH' },
    { name: `イエメン`, code: 'YEM' },
    { name: `ザンビア`, code: 'ZMB' },
    { name: `ジンバブエ`, code: 'ZWE' },
  ]
}
