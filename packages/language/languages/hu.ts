import { currencySymbols, transferLimits } from 'lndr/currencies'

const CUR = currencySymbols
const TL = transferLimits

const generalCommunicationError = 'Probléma merült fel a szerverrel való kommunikáció során, kérjük, később próbálja újra.'

export default {

  applicationName: `Lndr`,
  helloWorld: `Helló Világ`,
  noConnection: `Nincs kapcsolat`,
  retry: `Próbálja újra`,
  submit: `BEKÜLDÉS`,
  next: `Következő`,
  cancel: `Törlés`,
  back: `Lépjen Vissza`,
  copy: `Másolja a Vágólapra`,
  confirmAccount: `Megerősítés`,
  createAccount: `Fiók Létrehozása`,
  recoverAccount: `Fiók visszaállítása`,
  removeAccount: `Fiók Törlése`,
  updateAccount: `Fiók frissítése`,
  loginAction: `Kinyitás`,
  enterPin: `KÉREM, ADJA MEG PiN-KÓDJÁT`,
  changePin: `PiN-kód Módosítása`,
  enterCurrentPin: `Adja Meg Érvényes PiN-kódját`,
  logoutAction: `KIJELENTKEZÉS`,
  seeAllActivity: `Összes tevékenysége`,
  copiedClipboard: `Vágólapra Másolva`,
  pleaseWait: `Kérem, várjon`,
  addFriend: `Ismerős Hozzáadása`,
  addFriendConfirmationQuestion: `Biztos benne, hogy ezt a felhasználót ismerősként hozzáadja?`,
  removeFriend: `Ismerős Eltávolítása`,
  currentFriends: `Jelenlegi Ismerősei`,
  removeFriendConfirmationQuestion: `Biztos, hogy ezt a felhasználót el szeretné távolítani ismerősei közül?`,
  inviteFriends: `Ismerősök Meghívása az Lndr Alkalmazásba`,
  tryLndr: `Itt kipróbálhatja a Lndr Appot:`,
  friendInfo: `További információ erről a kapcsolatról:`,
  noFriends: `A kezdéshez adjon hozzá néhány ismerőst!`,
  noMatches: `A feltételeknek megfelelő felhasználót nem találtunk`,
  noBalances: `Önnek nincs rögzített tartozása`,
  addFriendButton: `Ismerős Hozzáadása`,
  alreadyFriendsButton: `Ismerősök`,
  friendShell: `Ismerős`,
  tip: `Tipp:`,
  notice: `Értesítés:`,
  welcome: `Üdvözöljük a saját LNDR alkalmazásában`,
  noBalanceWarning: `Jelenleg nem tudjuk egyenlegét betölteni, kérjük, később próbálja újra.`,
  totalBalance: `Összes Egyenleg:`,
  totalBalances: `Összes Partner:`,
  newTransaction: `Új Tranzakció`,
  needsReview: `Elbírálás Alatt`,
  owesMe: `Nekem tartoznak`,
  iOwe: `Én tartozom valakinek`,
  newPassword: `Új Jelszó (minimum 8 karakter)`,
  confirmPassword: `Jelszó Megerősítése`,
  newPin: `Új, 4-jegyű PiN-kód`,
  enterNewPin: `ADJON MEG EGY ÚJ, 4-JEGYŰ PiN-KÓDOT`,
  confirmPin: `KÉRJÜK, ERŐSÍTSE MEG PiN-KÓDJÁT`,
  newAccount: `Új felhasználói fiók létrehozása`,
  loginAccount: `Fiók kinyitása`,
  recoverExistingAccount: `Meglévő fiók helyreállítása`,
  recoverMnemonic: `Emlékeztető (12 szó jelenik \nha létrehozta fiókját)`,
  recoverMnemonicLengthError: `Az emlékeztetőnek pontosan 12 szóból kell állnia`,
  successTitle: `Sikerült`,
  errorTitle: `Hiba`,
  showMnemonic: `Jelenítse Meg A 12 Szavas Emlékeztetőt`,
  mnemonicExhortation: `Fiókja visszaállításához erre a 12 szavas mondatra van szüksége, kérjük tárolja biztonságos és titkos helyen.`,
  addressExhortation: `Ahhoz, hogy a Lndr segítségével rendezhesse tartozásait, küldje el címére az Ethereumot.`,
  removeAccountTitle: `Biztos, hogy el szeretné távolítani fiókját erről az eszközről?`,
  removeAccountExhortation: `Ügyeljen arra, hogy később hozzá tudjon férni emlékeztetőjéhez, mivel Fiókadatai erről az eszközről végleges törlésre kerülnek.`,
  myAccount: `Saját Fiók`,
  setNickname: `Állítson be egy becenevet, hogy ismerősei erre rákereshessenek.`,
  setEmail: `Adjon meg egy email címet, hogy a Lndr frissítésekről tájékoztatást kapjon.`,
  nickname: `Becenév (kisbetűk és számok)`,
  email: `Email Cím`,
  lndrVerified: {
    ok: `rendben`,
    title: `Állítsa magasabb település határa és kripto elvonási mennyiségű kitöltésével Know Your Customer követelményeknek.`,
    statusTitle: `Az aktuális állapotát ellenőrzés:`,
    tryAgain: `Nem tudtuk, hogy igazolja személyazonosságát. Kérjük, küldje újra az adatokat, és biztosítja, hogy a képek jól olvasható.`,
    formMessage: `Kérjük, töltse ki az összes alábbi mezőket`,
    button: `Igazolja a személyazonosságát`,
    prefix: `Olvassa el `,
    linkTitle: `adatvédelmi irányelveit személyes `,
    postfix: ` adatait hogyan fogják kezelni. `,
    upload: `Tölts fel egy `,
    governmentId: `kormány által kiadott azonosító`,
    selfie: `Töltse fel önmagáról és a kormány által kiadott azonosító`,
    proofOfAddress: `Igazolása címet`,
    ifNotId: `(Ha nem ID)`,
    agree: `Elolvastam és elfogadom az `,
    agreeLink: `adatvédelmi politika`,
    success: `KYC nyújtottak be.`,
    idInfoHeader: `Példák ID közé tartoznak:`,
    passport: `Útlevél`,
    drivers: `Jogsi`,
    national: `Nemzeti személyazonosító igazolvány`,
    addressInfoHeader: `Példák igazolás címe:`,
    bank: `Bankszámlakivonat`,
    utility: `Közüzemi számla`,
    other: `egyéb dokumentum`,
    chooseGovernmentPhoto: `Válassza kormány ID Photo`,
    chooseSelfiePhoto: `Válasszon szelfi Photo`,
    chooseAddressPhoto: `Válasszon igazolása Cím Photo`,
    error: generalCommunicationError,
    formFields: {
      firstName: `Keresztnév`,
      lastName: `Vezetéknév`,
      street: `Cím`,
      city: `Város`,
      state: `Állam / tartomány`,
      postalCode: `Irányítószám`,
      country: `Válassz országot`,
      phone: `Telefonszám`,
      dob: `Születés dátuma (ÉÉÉÉ-HH-NN)`,
    },
    formErrors: {
      firstName: `Első neve van szükség`,
      lastName: `Vezetéknév van szükség`,
      street: `Street szükséges`,
      city: `A város megadása kötelező`,
      state: `Állam / tartomány van szükség`,
      postalCode: `Irányítószám van szükség`,
      country: `Ország szükséges`,
      phone: `Telefonszám szükséges`,
      dob: `Születési idő szükséges`,
      general: `Kérjük, ellenőrizze, hogy kitöltötte az összes mezőt és a csatolt helyes fotók`,
    }
  },
  accountManagement: {
    nickname: {
      lengthViolation: `Becenév legalább 3 karakter legyen.`,
      compositionViolation: `Becenév csak számokból és kisbetűk állhat.`,
      duplicationViolation: `Ez a becenév már foglalt`,
    },
    email: {
      compositionViolation: `Email formátuma helytelen`,
      duplicationViolation: `Ez az email már foglalt`,
    },
    pin: {
      lengthViolation: `A PiN-kód legalább 4 karakter legyen.`,
      matchViolation: `A PiN-kódok egyeznie kell.`,
      failedHashComparison: `A PiN-kód nem érvényes, kérjük, próbálja újra.`,
      updateSuccess: `PiN-kódját frissítettük`,
      updateError: `Hiba történt a PiN-kód frissítése során`,
    },
    mnemonic: {
      lengthViolation: `Az emlékeztetőnek legalább 12 szóból kell állnia.`,
      unableToValidate: `A megadott emlékeztető nem volt érvényes, kérjük, próbálja újra.`,
    },
    setNickname: {
      success: `Beceneve mentésre került.`,
      error: generalCommunicationError
    },
    setEmail: {
      success: `Email címe mentésre került.`,
      error: generalCommunicationError
    },
    lockTimeout: {
      top: `PiN-kódját újból meg kell adnia`,
      bottom: `perc inaktivitást követően`,
      update: `Frissítés`,
      error: `Fiók beállításait nem sikerült frissíteni`,
      success: `Időtúllépés Zárolása Frissítve`,
    },
    addFriend: {
      success: X => `Ismerősnek jelölés elküldve @${X} `,
      error: generalCommunicationError
    },
    removeFriend: {
      success: X => `Ismerősök közül törölve: @${X}`,
      error: generalCommunicationError
    },
    loadInformation: {
      error: generalCommunicationError
    },
    ethBalance: {
      display: Y => `ETH egyenlege ${String (Y) .slice (0,8)}`,
      getError: `Az Eth egyenleg lekérdezése nem sikerült`,
      manage: `ETH KEZELÉSE`,
    },
    sendEth: {
      error: {
        insufficient: `Ehhez a tranzakcióhoz nincs elegendő ETH`,
        generic: `Az átutalás során hiba történt, kérjük, később próbálja újra`,
        address: `Kérjük, érvényes címet adjon meg`,
        amount: `Kérjük, egy 0-nál nagyobb összeget adjon meg`,
        limitExceeded: A => `Hetente csak ${CUR(A)} ${TL(A)} összeget küldhet, kérjük, adjon meg egy kisebb összeget`
      },
      amount: `Küldésre Szánt Összeg`,
      address: `Rendeltetési Cím ('0x' előtag nélkül)`,
      transfer: `ETH Átutalása`,
      transferAll: `Minden átutalása`,
      balance: Y => `Jelenlegi ETH egyenlege ${typeof Y === 'string'? Y.slice (0,8): ''} `,
      ethAddress: `Ethereum Cím`,
      txCost: (B, A) => `Jelenlegi tranzakciós költsége ${CUR(A)} ${B}`,
      transferLowercase: `Eth Átutalása`,
      note: A => `Kérjük, vegye figyelembe: a Lndr rendszerén kívül hetente csak ${CUR(A)} ${TL(A)} összeget utalhat át`,
      warning: (Z, A) => `${CUR(A)} ${Z} a fennmaradó összeg a ${CUR(A)} ${TL(A)} limitjéből:`,
    },
    sendBcpt: {
      error: {
        insufficient: `Ehhez a tranzakcióhoz nincs elegendő BCPT`,
        generic: `Az átutalás során hiba történt, kérjük, később próbálja újra`,
      },
      transfer: `BCPT Átutalása`,
      address: `Rendeltetési Cím ('0x' előtag nélkül)`,
      balance: Y => `Jelenlegi BCPT egyenlege ${typeof Y === 'string'? Y.slice (0,8): ''} `,
      bcptAddress: `BCPT Cím`,
    },
    panelHeaders: [
      `ETH (& BCPT) Cím`,
      `ETH Egyenleg`,
      `BCPT Egyenleg`,
      `Fiók Törlése`,
      `ETH Tranzakció Előzmények`,
      `Engedélyezze a PayPalt`,
      `Megváltoztathatja az elsődleges pénzneme`,
      `Kinyit További jellemzők`,
      `PIN-kód Módosítása`,
      `Email Módosítása`,
      `Időtúllépés Zárolás Módosítása`,
      `Emlékeztető`,
      `Értesítések`,
    ],
    viewEtherscan: `Etherscan Előzmények Megtekintése`,
    profilePic: {
      change: `Profilkép Módosítása`,
      setError: `Hiba történt a kép feltöltése közben, kérjük, később próbálja újra`,
      getError: `Hiba történt profilképének visszaállítása közben`,
      setSuccess: `Profilképe frissítve`,
    },
    logoutSuccess: `Sikeresen kijelentkezett!`,
    logoutError: generalCommunicationError,
  },

  currentBalance: {
    eth: `Aktuális Eth egyenlege:`,
    bcpt: `Aktuális BCPT egyenlege:`,
  },

  welcomeView: {
    by: `KÉSZÍTETTE`,
    makeItEasy: `A Lndr megkönnyíti egyszerű tartozásai nyomon követését`,
    weHelpFriends: `Segítünk abban, hogy az ismerősök együtt élhessen, dolgozhassanak és játszhassanak.`,
    len: `Len`,
    dot: `.`,
    der: `der`,
    shareDinner: `Vacsorázzanak Közösen`,
    fillTank: `Töltse Tele Tankját`,
    travelTogether: `Utazzanak Együtt`,
    runEthereum: `ETH segítségével működünk!`,
    firstLendingApp: `Az első olyan hitelezéssel foglalkozó mobil alkalmazás, melynek biztonságát blokklánc nyújtja.`,
    greatConcert: `Vegyen Részt Egy Nagyszerű Koncerten`,
    youPlayWithFriends: `Míg ismerőseivel játszik;\n mi figyelünk...`,
    start: `Kezdje El`,
  },

  walkthrough: {
    skip: `Átugrani`,
    continue: `Folytatni`,
    step1: {
      easyToUse: `Lndr a legegyszerűbb módja, hogy szét számlák, részvény költségek és rendezze egyszerű tartozások barátok és a család, mindezt biztonságosan a blockchain.`,
      len: `Len`,
      der: `der`,
    },
    step2: {
      getStarted: `A kezdéshez az Lndr, akkor kell hozzá egy barát.`,
      friendsScreen: `Látogasson el a barátai képernyőn keresni, hozzáadás vagy meghívás barátok és a család csatlakozni a Lndr.`,
    },
    step3: {
      title: `Felvétel Tranzakciós`,
      easy: `Felosztása a számlát, vagy hozzáadtuk adósság egy barát könnyű Lndr!`,
      selectFriend: `Válassza a barátod, a valuta és az összeget.`,
      addMemo: `Hozzá néhány megjegyzés a feljegyzés mezőbe, és kattintson a Küldés gombra.`,
    },
    step4: {
      title: `Kiegyenlítés`,
      ready: `Kiegyenlítés kész?`,
      payPal: `Amikor itt az ideje, hogy rendezze fel Lndr, \n megadhatja PayPal:`,
      ether: `- cryptocurrencies, mint az éter:`,
      cash: `- vagy egyszerűen csak rögzíti a pénzbeli elszámolás:`,
      positiveBalance: `10.46`,
    },
    step5: {
      title: `Többdevizás`,
      multiCurrency: `Lndr nyomon követheti a tranzakciókat akkor is, ha történetesen különböző pénznemekben.`,
      exchangeRate: `Ha úgy dönt, hogy rendezze Up a barátod, minden ügylet kerül átalakításra az elsődleges pénznem a leginkább up-to-date árfolyam rendelkezésre áll.`,
      start: `Kezdje el használni Lndr!`,
    }
  },

  debtManagement: {
    shell: `Új Tranzakció`,
    add: `Tartozás Hozzáadása`,
    selectFriend: `Kiválasztás`,
    lend: `Új Kölcsön`,
    borrow: `Új Tartozás`,
    owesMe: `Tartozik nekem`,
    iOwe: `Tartozom`,
    iLent: `Egy ismerősöm tartozik nekem`,
    iBorrowed: `Tartozom egy ismerősömnek`,
    settleUpLower: `Kiegyenlítés`,
    amountToSettle: `Kiegyenlítendő Összeg`,
    total: `Összes`,
    record: `feljegyzés`,
    records: `feljegyzések`,
    chooseCurrency: `Válasszon pénznemet`,

    createError: {
      amountTooLow: `Az összegnek nagyobbnak kell lennie, mint $ 0`,
      amountTooHigh: `Az összegnek kevesebbnek kell lennie, mint $ 1.000.000.000`,
      selfAsFriend: `Saját magának nem tartozhat, válasszon egy másik ismerőst`,
      pending: `Kérjük, mielőtt ezzel a felhasználóval új tranzakciót hozna létre, rendezze vele a függőben levő tranzakciókat`,
      insufficientEth: E => `Meg kell legalább ${E} ETH összeget ki kell fizetnie, egyenlegét a Beállítások menüpontban tekintheti meg`,
    },
    fields: {
      currency: `Pénznem`,
      amount: `Összeg`,
      settlementAmount: `Kifizetendő Összeg`,
      selectFriend: `Ismerős`,
      memo: `Memó`,
      direction: `Válassza Ki a Helyes Állítást`,
    },
    memo: {
      example: `Írja ide az emlékeztető memót`,
    },
    direction: {
      lend: X => `${X} tartozik nekem`,
      borrow: X => `Nekik tartozom ${X}`,
      initiatedLend: X => `${X} mondja, ő tartozik`,
      initiatedBorrow: X => `${X} mondja, Ön tartozik`,
      pendingLend: X => `@${X} tartozik Önnek`,
      pendingBorrow: X => `Ön tartozik neki @${X} `,
      pendingLendSettlement: S => `@${S.debtorNickname} kifizetést kér az alábbi pénznemben ${S.settlementCurrency}`,
      pendingBorrowSettlement: S => `@${S.creditorNickname} szeretne fizetni Önnek az alábbi pénznemben ${S.settlementCurrency} `,
      pendingLendSettlementMe: S => `Ön kérte, hogy tartozása a @${S.debtorNickname} felhasználóval ${S.settlementCurrency} pénznemben rendezésre kerüljön`,
      pendingBorrowSettlementMe: S => `Ön kérte, hogy @${S.creditorNickname} rendezze tartozását ${S.settlementCurrency} pénznemben`,
    },
    pending: {
      success: F => `Függőben levő tartozás elküldve @${F.nickname} részére`,
      error: generalCommunicationError
    },
    pendingParens: `(függőben levő)`,
    confirmation: {
      transaction: CP => `Tranzakció ${CP}-val sikeresen megerősítve`,
      settlement: CP => `Kifizetés ${CP}-val sikeresen megerősítve`,
      error: `Jelenleg nem tudjuk visszaigazolni a tranzakciót, kérjük, később próbálja újra.`,
    },
    rejection: {
      success: `A tranzakció elutasításra került`,
      error: `Jelenleg nem tudjuk elutasítani a tranzakciót, kérjük, később próbálja újra.`,
    },
    balances: {
      error: `Jelenleg nem tudjuk betölteni az egyenlegeket, kérjük, később próbálja újra.`,
    },
    for: M => ` ${M} részére`,
    settleUp: `Kiegyenlítés`,
    settleTotal: `Összes Kiegyenlítése`,
    settleUpMemo: (D, A) => `${D === 'lend' ? 'Kiegyenlítés neki': 'Kérés a kiegyenlítéshez neki'} ${A} `,
    recordSettleUpMemo: `kiegyenlítés alatt`,
    balanceByCurrency: `Részletek`,
  },
  settlementManagement: {
    bilateral: {
      error: {
        insufficient: X => `A ${X} való kifizetés elégtelen pénzeszközök miatt nem sikerült`,
        generic: X => `Hiba történt a ${X} számára történt kifizetése közben`,
      }
    },
    eth: `Kiegyenlítés ETH használatával`,
    paypal: `Kiegyenlítés PayPal használatával`,
    nonPayment: `Kifizetés Rögzítése`,
    select: `Kiválasztás település típusa`,
  },

  accountViewLanguage: {
    lndr: `L n d r`,
    home: `Kezdőlap`,
    friends: `Ismerősök`,
    activity: `Tevékenység`,
  },

  notifications: {
    toggleNotifications: `Toggle Értesítések`,
    enable: `Bekapcsolás`,
    disable: `Kikapcsolás`,
  },

  pendingTransactionsLanguage: {
    shell: `Függő Tranzakciók`,
    title: `Függőben levő`,
    memo: `Memó:`,
    for: `Neki:`,
    none: `Nincsenek függőben lévő tranzakciói`,
    confirmationQuestion: `Biztos, hogy szeretné megerősíteni ezt a tranzakciót?`,
    pendingAnnouncement: `Ez a tranzakció a másik fél megerősítésére vár.`,
    bilateral: `Várakozás Eth átutalás befejezéséhez`,
    confirm: `Megerősítés`,
    reject: `Tranzakció Elutasítása`,
    rejectRequest: `Elutasítás`,
    cancel: `Tranzakció Törlése`,
    direction: {
      lend: (X, Z) => `@${X} tartozik Önnek ${Z}`,
      borrow: (X, Z) => `Ön tartozik @${X} ${Z}`,
    }
  },

  pendingSettlementsLanguage: {
    shell: `Függő Kifizetés`,
    title: `Függőben levő`,
    none: `Nincsenek függőben lévő kifizetések`,
    confirm: `Megerősítés`,
    reject: `Kifizetés Elutasítása`,
    cancel: `Kifizetés Törlése`,
  },

  recentTransactionsLanguage: {
    title: `Végrehajtva`,
    none: `Nincsenek befejezett tranzakciói`,
    direction: {
      lend: (X, Z) => `@${X} tartozik Önnek ${Z}`,
      borrow: (X, Z) => `Ön tartozik @${X} ${Z}`
    },
    balance: `Egyenleg`,
    consolidatedBalance: `Egyenleg`,
    friends: FS => `(${FS} ${FS === 1? 'ismerősétől': 'ismerőseitől'})`,
  },

  tabs: {
    home: `Kezdőlap `,
    friends: `Ismerősök`,
    activity: `Tevékenység`,
  },

  confirmation: {
    shell: `Megerősítés`,
    done: `Kész`,
    create: {
      start: `Az adatot visszaigazolásra elküldtük `,
      end: `nak.`,
    },
    confirm: {
      start: ` `,
      end: `már megerősítette ezt az adatot.`,
    },
    reject: {
      start: `Tudatjuk `,
      end: `al, hogy ezt az adatot elutasította..`,
    },
    confirmFriend: {
      start: `Most már `,
      end: ` ismerőse!`,
    },
    rejectFriend: {
      start: `Elutasította `,
      end: ` ismerősnek jelölését.`,
    },
    rejectOutboundFriendRequest: {
      start: `Megszakította a barátja kérését `,
      end: `.`,
    },
    ethSent: {
      start: `Sikeresen elküldött `,
      end: ` ETH-t, és a tranzakciós hash `,
    },
    bcptSent: {
      start: `Sikeresen elküldött `,
      end: ` BCPT-t, és a tranzakciós hash `,
    },
    requestPayPalPayee: {
      start: `Már hagyja `,
      end: ` tudja, hogy szeretne rendezni a PayPal.`,
    },
    requestPayPalPayment: {
      start: `Már hagyja `,
      end: ` tudja, hogy azt szeretné, hogy kell fizetni a PayPal.`,
    },
    settledWithPayPal: {
      start: `Már hagyja `,
      end: ` tudom, hogy már állandó PayPal.`,
    },
    kycSuccess: {
      start: `Köszönöm! Fiókja vizsgálata folyamatban van.  
      
      `,
      end: `Akkor be kell jelenteni, ha a kiegészítő funkciók nyithatóak.` 
    },
    status: `A tevékenység fülön megtekintheti a jelen `,
    activity: `tranzakció státuszát.`,
  },

  pendingFriendRequestsLanguage: {
    shell: `Ismerősnek Jelölés`,
    message: `Ismerősnek Jelölések`,
    request: F => `@${F} szeretne az ismerőse lenni! `,
    outbound: F => `A kérelmet küldött a @${F} `,
  },

  privacyPolicy: {
    link: `lndr.io/terms/`,
    message: `Az alábbi linkre kattintva Ön megerősíti, hogy elolvasta és elfogadja a Blockmason adatvédelmi irányelveit. Blockmason használhatja az e-mail címét, hogy küldjön frissítéseket Blockmason és LNDR. Itt van egy link, hogy az adatvédelmi politika:`
  },

  payPalLanguage: {
    connectPayPal: `Kapcsolatba PayPal`,
    connectSuccess: `PayPal engedélyezése sikeresen.`,
    disconnectPayPal: `Bontása PayPal`,
    disconnected: `PayPal csatlakoztatva.`,
    requestPayPalPayment: `Request PayPal fizetés`,
    sendWithPayPal: `Küldj A PayPal`,
    enablePayPal: `Engedélyezze a PayPalt`,
    requestPayPalPayee: `Kérjen PayPal`,
    enablePayPalForFriend: F => `engedélyezése PayPal lehetővé teszi @${F} fizetni you.`,
    friendNotEnabled: F => `@${F} nem tette lehetővé PayPal kifizetések.`,
    friendRequestedConnect: F => `@${F} akar fizetni ön keresztül PayPal`,
    requestFriendConnect: F => `Te kérdezted @${F}, hogy PayPal`,
    feesNotification: `Nem tartoznak ide a PayPal díjakat`,
    feesInformationHeader: `PayPal díjak információ`,
    feesInformation: `1. A PayPal számla kell kötni a bankszámlára.
    
2. Pénznemben fizet eltér a bank deviza fizeti $ 0.35 díjat.
    
3. Nemzetközi átutalási díj:
    USA Kanada / Európa: $ 2.99
    USA bárhol máshol: $ 4.99
    
4. Ezek a díjak nem teljes körű. A legfrissebb információkért kérjük, látogasson el a:

    https://www.paypal.com/us/webapps/mpp/paypal-fees#sending-us`,
    payPalSite: `PayPal.com`,
  },

  countries: [
    { name: `Afganisztán`, code: 'AFG' },
    { name: `Albánia`, code: 'ALB' },
    { name: `Algéria`, code: 'DZA' },
    { name: `Amerikai Szamoa`, code: 'ASM' },
    { name: `Andorra`, code: 'AND' },
    { name: `Angola`, code: 'AGO' },
    { name: `Anguilla`, code: 'AIA' },
    { name: `Antarktisz`, code: 'ATA' },
    { name: `Antigua és Barbuda`, code: 'ATG' },
    { name: `Argentína`, code: 'ARG' },
    { name: `Örményország`, code: 'ARM' },
    { name: `Aruba`, code: 'ABW' },
    { name: `Ausztrália`, code: 'AUS' },
    { name: `Ausztria`, code: 'AUT' },
    { name: `Azerbajdzsán`, code: 'AZE' },
    { name: `Bahamák`, code: 'BHS' },
    { name: `Bahrein`, code: 'BHR' },
    { name: `Banglades`, code: 'BGD' },
    { name: `Barbados`, code: 'BRB' },
    { name: `Fehéroroszország`, code: 'BLR' },
    { name: `Belgium`, code: 'BEL' },
    { name: `Belize`, code: 'BLZ' },
    { name: `Benin`, code: 'BEN' },
    { name: `Bermuda`, code: 'BMU' },
    { name: `Bhután`, code: 'BTN' },
    { name: `Bolívia`, code: 'BOL' },
    { name: `Bosznia és Hercegovina`, code: 'BIH' },
    { name: `Botswana`, code: 'BWA' },
    { name: `Brazília`, code: 'BRA' },
    { name: `Brunei`, code: 'BRN' },
    { name: `Bulgária`, code: 'BGR' },
    { name: `Burkina Faso`, code: 'BFA' },
    { name: `Burundi`, code: 'BDI' },
    { name: `Cabo Verde`, code: 'CPV' },
    { name: `Kambodzsa`, code: 'KHM' },
    { name: `Kamerun`, code: 'CMR' },
    { name: `Kanada`, code: 'CAN' },
    { name: `Kajmán-szigetek`, code: 'CYM' },
    { name: `Közép-Afrikai Köztársaság`, code: 'CAF' },
    { name: `Csád`, code: 'TCD' },
    { name: `Chile`, code: 'CHL' },
    { name: `Kína`, code: 'CHN' },
    { name: `Colombia`, code: 'COL' },
    { name: `Comore-szigetek`, code: 'COM' },
    { name: `Kongó`, code: 'COG' },
    { name: `Kongó`, code: 'COD' },
    { name: `Cook-szigetek`, code: 'COK' },
    { name: `Costa Rica`, code: 'CRI' },
    { name: `Elefántcsontpart`, code: 'CIV' },
    { name: `Horvátország`, code: 'HRV' },
    { name: `Kuba`, code: 'CUB' },
    { name: `Curaçao`, code: 'CUW' },
    { name: `Ciprus`, code: 'CYP' },
    { name: `Csehország`, code: 'CZE' },
    { name: `Dánia`, code: 'DNK' },
    { name: `Dzsibuti`, code: 'DJI' },
    { name: `Dominika`, code: 'DMA' },
    { name: `Dominikai Köztársaság`, code: 'DOM' },
    { name: `Ecuador`, code: 'ECU' },
    { name: `Egyiptom`, code: 'EGY' },
    { name: `El Salvador`, code: 'SLV' },
    { name: `Egyenlítői-Guinea`, code: 'GNQ' },
    { name: `Eritrea`, code: 'ERI' },
    { name: `Észtország`, code: 'EST' },
    { name: `Eswatini`, code: 'SWZ' },
    { name: `Etiópia`, code: 'ETH' },
    { name: `Fiji`, code: 'FJI' },
    { name: `Finnország`, code: 'FIN' },
    { name: `Franciaország`, code: 'FRA' },
    { name: `Francia Guyana`, code: 'GUF' },
    { name: `Francia Polinézia`, code: 'PYF' },
    { name: `Gabon`, code: 'GAB' },
    { name: `Gambia`, code: 'GMB' },
    { name: `Grúzia`, code: 'GEO' },
    { name: `Németország`, code: 'DEU' },
    { name: `Ghána`, code: 'GHA' },
    { name: `Gibraltár`, code: 'GIB' },
    { name: `Görögország`, code: 'GRC' },
    { name: `Grönland`, code: 'GRL' },
    { name: `Grenada`, code: 'GRD' },
    { name: `Guadeloupe`, code: 'GLP' },
    { name: `Guam`, code: 'GUM' },
    { name: `Guatemala`, code: 'GTM' },
    { name: `Guinea`, code: 'GIN' },
    { name: `Bissau-Guinea`, code: 'GNB' },
    { name: `Guyana`, code: 'GUY' },
    { name: `Haiti`, code: 'HTI' },
    { name: `Vatikán`, code: 'VAT' },
    { name: `Honduras`, code: 'HND' },
    { name: `Hong Kong`, code: 'HKG' },
    { name: `Magyarország`, code: 'HUN' },
    { name: `Izland`, code: 'ISL' },
    { name: `India`, code: 'IND' },
    { name: `Indonézia`, code: 'IDN' },
    { name: `Irán`, code: 'IRN' },
    { name: `Irak`, code: 'IRQ' },
    { name: `Írország`, code: 'IRL' },
    { name: `Isle of Man`, code: 'IMN' },
    { name: `Izrael`, code: 'ISR' },
    { name: `Olaszország`, code: 'ITA' },
    { name: `Jamaica`, code: 'JAM' },
    { name: `Japán`, code: 'JPN' },
    { name: `Jordánia`, code: 'JOR' },
    { name: `Kazahsztán`, code: 'KAZ' },
    { name: `Kenya`, code: 'KEN' },
    { name: `Kiribati`, code: 'KIR' },
    { name: `(KNDK)`, code: 'PRK' },
    { name: `Korea (ROK)`, code: 'KOR' },
    { name: `Kuvait`, code: 'KWT' },
    { name: `Kirgizisztán`, code: 'KGZ' },
    { name: `Laosz`, code: 'LAO' },
    { name: `Lettország`, code: 'LVA' },
    { name: `Libanon`, code: 'LBN' },
    { name: `Lesotho`, code: 'LSO' },
    { name: `Libéria`, code: 'LBR' },
    { name: `Líbia`, code: 'LBY' },
    { name: `Liechtenstein`, code: 'LIE' },
    { name: `Litvánia`, code: 'LTU' },
    { name: `Luxemburg`, code: 'LUX' },
    { name: `Makaó`, code: 'MAC' },
    { name: `Macedónia`, code: 'MKD' },
    { name: `Madagaszkár`, code: 'MDG' },
    { name: `Malawi`, code: 'MWI' },
    { name: `Malaysia`, code: 'MYS' },
    { name: `Maldív-szigetek`, code: 'MDV' },
    { name: `Mali`, code: 'MLI' },
    { name: `Málta`, code: 'MLT' },
    { name: `Marshall-szigetek`, code: 'MHL' },
    { name: `Martinique`, code: 'MTQ' },
    { name: `Mauritánia`, code: 'MRT' },
    { name: `Mauritius`, code: 'MUS' },
    { name: `Mexikó`, code: 'MEX' },
    { name: `Mikronézia`, code: 'FSM' },
    { name: `Moldova`, code: 'MDA' },
    { name: `Monaco`, code: 'MCO' },
    { name: `Mongólia`, code: 'MNG' },
    { name: `Montenegró`, code: 'MNE' },
    { name: `Montserrat`, code: 'MSR' },
    { name: `Marokkó`, code: 'MAR' },
    { name: `Mozambik`, code: 'MOZ' },
    { name: `Myanmar`, code: 'MMR' },
    { name: `Namíbia`, code: 'NAM' },
    { name: `Nauru`, code: 'NRU' },
    { name: `Nepál`, code: 'NPL' },
    { name: `Hollandia`, code: 'NLD' },
    { name: `Új-Kaledónia`, code: 'NCL' },
    { name: `Új Zéland`, code: 'NZL' },
    { name: `Nicaragua`, code: 'NIC' },
    { name: `Niger`, code: 'NER' },
    { name: `Nigéria`, code: 'NGA' },
    { name: `Niue`, code: 'NIU' },
    { name: `Észak Mariana szigetek`, code: 'MNP' },
    { name: `Norvégia`, code: 'NOR' },
    { name: `Omán`, code: 'OMN' },
    { name: `Pakisztán`, code: 'PAK' },
    { name: `Palau`, code: 'PLW' },
    { name: `Palesztina`, code: 'PSE' },
    { name: `Panama`, code: 'PAN' },
    { name: `Pápua Új-Guinea`, code: 'PNG' },
    { name: `Paraguay`, code: 'PRY' },
    { name: `Peru`, code: 'PER' },
    { name: `Fülöp-szigetek`, code: 'PHL' },
    { name: `Pitcairn`, code: 'PCN' },
    { name: `Lengyelország`, code: 'POL' },
    { name: `Portugália`, code: 'PRT' },
    { name: `Puerto Rico`, code: 'PRI' },
    { name: `Katar`, code: 'QAT' },
    { name: `Réunion`, code: 'REU' },
    { name: `Románia`, code: 'ROU' },
    { name: `Orosz Föderáció`, code: 'RUS' },
    { name: `Ruanda`, code: 'RWA' },
    { name: `Saint Barthélemy`, code: 'BLM' },
    { name: `Szent Ilona, ​​Ascension és Tristan da Cunha`, code: 'SHN' },
    { name: `Saint Kitts és Nevis`, code: 'KNA' },
    { name: `Saint Lucia`, code: 'LCA' },
    { name: `Saint Martin`, code: 'MAF' },
    { name: `Saint-Pierre és Miquelon`, code: 'SPM' },
    { name: `Saint Vincent és a Grenadine-szigetek`, code: 'VCT' },
    { name: `Szamoa`, code: 'WSM' },
    { name: `San Marino`, code: 'SMR' },
    { name: `Sao Tome és Principe`, code: 'STP' },
    { name: `Szaud-Arábia`, code: 'SAU' },
    { name: `Szenegál`, code: 'SEN' },
    { name: `Szerbia`, code: 'SRB' },
    { name: `Seychelles`, code: 'SYC' },
    { name: `Sierra Leone`, code: 'SLE' },
    { name: `Singapore`, code: 'SGP' },
    { name: `Sint Maarten`, code: 'SXM' },
    { name: `Szlovákia`, code: 'SVK' },
    { name: `Szlovénia`, code: 'SVN' },
    { name: `Salamon-szigetek`, code: 'SLB' },
    { name: `Szomáliában`, code: 'SOM' },
    { name: `Dél-Afrika`, code: 'ZAF' },
    { name: `Dél Szudán`, code: 'SSD' },
    { name: `Spanyolország`, code: 'ESP' },
    { name: `Sri Lanka`, code: 'LKA' },
    { name: `Szudán`, code: 'SDN' },
    { name: `Suriname`, code: 'SUR' },
    { name: `Svédország`, code: 'SWE' },
    { name: `Svájc`, code: 'CHE' },
    { name: `Szíriai Arab Köztársaság`, code: 'SYR' },
    { name: `Taiwan`, code: 'TWN' },
    { name: `Tádzsikisztán`, code: 'TJK' },
    { name: `Tanzánia`, code: 'TZA' },
    { name: `Thaiföld`, code: 'THA' },
    { name: `Kelet-Timor`, code: 'TLS' },
    { name: `Menni`, code: 'TGO' },
    { name: `Tokelau`, code: 'TKL' },
    { name: `Tonga`, code: 'TON' },
    { name: `Trinidad és Tobago`, code: 'TTO' },
    { name: `Tunézia`, code: 'TUN' },
    { name: `Törökország`, code: 'TUR' },
    { name: `Türkmenisztán`, code: 'TKM' },
    { name: `Turks-és Caicos-szigetek`, code: 'TCA' },
    { name: `Tuvalu`, code: 'TUV' },
    { name: `Uganda`, code: 'UGA' },
    { name: `Ukrajna`, code: 'UKR' },
    { name: `Egyesült Arab Emírségek`, code: 'ARE' },
    { name: `Egyesült Királyság`, code: 'GBR' },
    { name: `Amerikai egyesült államok`, code: 'USA' },
    { name: `Amerikai Csendes-óceáni-szigetek`, code: 'UMI' },
    { name: `Uruguay`, code: 'URY' },
    { name: `Üzbegisztán`, code: 'UZB' },
    { name: `Vanuatu`, code: 'VUT' },
    { name: `Venezuela`, code: 'VEN' },
    { name: `Vietnam`, code: 'VNM' },
    { name: `Brit Virgin szigetek`, code: 'VGB' },
    { name: `Amerikai Virgin-szigetek`, code: 'VIR' },
    { name: `nyugat-Szahara`, code: 'ESH' },
    { name: `Jemen`, code: 'YEM' },
    { name: `Zambia`, code: 'ZMB' },
    { name: `Zimbabwe`, code: 'ZWE' },
  ]
}
