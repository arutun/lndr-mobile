import { currencySymbols, transferLimits } from 'lndr/currencies'

const CUR = currencySymbols
const TL = transferLimits

const generalCommunicationError = 'C\'è stato un problema di comunicazione con il server, si prega di riprovare più tardi.'

export default {

  applicationName: `Lndr`,
  helloWorld: `Ciao, mondo`,
  noConnection: `Nessuna connessione`,
  retry: `Riprova`,
  submit: `INVIA`,
  next: `Successivo`,
  cancel: `Annulla`,
  back: `Torna indietro`,
  copy: `Copia negli appunti`,
  confirmAccount: `Conferma`,
  createAccount: `Crea un profilo`,
  recoverAccount: `Ripristina l'account`,
  removeAccount: `Rimuovi l'account`,
  updateAccount: `Aggiorna l'account`,
  loginAction: `Sblocca`,
  enterPin: `Inserisci PIN`,
  changePin: `Modifica PIN`,
  enterCurrentPin: `Inserisci il PIN attuale`,
  logoutAction: `DISCONNETTITI`,
  seeAllActivity: `Vedi tutte le attività`,
  copiedClipboard: `Copiato negli appunti`,
  pleaseWait: `Attendi, per favore`,
  addFriend: `Aggiungi amico`,
  addFriendConfirmationQuestion: `Sei sicuro di voler aggiungere questo utente come amico?`,
  removeFriend: `Rimuovi amico`,
  currentFriends: `Amici correnti`,
  removeFriendConfirmationQuestion: `Sei sicuro di voler rimuovere questo utente come amico?`,
  inviteFriends: `Invita amici a Lndr`,
  tryLndr: `Prova l'App Lndr qui:`,
  friendInfo: `Maggiori informazioni su questa amicizia:`,
  noFriends: `Aggiungi qualche amico per iniziare!`,
  noMatches: `Nessun utente corrispondente trovato`,
  noBalances: `Non hai debiti registrati`,
  addFriendButton: `Aggiungi amico`,
  alreadyFriendsButton: `Amici`,
  friendShell: `Amico`,
  tip: `Suggerimento:`,
  notice: `Avviso:`,
  welcome: `Benvenuto nella tua LNDR`,
  noBalanceWarning: `Non siamo stati in grado di caricare il tuo saldo in questo momento, ti preghiamo di riprovare più tardi.`,
  totalBalance: `Saldo totale:`,
  totalBalances: `Controparti totali:`,
  newTransaction: `Nuova transazione`,
  needsReview: `In attesa di approvazione`,
  owesMe: `Sono debitore`,
  iOwe: `Sono in debito con qualcuno`,
  newPassword: `Nuova password (minimo 8 caratteri)`,
  confirmPassword: `Conferma password`,
  newPin: `Nuovo PIN a 4 cifre`,
  enterNewPin: `IMPOSTARE UN NUOVO PIN da 4 cifre`,
  confirmPin: `PER FAVORE CONFERMA IL TUO PIN`,
  newAccount: `Crea un nuovo account`,
  loginAccount: `Sblocca il tuo account`,
  recoverExistingAccount: `Recupera un account esistente`,
  recoverMnemonic: `Mnemonico (12 parole visualizzate \n quando hai creato il tuo account)`,
  recoverMnemonicLengthError: `Lo mnemonico dovrebbe contenere esattamente 12 parole`,
  successTitle: `Successo`,
  errorTitle: `Errore`,
  showMnemonic: `Mostra mnemonico contenente 12 parole`,
  mnemonicExhortation: `Questa frase lunga 12 parole è necessaria per ripristinare l'account, conservarla in un luogo sicuro e segreto`,
  addressExhortation: `È possibile inviare ETH o qualsiasi supportato ERC-20 token per l'indirizzo portafoglio.`,
  removeAccountTitle: `Sei sicuro di voler rimuovere il tuo account da questo dispositivo?`,
  removeAccountExhortation: `Assicurati di aver accesso allo mnemonico per ripristinare il tuo account in seguito, in quanto questa è un rimozione permanente da questo dispositivo delle informazioni sul tuo account.`,
  myAccount: `Il mio account`,
  setNickname: `Imposta un soprannome così i tuoi amici possono cercarti`,
  setEmail: `Imposta una e-mail per ricevere informazioni sugli aggiornamenti Lndr`,
  nickname: `Soprannome (lettere minuscole e cifre)`,
  email: `Indirizzo email`,
  lndrVerified: {
    ok: `ok`,
    title: `Impostare più elevati limiti di liquidazione e di astinenza crypto quantità completando sapere esigenze del cliente.`,
    statusTitle: `Lo stato attuale della verifica è:`,
    tryAgain: `Non siamo riusciti a verificare la tua identità. Si prega di inviare nuovamente le informazioni e garantire che le vostre foto siano leggibili.`,
    formMessage: `Si prega di compilare tutti i campi seguenti`,
    button: `Verifica la tua identità`,
    prefix: `Leggi la nostra `,
    linkTitle: `Privacy Policy`,
    postfix: `per come saranno gestiti i dati personali.`,
    upload: `Carica un `,
    governmentId: `documento di identità rilasciato dal governo`,
    selfie: `Carica una selfie con il tuo ID emesso dal governo`,
    proofOfAddress: `Prova di indirizzo`,
    ifNotId: `(Se non ID)`,
    agree: `Ho letto e accetto la `,
    agreeLink: `Privacy Policy`,
    success: `KYC è stata presentata.`,
    idInfoHeader: `Esempi di ID includono:`,
    passport: `Passaporto`,
    drivers: `Patente di guida`,
    national: `Carta d'identità`,
    addressInfoHeader: `Esempi di prova di indirizzo:`,
    bank: `Estratto conto bancario`,
    utility: `Bolletta elettrica`,
    other: `Altro atto`,
    chooseGovernmentPhoto: `Scegli ID Governo Foto`,
    chooseSelfiePhoto: `Scegli selfie Foto`,
    chooseAddressPhoto: `Scegli Prova di indirizzo Photo`,
    emailRequired: `Hai bisogno di una e-mail per verificare la vostra identità, cliccate su "Cambia email"`,
    approved: `APPROVATO`,
    rejected: `RESPINTO`,
    pending: `In sospeso`,
    error: generalCommunicationError,
    formFields: {
      firstName: `Nome di battesimo`,
      lastName: `Cognome`,
      street: `Indirizzo`,
      city: `Città`,
      state: `Stato / Provincia`,
      postalCode: `codice postale`,
      country: `Seleziona il paese`,
      phone: `Numero di telefono`,
      dob: `Data di nascita (AAAA-MM-DD)`,
    },
    formErrors: {
      firstName: `è richiesto Nome`,
      lastName: `è richiesto Cognome`,
      street: `Via è richiesto`,
      city: `è richiesto Città`,
      state: `/ Provincia è richiesto Stato`,
      postalCode: `è richiesto un codice postale`,
      country: `è richiesto Paese`,
      phone: `è richiesto il numero di telefono`,
      dob: `è richiesto Data di nascita`,
      general: `Si prega di assicurarsi di aver compilato tutti i campi e in allegato le foto corrette`,
    }
  },
  accountManagement: {
    nickname: {
      lengthViolation: `Il soprannome deve contenere almeno 3 caratteri.`,
      compositionViolation: `Il soprannome può contenere solo cifre e lettere minuscole.`,
      duplicationViolation: `Soprannome già in uso`,
    },
    email: {
      compositionViolation: `Formato e-mail non corretto`,
      duplicationViolation: `E-mail già in uso`,
    },
    pin: {
      lengthViolation: `Il PIN deve essere di almeno 4 caratteri.`,
      matchViolation: `I codici PIN devono corrispondere.`,
      failedHashComparison: `PIN non valido, si prega di riprovare.`,
      updateSuccess: `Il PIN è stato aggiornato`,
      updateError: `Si è verificato un errore durante l'aggiornamento del PIN`,
    },
    mnemonic: {
      lengthViolation: `Lo mnemonico dovrebbe avere almeno 12 parole.`,
      unableToValidate: `Lo mnemonico inserito non è valido, si prega di riprovare.`,
    },
    setNickname: {
      success: `Il tuo soprannome è stato salvato.`,
      error: generalCommunicationError
    },
    setEmail: {
      success: `Il tuo indirizzo email è stato salvato.`,
      error: generalCommunicationError
    },
    lockTimeout: {
      top: `È necessario inserire il codice PIN dopo`,
      bottom: `minuti di inattività`,
      update: `Aggiornare`,
      error: `Non siamo stati in grado di aggiornare le impostazioni dell'account`,
      success: `Timeout di blocco aggiornato`,
    },
    addFriend: {
      success: X => `Richiesta di amicizia inviata a @${X}`,
      error: generalCommunicationError
    },
    removeFriend: {
      success: X => `Rimosso da amici: @${X}`,
      error: generalCommunicationError
    },
    loadInformation: {
      error: generalCommunicationError
    },
    cryptoBalance: {
      display: (N, B) => `Your ${N} balance is ${String(B).slice(0,8)}`,
      getError: `Impossibile recuperare il saldo Eth`,
      manage: `Gestire ETH`,
    },
    sendEth: {
      error: {
        insufficient: `Non si dispone di abbastanza ETH per questa transazione`,
        generic: `C'è stato un errore con il trasferimento, si prega di riprovare più tardi`,
        address: `Per favore, inserisci un indirizzo valido`,
        amount: `Si prega di inserire un importo maggiore di 0`,
        limitExceeded: (A, M) => `È possibile inviare solo ${CUR(A)} ${TL(A, M)} a settimana, si prega di selezionare un importo minore`,
      },
      amount: `Importo da inviare`,
      address: `Indirizzo di destinazione`,
      transfer: `Trasferimento ETH`,
      transferAll: `Trasferire tutto`,
      balance: Y => `Il tuo saldo corrente è ETH ${typeof Y === 'string'? Y.slice (0,8): ''} `,
      ethAddress: `Indirizzo Ethereum`,
      transferLowercase: `Trasferimento Eth`,
      note: (A, M) => `Si prega di notare: è possibile trasferire solo ${CUR(A)} ${TL(A, M)} a settimana fuori Lndr`,
      warning: (Z, A, M) => `Ti sono rimasti ${CUR(A)}${Z} del tuo limite ${CUR(A)} ${TL(A, M)}`,
    },
    sendERC20: {
      error: {
        insufficient: (name) => `Non si dispone di abbastanza ${name} per questa transazione`,
        generic: `C'è stato un errore con il trasferimento, si prega di riprovare più tardi`,
      },
      transfer: (name) => `Trasferimento ${name}`,
      address: `Indirizzo di destinazione`,
      balance: (name, balance) => `Il tuo attuale saldo ${name} è ${typeof balance === 'string' ? balance.slice(0,8) :''}`,
      tokenAddress: (name) => `Indirizzo ${name}`,
      txCost: (ethCost, currencyCost) => `Costo transazione: ${ethCost} ETH (${currencyCost})`,
    },
    panelHeaders: [
      `Portafoglio Indirizzo`,
      `Bilance crypto`,
      `Rimuovi l'account`,
      `Cronologia delle Transazioni ETH`,
      `Abilita PayPal`,
      `Cambia primario valuta`,
      `Sblocca Caratteristiche aggiuntive`,
      `Cambia email`,
      `Modifica PIN`,
      `Timeout blocco modifiche`,
      `Mnemonico`,
      `notifiche`,
    ],
    viewEtherscan: `Visualizza storico Etherscan`,
    profilePic: {
      change: `Cambia immagine del profilo`,
      setError: `Si è verificato un errore durante il caricamento dell'immagine, riprova più tardi`,
      getError: `Si è verificato un errore durante il recupero della tua immagine del profilo`,
      setSuccess: `Immagine del profilo aggiornata`,
    },
    logoutSuccess: `Ti sei disconnesso con successo!`,
    logoutError: generalCommunicationError,
  },

  currentBalance: name => `Il tuo attuale saldo ${name} è`,

  welcomeView: {
    by: `REALIZZATO DA`,
    makeItEasy: `Lndr rende facile rintracciare i debiti semplici`,
    weHelpFriends: `Aiutiamo gli amici a vivere, lavorare e giocare insieme.`,
    len: `Len`,
    dot: `.`,
    der: `der`,
    shareDinner: `Condividi Cena`,
    fillTank: `Riempire il serbatoio`,
    travelTogether: `Viaggiare insieme`,
    runEthereum: `Funzioniamo con ETH!`,
    firstLendingApp: `La prima app di prestito mobile protetta sulla blockchain`,
    greatConcert: `Vedere un grande concerto`,
    youPlayWithFriends: `Tu giochi con gli amici;\n noi terremo sotto controllo...`,
    start: `Iniziare`,
  },

  walkthrough: {
    skip: `salta`,
    continue: `continua`,
    step1: {
      easyToUse: `Lndr è il modo più semplice per dividere le bollette, le spese di condividere e saldare i debiti semplici con gli amici e la famiglia, tutto fatto in modo sicuro sul blockchain.`,
      len: `Len`,
      der: `der`,
    },
    step2: {
      getStarted: `Per iniziare con Lndr, è necessario aggiungere un amico.`,
      friendsScreen: `Visita gli Amici schermo per cercare, aggiungere o invitare i tuoi amici e la famiglia per collegare il Lndr.`,
    },
    step3: {
      title: `Registrazione di una transazione`,
      easy: `Divisione di un disegno di legge o l'aggiunta di un debito con un amico è facile in Lndr!`,
      selectFriend: `Seleziona il tuo amico, il tuo valuta e l'importo.`,
      addMemo: `Aggiungere alcune note nella casella di memo e clicca su Invia.`,
    },
    step4: {
      title: `Saldare i debiti`,
      ready: `Pronto a saldare i debiti?`,
      payPal: `Quando è il momento di regolare i conti con Lndr, \n- è possibile scegliere PayPal:`,
      ether: `- cryptocurrencies come l'etere:`,
      cash: `- o semplicemente registrare un regolamento in contanti:`,
      positiveBalance: `10.46`,
    },
    step5: {
      title: `Multi-valuta`,
      multiCurrency: `Lndr può tenere traccia delle transazioni, anche se capita in valute diverse.`,
      exchangeRate: `Quando si decide di regolare i conti con il tuo amico, tutte le transazioni saranno convertiti in valuta principale utilizzando i tassi di cambio più up-to-date disponibili.`,
      start: `Iniziare a utilizzare Lndr!`,
    }
  },

  debtManagement: {
    shell: `Nuova transazione`,
    add: `Aggiungere debito`,
    selectFriend: `Selezionare`,
    lend: `Nuovo prestito`,
    borrow: `Nuovo debito`,
    owesMe: `Mi deve`,
    iOwe: `Sono in debito`,
    iLent: `Un amico mi deve`,
    iBorrowed: `Devo a un amico`,
    settleUpLower: `Saldare i debiti`,
    amountToSettle: `Importo da saldare`,
    total: `Totale`,
    record: `registro`,
    records: `registri`,
    chooseCurrency: `Scegli una valuta`,

    createError: {
      amountTooLow: `L'importo deve essere superiore a $0`,
      amountTooHigh: `L'importo deve essere inferiore a $1.000.000.000`,
      selfAsFriend: `Non è possibile creare il debito con te stesso, scegli un altro amico`,
      pending: `Si prega di completare le tue transazioni in sospeso con questo utente prima di crearne un'altra`,
      insufficientEth: E => `Hai bisogno di almeno ${E} ETH per saldare il debito, vai in Impostazioni per visualizzare il tuo saldo`,
    },
    fields: {
      currency: `Valuta`,
      amount: `Importo`,
      settlementAmount: `Importo da saldare`,
      selectFriend: `Amico`,
      memo: `Promemoria`,
      direction: `Selezionare la dichiarazione corretta`,
    },
    memo: {
      example: `Scrivi qui il promemoria`,
    },
    direction: {
      lend: X => `${X} mi deve`,
      borrow: X => `devo ${X}`,
      initiatedLend: X => `${X} dice che ti deve`,
      initiatedBorrow: X => `${X} dice che gli devi`,
      pendingLend: X => `@${X} ti deve`,
      pendingBorrow: X => `Devi@${X}`,
      pendingLendSettlement: S => `@${S.debtorNickname} vuole un pagamento in ${S.settlementCurrency}`,
      pendingBorrowSettlement: S => `@${S.creditorNickname} vuole saldare un debito con te in ${S.settlementCurrency}`,
      pendingLendSettlementMe: S => `Hai richiesto di saldare un debito con @${S.debtorNickname} in ${S.settlementCurrency}`,
      pendingBorrowSettlementMe: S => `Hai richiesto che @${S.creditorNickname} saldi il debito in ${S.settlementCurrency}`,
    },
    pending: {
      success: F => `Debito in sospeso inviato a @${F.nickname}`,
      error: generalCommunicationError
    },
    pendingParens: `(in sospeso)`,
    confirmation: {
      transaction: CP => `La transazione con ${CP} è stata confermata con successo`,
      settlement: CP => `La transazione con ${CP} è stata confermata con successo`,
      error: `Non è possibile confermare la transazione in questo momento, riprova più tardi`,
    },
    rejection: {
      success: `La transazione è stata rifiutata`,
      error: `Impossibile rifiutare la transazione in questo momento, riprova più tardi`,
    },
    balances: {
      error: `Impossibile caricare i saldi in questo momento, riprova più tardi`,
    },
    for: M => `a ${M}`,
    settleUp: `Saldare un debito`,
    settleTotal: `Totale debito da saldare`,
    settleUpMemo: (D, A) => `${D === 'lend' ? 'Saldare debito per': 'Richiesta di pagamento di'} ${A} `,
    recordSettleUpMemo: `Salda debito`,
    balanceByCurrency: `Dettagli`,
  },
  settlementManagement: {
    bilateral: {
      error: {
        insufficient: X => `La tua transazione con ${X} non è riuscita a causa di fondi insufficienti`,
        generic: X => `Si è verificato un errore durante l'elaborazione della transazione con ${X}`,
      }
    },
    eth: `Salda debito con ETH`,
    erc20: name => `Settle with ${name}`,
    paypal: `Salda debito con PayPal`,
    nonPayment: `Registrare un pagamento`,
    select: `Selezionare il tipo di insediamento`,
  },

  accountViewLanguage: {
    lndr: `L n d r`,
    home: `Home`,
    friends: `Amici`,
    activity: `Attività`,
  },

  notifications: {
    toggleNotifications: `Attiva/Disattiva le notifiche`,
    enable: `Attiva`,
    disable: `Disattiva`,
  },

  pendingTransactionsLanguage: {
    shell: `Transazione in sospeso`,
    title: `In sospeso`,
    memo: `Memo:`,
    for: `Per`,
    none: `Non ci sono transazioni in sospeso`,
    confirmationQuestion: `Sei sicuro di voler confermare questa transazione?`,
    pendingAnnouncement: `Questa transazione è in attesa di conferma da parte della controparte.`,
    bilateral: `In attesa del completamento del trasferimento`,
    confirm: `Confermare`,
    reject: `Rifiuta la transazione`,
    rejectRequest: `Rifiutare`,
    cancel: `Annulla transazione`,
    direction: {
      lend: (X, Z) => `Devi @${X} ${Z}`,
      borrow: (X, Z) => `Devi @${X} ${Z}`,
    }
  },

  pendingSettlementsLanguage: {
    shell: `Pagamento in sospeso`,
    title: `In sospeso`,
    none: `Non ci sono pagamenti in sospeso`,
    confirm: `Confermare`,
    reject: `Rifiuta pagamento`,
    cancel: `Annulla pagamento`,
  },

  recentTransactionsLanguage: {
    title: `Completato`,
    none: `Non ci sono transazioni completate`,
    direction: {
      lend: (X, Z) => `@${X} ti deve ${Z}`,
      borrow: (X, Z) => `Devi @${X} ${Z}`
    },
    balance: `Saldo`,
    consolidatedBalance: `Saldo`,
    friends: FS => `(da ${FS} ${FS === 1 ? 'friend' :'friends'})`,
  },

  tabs: {
    home: `Home `,
    friends: `   Amici   `,
    activity: `Attività`,
  },

  confirmation: {
    shell: `Conferma`,
    done: `Fatto`,
    create: {
      start: `Abbiamo inviato il documento a `,
      end: ` per la conferma.`,
    },
    confirm: {
      start: `Hai confermato questo archivio da `,
      end: `.`,
    },
    reject: {
      start: `Abbiamo fatto sapere a `,
      end: `che hai rifiutato questo archivio.`,
    },
    confirmFriend: {
      start: `Ora tu e `,
      end: ` siete amici!`,
    },
    rejectFriend: {
      start: `Hai rifiutato la richiesta di amicizia da `,
      end: `.`,
    },
    rejectOutboundFriendRequest: {
      start: `Hai annullato la richiesta di amicizia di `,
      end: `.`,
    },
    ethSent: {
      start: `Hai inviato con successo `,
      end: ` ETH e l'hash per la transazione è `,
    },
    erc20Sent: {
      start: `Hai inviato con successo `,
      end: ` e l'hash per la transazione è `,
    },
    requestPayPalPayee: {
      start: `Abbiamo lasciato `,
      end: ` sa che si vorrebbe risolvere con PayPal.`,
    },
    requestPayPalPayment: {
      start: `Abbiamo lasciato `,
      end: ` sapere che desideri essere pagato con PayPal.`,
    },
    settledWithPayPal: {
      start: `Abbiamo lasciato `,
      end: ` sapere che hai sistemato con PayPal.`,
    },
    kycSuccess: {
      start: `Grazie! Il tuo account è in corso di verifica.

      `,
      end: `Riceverai una notifica quando il tuo funzionalità aggiuntive sono sbloccati.`
    },
    status: `È possibile visualizzare lo stato di tale operazione nella `,
    activity: `scheda attività.`,
  },

  pendingFriendRequestsLanguage: {
    shell: `Richiesta di amicizia`,
    message: `Richieste di amicizia`,
    request: F => `@${F} vuole essere tuo amico!`,
    outbound: F => `È inviato una richiesta di amicizia a @${F}`,
  },

  privacyPolicy: {
    link: `blockmason.io/lndr/terms/`,
    message: `Cliccando sotto confermi di aver letto e accettato l'informativa sulla privacy di Blockmason. Blockmason può usare il tuo indirizzo e-mail per inviare aggiornamenti su Blockmason e LNDR. Ecco un link all'informativa sulla privacy:`,
  },

  payPalLanguage: {
    connectPayPal: `Collegare PayPal`,
    connectSuccess: `PayPal attivato con successo.`,
    disconnectPayPal: `Scollegare PayPal`,
    disconnected: `PayPal scollegato.`,
    requestPayPalPayment: `Richiesta PayPal Payment`,
    sendWithPayPal: `Invia Con PayPal`,
    enablePayPal: `Abilita PayPal`,
    requestPayPalPayee: `Richiedi PayPal`,
    enablePayPalForFriend: F => `Attivazione di PayPal permette @${F} a pagare you.`,
    friendNotEnabled: F => `@${F} non ha abilitato PayPal pagamenti.`,
    friendRequestedConnect: F => `@${F} vuole pagare tramite PayPal`,
    requestFriendConnect: F => `È chiesto @${F} per abilitare PayPal`,
    feesNotification: `Non include tasse di PayPal`,
    feesInformationHeader: `PayPal Tasse Informazioni`,
    feesInformation: `1. Il tuo conto PayPal deve essere legato a un conto bancario.
    
2. A pagamento in una valuta diversa da quella della vostra banca incorrerà in una tassa di $ 0,35.

3. spese di trasferimento internazionali:
    USA a Canada / Europa: $ 2.99
    USA a altrove: $ 4.99

4. Queste spese non sono complete. Per le informazioni più aggiornate visitare il sito:

    https://www.paypal.com/us/webapps/mpp/paypal-fees#sending-us`,
    payPalSite: `PayPal.com`,
  },

  countries: [
    { name: `afghanistan`, code: 'AFG' },
    { name: `Albania`, code: 'ALB' },
    { name: `algeria`, code: 'DZA' },
    { name: `Andorra`, code: 'AND' },
    { name: `angola`, code: 'AGO' },
    { name: `Anguilla`, code: 'AIA' },
    { name: `Antartide`, code: 'ATA' },
    { name: `Antigua e Barbuda`, code: 'ATG' },
    { name: `Argentina`, code: 'ARG' },
    { name: `Armenia`, code: 'ARM' },
    { name: `aruba`, code: 'ABW' },
    { name: `Australia`, code: 'AUS' },
    { name: `Austria`, code: 'AUT' },
    { name: `Azerbaijan`, code: 'AZE' },
    { name: `Bahamas`, code: 'BHS' },
    { name: `Bahrain`, code: 'BHR' },
    { name: `Bangladesh`, code: 'BGD' },
    { name: `Barbados`, code: 'BRB' },
    { name: `Bielorussia`, code: 'BLR' },
    { name: `Belgio`, code: 'BEL' },
    { name: `Belize`, code: 'BLZ' },
    { name: `Benin`, code: 'BEN' },
    { name: `Bermuda`, code: 'BMU' },
    { name: `Bhutan`, code: 'BTN' },
    { name: `Bolivia`, code: 'BOL' },
    { name: `Bosnia Erzegovina`, code: 'BIH' },
    { name: `Botswana`, code: 'BWA' },
    { name: `Brasile`, code: 'BRA' },
    { name: `Brunei`, code: 'BRN' },
    { name: `Bulgaria`, code: 'BGR' },
    { name: `Burkina Faso`, code: 'BFA' },
    { name: `Burundi`, code: 'BDI' },
    { name: `Cabo Verde`, code: 'CPV' },
    { name: `Cambogia`, code: 'KHM' },
    { name: `Camerun`, code: 'CMR' },
    { name: `Canada`, code: 'CAN' },
    { name: `Isole Cayman`, code: 'CYM' },
    { name: `Repubblica Centrafricana`, code: 'CAF' },
    { name: `Chad`, code: 'TCD' },
    { name: `Chile`, code: 'CHL' },
    { name: `Cina`, code: 'CHN' },
    { name: `Colombia`, code: 'COL' },
    { name: `Comoros`, code: 'COM' },
    { name: `Congo`, code: 'COG' },
    { name: `Congo`, code: 'COD' },
    { name: `Isole Cook`, code: 'COK' },
    { name: `Costa Rica`, code: 'CRI' },
    { name: `Costa d'Avorio`, code: 'CIV' },
    { name: `Croazia`, code: 'HRV' },
    { name: `Cuba`, code: 'CUB' },
    { name: `Curacao`, code: 'CUW' },
    { name: `Cipro`, code: 'CYP' },
    { name: `Repubblica Ceca`, code: 'CZE' },
    { name: `Danimarca`, code: 'DNK' },
    { name: `Gibuti`, code: 'DJI' },
    { name: `Dominica`, code: 'DMA' },
    { name: `Repubblica Dominicana`, code: 'DOM' },
    { name: `Ecuador`, code: 'ECU' },
    { name: `Egitto`, code: 'EGY' },
    { name: `El Salvador`, code: 'SLV' },
    { name: `Guinea Equatoriale`, code: 'GNQ' },
    { name: `l'Eritrea`, code: 'ERI' },
    { name: `Estonia`, code: 'EST' },
    { name: `Eswatini`, code: 'SWZ' },
    { name: `Etiopia`, code: 'ETH' },
    { name: `Fiji`, code: 'FJI' },
    { name: `Finlandia`, code: 'FIN' },
    { name: `Francia`, code: 'FRA' },
    { name: `Guiana francese`, code: 'GUF' },
    { name: `Polinesia francese`, code: 'PYF' },
    { name: `Gabon`, code: 'GAB' },
    { name: `Gambia`, code: 'GMB' },
    { name: `Georgia`, code: 'GEO' },
    { name: `Germania`, code: 'DEU' },
    { name: `Ghana`, code: 'GHA' },
    { name: `Gibilterra`, code: 'GIB' },
    { name: `Grecia`, code: 'GRC' },
    { name: `Groenlandia`, code: 'GRL' },
    { name: `Grenada`, code: 'GRD' },
    { name: `Guadeloupe`, code: 'GLP' },
    { name: `Guam`, code: 'GUM' },
    { name: `Guatemala`, code: 'GTM' },
    { name: `Guinea`, code: 'GIN' },
    { name: `Guinea-Bissau`, code: 'GNB' },
    { name: `Guyana`, code: 'GUY' },
    { name: `Haiti`, code: 'HTI' },
    { name: `Vaticano`, code: 'VAT' },
    { name: `Honduras`, code: 'HND' },
    { name: `Hong Kong`, code: 'HKG' },
    { name: `Ungheria`, code: 'HUN' },
    { name: `Islanda`, code: 'ISL' },
    { name: `India`, code: 'IND' },
    { name: `Indonesia`, code: 'IDN' },
    { name: `Ho corso`, code: 'IRN' },
    { name: `Iraq`, code: 'IRQ' },
    { name: `Irlanda`, code: 'IRL' },
    { name: `Isola di Man`, code: 'IMN' },
    { name: `Israele`, code: 'ISR' },
    { name: `Italia`, code: 'ITA' },
    { name: `Giamaica`, code: 'JAM' },
    { name: `Giappone`, code: 'JPN' },
    { name: `Giordania`, code: 'JOR' },
    { name: `Kazakistan`, code: 'KAZ' },
    { name: `Kenia`, code: 'KEN' },
    { name: `Kiribati`, code: 'KIR' },
    { name: `Corea (Corea del Nord)`, code: 'PRK' },
    { name: `Corea (ROK)`, code: 'KOR' },
    { name: `Kuwait`, code: 'KWT' },
    { name: `Kyrgyzstan`, code: 'KGZ' },
    { name: `Laos`, code: 'LAO' },
    { name: `Lettonia`, code: 'LVA' },
    { name: `Libano`, code: 'LBN' },
    { name: `Lesoto`, code: 'LSO' },
    { name: `Liberia`, code: 'LBR' },
    { name: `Libia`, code: 'LBY' },
    { name: `Liechtenstein`, code: 'LIE' },
    { name: `Lituania`, code: 'LTU' },
    { name: `Lussemburgo`, code: 'LUX' },
    { name: `Macao`, code: 'MAC' },
    { name: `Macedonia`, code: 'MKD' },
    { name: `Madagascar`, code: 'MDG' },
    { name: `Malawi`, code: 'MWI' },
    { name: `Malaysia`, code: 'MYS' },
    { name: `Maldive`, code: 'MDV' },
    { name: `Mali`, code: 'MLI' },
    { name: `Malta`, code: 'MLT' },
    { name: `Isole Marshall`, code: 'MHL' },
    { name: `Martinique`, code: 'MTQ' },
    { name: `Mauritania`, code: 'MRT' },
    { name: `Mauritius`, code: 'MUS' },
    { name: `Messico`, code: 'MEX' },
    { name: `Micronesia`, code: 'FSM' },
    { name: `Moldova`, code: 'MDA' },
    { name: `Monaco`, code: 'MCO' },
    { name: `Mongolia`, code: 'MNG' },
    { name: `Montenegro`, code: 'MNE' },
    { name: `Montserrat`, code: 'MSR' },
    { name: `Marocco`, code: 'MAR' },
    { name: `Mozambico`, code: 'MOZ' },
    { name: `Myanmar`, code: 'MMR' },
    { name: `Namibia`, code: 'NAM' },
    { name: `Nauru`, code: 'NRU' },
    { name: `Nepal`, code: 'NPL' },
    { name: `Olanda`, code: 'NLD' },
    { name: `Nuova Caledonia`, code: 'NCL' },
    { name: `Nuova Zelanda`, code: 'NZL' },
    { name: `Nicaragua`, code: 'NIC' },
    { name: `Niger`, code: 'NER' },
    { name: `Nigeria`, code: 'NGA' },
    { name: `Niue`, code: 'NIU' },
    { name: `Isole Marianne settentrionali`, code: 'MNP' },
    { name: `Norvegia`, code: 'NOR' },
    { name: `Oman`, code: 'OMN' },
    { name: `Pakistan`, code: 'PAK' },
    { name: `Palau`, code: 'PLW' },
    { name: `Palestina`, code: 'PSE' },
    { name: `Panama`, code: 'PAN' },
    { name: `Papua Nuova Guinea`, code: 'PNG' },
    { name: `Paraguay`, code: 'PRY' },
    { name: `Perù`, code: 'PER' },
    { name: `Filippine`, code: 'PHL' },
    { name: `Pitcairn`, code: 'PCN' },
    { name: `Polonia`, code: 'POL' },
    { name: `Portogallo`, code: 'PRT' },
    { name: `Porto Rico`, code: 'PRI' },
    { name: `Qatar`, code: 'QAT' },
    { name: `Riunione`, code: 'REU' },
    { name: `Romania`, code: 'ROU' },
    { name: `Federazione Russa`, code: 'RUS' },
    { name: `Ruanda`, code: 'RWA' },
    { name: `saint-Barthélemy`, code: 'BLM' },
    { name: `Sant'Elena, Ascensione e Tristan da Cunha`, code: 'SHN' },
    { name: `Saint Kitts e Nevis`, code: 'KNA' },
    { name: `Santa Lucia`, code: 'LCA' },
    { name: `saint Martin`, code: 'MAF' },
    { name: `Saint Pierre e Miquelon`, code: 'SPM' },
    { name: `Saint Vincent e Grenadine`, code: 'VCT' },
    { name: `Samoa`, code: 'WSM' },
    { name: `San Marino`, code: 'SMR' },
    { name: `Sao Tome e Principe`, code: 'STP' },
    { name: `Arabia Saudita`, code: 'SAU' },
    { name: `Senegal`, code: 'SEN' },
    { name: `Serbia`, code: 'SRB' },
    { name: `Seychelles`, code: 'SYC' },
    { name: `Sierra Leone`, code: 'SLE' },
    { name: `Singapore`, code: 'SGP' },
    { name: `Sint Maarten`, code: 'SXM' },
    { name: `Slovacchia`, code: 'SVK' },
    { name: `Slovenia`, code: 'SVN' },
    { name: `Isole Salomone`, code: 'SLB' },
    { name: `Somalia`, code: 'SOM' },
    { name: `Sud Africa`, code: 'ZAF' },
    { name: `Sudan del Sud`, code: 'SSD' },
    { name: `Spagna`, code: 'ESP' },
    { name: `Sri Lanka`, code: 'LKA' },
    { name: `Sudan`, code: 'SDN' },
    { name: `Suriname`, code: 'SUR' },
    { name: `Svezia`, code: 'SWE' },
    { name: `Svizzera`, code: 'CHE' },
    { name: `Repubblica Araba Siriana`, code: 'SYR' },
    { name: `Taiwan`, code: 'TWN' },
    { name: `Tajikistan`, code: 'TJK' },
    { name: `Tanzania`, code: 'TZA' },
    { name: `Tailandia`, code: 'THA' },
    { name: `Timor Est`, code: 'TLS' },
    { name: `Andare`, code: 'TGO' },
    { name: `Tokelau`, code: 'TKL' },
    { name: `tonga`, code: 'TON' },
    { name: `Trinidad e Tobago`, code: 'TTO' },
    { name: `Tunisia`, code: 'TUN' },
    { name: `tacchino`, code: 'TUR' },
    { name: `Turkmenistan`, code: 'TKM' },
    { name: `Isole Turks e Caicos`, code: 'TCA' },
    { name: `Tuvalu`, code: 'TUV' },
    { name: `Uganda`, code: 'UGA' },
    { name: `Ucraina`, code: 'UKR' },
    { name: `Emirati Arabi Uniti`, code: 'ARE' },
    { name: `Regno Unito`, code: 'GBR' },
    { name: `Stati Uniti d'America`, code: 'USA' },
    { name: `Stati Uniti Isole Minori`, code: 'UMI' },
    { name: `Uruguay`, code: 'URY' },
    { name: `Uzbekistan`, code: 'UZB' },
    { name: `Vanuatu`, code: 'VUT' },
    { name: `Venezuela`, code: 'VEN' },
    { name: `Viet Nam`, code: 'VNM' },
    { name: `Isole Vergini Britanniche`, code: 'VGB' },
    { name: `Isole Vergini Americane`, code: 'VIR' },
    { name: `Sahara occidentale`, code: 'ESH' },
    { name: `yemen`, code: 'YEM' },
    { name: `Zambia`, code: 'ZMB' },
    { name: `Zimbabwe`, code: 'ZWE' },
  ]
}
