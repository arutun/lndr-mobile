import { currencySymbols, transferLimits } from 'lndr/currencies'

const CUR = currencySymbols
const TL = transferLimits

const generalCommunicationError = 'Hubo un problema de comunicación con el servidor. Por favor inténtelo de nuevo más tarde.'

export default {

  applicationName: `Lndr`,
  helloWorld: `Hola Mundo`,
  noConnection: `Sin conexión`,
  retry: `Rever`,
  submit: `ENVIAR`,
  next: `Siguiente`,
  cancel: `Cancelar`,
  back: `Regresar`,
  copy: `Copiar en el Portapapeles`,
  confirmAccount: `Confirmar`,
  createAccount: `Crear Cuenta`,
  recoverAccount: `Restaurar Cuenta`,
  removeAccount: `Eliminar Cuenta`,
  updateAccount: `Actualizar Cuenta`,
  loginAction: `Desbloquear`,
  enterPin: `POR FAVOR, INGRESE SU PIN`,
  changePin: `Cambiar PIN`,
  enterCurrentPin: `Introducir el PIN actual`,
  logoutAction: `CERRAR SESIÓN`,
  seeAllActivity: `Ver Toda la Actividad`,
  copiedClipboard: `Copiado al Portapapeles`,
  pleaseWait: `Por Favor, Espera`,
  addFriend: `Agregar Amigo`,
  addFriendConfirmationQuestion: `¿Está seguro que desea agregar a este usuario como amigo?`,
  removeFriend: `Eliminar Amigo`,
  currentFriends: `Amigos Actuales`,
  removeFriendConfirmationQuestion: `¿Está seguro de que quiere eliminar este usuario de su lista de amigos?`,
  inviteFriends: `Invitar amigos a Lndr`,
  tryLndr: `Pruebe Aquí la Aplicación de Lendr:`,
  friendInfo: `Más información sobre esta amistad:`,
  noFriends: `¡Agregar algunos amigos para empezar!`,
  noMatches: `No se encontraron usuarios que coincidan`,
  noBalances: `No tiene deudas registradas`,
  addFriendButton: `Agregar Amigo`,
  alreadyFriendsButton: `Amigos`,
  friendShell: `Amigo`,
  tip: `Consejo:`,
  notice: `Nota / Aviso:`,
  welcome: `Bienvenido a su cuenta de LNDR`,
  noBalanceWarning: `No fue posible cargar su saldo en este momento, Por favor inténtelo de nuevo más tarde.`,
  totalBalance: `Balance Total:`,
  totalBalances: `Contrapartes Totales`,
  newTransaction: `Nueva Transacción`,
  needsReview: `Pendiente de Aprobación`,
  owesMe: `Me Deben`,
  iOwe: `Debo`,
  newPassword: `Nueva Contraseña (mínimo 8 caracteres)`,
  confirmPassword: `Confirmar contraseña`,
  newPin: `Nuevo PIN de 4 dígitos`,
  enterNewPin: `Por Favor, Indique un Nuevo PIN de 4 Dígitos`,
  confirmPin: `Por Favor, Confirme su PIN`,
  newAccount: `Crear una Nueva Cuenta`,
  loginAccount: `Desbloquear su Cuenta`,
  recoverExistingAccount: `Recuperar una Cuenta Existente`,
  recoverMnemonic: `Recordatorio de Contraseña (Frase compuesta de 12 palabras que aparecieron \n cuando creó su cuenta)  //COMMENT: NEMOTÉCNICA MAY SOUND TOO FORMAL, I SUGGEST USING "RECORDATORIO" WHICH IS THE LAYMAN VERSION OF THAT, WHICH MAY BE INTERPRETED AS PASSWORD HINTS.`,
  recoverMnemonicLengthError: `Recordatorio de Contraseña (Debe incluir exactamente las 12 palabras que aparecieron cuando creó su cuenta)`,
  successTitle: `Éxito`,
  errorTitle: `Error`,
  showMnemonic: `Mostrar el Recordatorio de 12 Palabras`,
  mnemonicExhortation: `Se requiere esta frase de 12 palabras para restaurar su cuenta, por favor consérvela en un lugar seguro y secreto`,
  addressExhortation: `Cargue Ethereum a su Dirección para que pueda Pagar sus Deudas en Lndr`,
  removeAccountTitle: `¿Está seguro de querer eliminar su cuenta de este dispositivo?`,
  removeAccountExhortation: `Asegúrese de que tiene acceso a su Recordatorio para restaurar la cuenta más tarde, ya que está procediendo a eliminar permanentemente la información de su cuenta desde este dispositivo.`,
  myAccount: `Mi cuenta`,
  setNickname: `Establecer un Nombre de Usuario para que sus amigos puedan encontrarlo fácilmente`,
  setEmail: `Establecer un correo electrónico para recibir información sobre las novedades y actualizaciones de Lndr`,
  nickname: `Nombre de Usuario (en minúsculas y números)`,
  email: `Dirección de Correo Electrónico`,
  lndrVerified: {
    ok: `DE ACUERDO`,
    title: `Establecer límite más alto asentamiento y abstinencia cripto cantidades completando saber sus necesidades del cliente.`,
    statusTitle: `El estado actual de la verificación es:`,
    tryAgain: `No se pudo verificar su identidad. Por favor, vuelva a enviar su información y asegurarse de que sus fotos son legibles.`,
    formMessage: `Por favor, rellene todos los campos siguientes`,
    button: `Verifica tu identidad`,
    prefix: `Lea nuestra `,
    linkTitle: `política de privacidad `,
    postfix: `para saber cómo se gestionarán sus datos personales.`,
    upload: `Sube una `,
    governmentId: `identificación emitida por el gobierno`,
    selfie: `Sube una autofoto con su identificación emitida por el gobierno`,
    proofOfAddress: `Comprobante de domicilio`,
    ifNotId: `(Si no ID)`,
    agree: `He leído y acepto la `,
    agreeLink: `Política de Privacidad`,
    success: `CSC ha sido enviado.`,
    idInfoHeader: `Ejemplos de identificación incluyen:`,
    passport: `Pasaporte`,
    drivers: `Licencia de conducir`,
    national: `Documento de identificación nacional`,
    addressInfoHeader: `Ejemplos de comprobante de domicilio:`,
    bank: `Extracto de cuenta`,
    utility: `facturas de servicios públicos`,
    other: `otro documento`,
    chooseGovernmentPhoto: `Elegir la identificación del Gobierno de fotos`,
    chooseSelfiePhoto: `Elija selfie fotos`,
    chooseAddressPhoto: `Elija Prueba de Dirección de fotos`,
    error: generalCommunicationError,
    formFields: {
      firstName: `Nombre de pila`,
      lastName: `Apellido`,
      street: `Dirección`,
      city: `Ciudad`,
      state: `Provincia del estado`,
      postalCode: `Código postal`,
      country: `Seleccionar país`,
      phone: `Número de teléfono`,
      dob: `Fecha de nacimiento (AAAA-MM-DD)`,
    },
    formErrors: {
      firstName: `Se requiere el primer nombre`,
      lastName: `Se requiere Apellido`,
      street: `Se requiere la calle`,
      city: `Se requiere la ciudad`,
      state: `Estado / Provincia se requiere`,
      postalCode: `Se requiere Código Postal`,
      country: `Se requiere país`,
      phone: `Se requiere el número de teléfono`,
      dob: `Se requiere la fecha de nacimiento`,
      general: `Por favor asegúrese de que ha rellenado todos los campos y adjunta las fotos correctas`,
    }
  },
  accountManagement: {
    nickname: {
      lengthViolation: `Nombre de Usuario (debe ser de al menos 3 caracteres.)`,
      compositionViolation: `El Nombre de Usuario puede contener sólo números y letras minúsculas.`,
      duplicationViolation: `El Nombre de Usuario ya está en uso`,
    },
    email: {
      compositionViolation: `El Formato de correo electrónico no es correcto`,
      duplicationViolation: `El Correo Electrónico ya se encuentra registrado en el sistema`,
    },
    pin: {
      lengthViolation: `PIN debe tener al menos 4 caracteres.`,
      matchViolation: `El PIN debe coincidir con su confirmación.`,
      failedHashComparison: `PIN no es válido. Por favor, intente de nuevo.`,
      updateSuccess: `Su PIN se ha actualizado`,
      updateError: `Hubo un error al actualizar el PIN`,
    },
    mnemonic: {
      lengthViolation: `El Recordatorio debe tener al menos 12 palabras.`,
      unableToValidate: `El Recordatorio introducido no es válido. Por favor, Intente de nuevo.`,
    },
    setNickname: {
      success: `Su Nombre de Usuario se ha guardado.`,
      error: generalCommunicationError
    },
    setEmail: {
      success: `Su correo electrónico se ha guardado.`,
      error: generalCommunicationError
    },
    lockTimeout: {
      top: `Debe introducir su PIN después`,
      bottom: `minutos de inactividad`,
      update: `Actualizar`,
      error: `No se pudo Actualizar la Configuración de su Cuenta`,
      success: `Tiempo de espera de bloqueo Actualizado`,
    },
    addFriend: {
      success: X => `Solicitud de Amistad Enviada a @${X}`,
      error: generalCommunicationError
    },
    removeFriend: {
      success: X => `Eliminado de su lista de Amigos: @${X}`,
      error: generalCommunicationError
    },
    loadInformation: {
      error: generalCommunicationError
    },
    ethBalance: {
      display: Y => `Su Saldo en ETH (Ethereum) es: ${String (Y) .slice (0,8)}`,
      getError: `No se pudo recuperar su balance de ETH (Ethereum)`,
      manage: `Administrar ETH (Ethereum)`,
    },
    sendEth: {
      error: {
        insufficient: `Usted no posee suficiente ETH para continuar con esta transacción`,
        generic: `Hubo un error en la transferencia. Por favor, inténtelo de nuevo más tarde`,
        address: `Por favor, introduzca una dirección válida`,
        amount: `Por favor, introduzca una cantidad mayor a 0`,
        limitExceeded: A => `Sólo puede enviar ${TL(A)} ${CUR(A)} por semana, por favor seleccione un monto menor`,
      },
      amount: `Monto a Enviar`,
      address: `Dirección de Destino (sin el prefijo '0x')`,
      transfer: `Transferencia de ETH (Ethereum)`,
      transferAll: `Transferir Todo`,
      balance: Y => `Su saldo actual en ETH (Ethereum) es de ${typeof Y === 'string' ? Y.slice (0,8): ''} `,
      ethAddress: `Dirección Ethereum`,
      txCost: (B, A) => `El costo de la transacción actual es de: ${CUR(A)} ${B}`,
      transferLowercase: `Transferir ETH (Ethereum)`,
      note: A => `Atención: sólo se puede transferir ${TL(A)} ${CUR(A)} por semana a través de Lndr`,
      warning: (Z, A) => `Le quedan ${CUR(A)} ${Z} restantes de su CUR ${[A]} ${TL(A)} límite`,
    },
    sendBcpt: {
      error: {
        insufficient: `Usted no posee suficiente BCPT para continuar con esta transacción`,
        generic: `Hubo un error en la transferencia, por favor intente de nuevo más tarde`,
      },
      transfer: `Transferencia de BCPT`,
      address: `Dirección de Destino (sin el prefijo '0x')`,
      balance: Y => `Su saldo actual es de: BCPT ${typeof Y === 'string'? Y.slice (0,8): ''}`,
      bcptAddress: `Dirección BCPT`,
    },
    panelHeaders: [
      `Dirección de ETH (y BCPT)`,
      `Saldo de Ethereum`,
      `Saldo de BCPT`,
      `Eliminar Cuenta`,
      `Historial de Transacciones en Ethereum`,
      `Activar PayPal`,
      `Cambiar divisa principal`,
      `Características adicionales desbloquear`,
      `Cambiar PIN`,
      `Cambiar Correo Electrónico`,
      `Cambiar Tiempo de espera para bloqueo`,
      `Recordatorio de Cuenta`,
      `Notificaciones`,
    ],
    viewEtherscan: `Ver historial en EtherScan`,
    profilePic: {
      change: `Cambiar foto de perfil`,
      setError: `Hubo un error al cargar la imagen, por favor inténtelo de nuevo más tarde`,
      getError: `Hubo un error al recuperar su imagen de perfil`,
      setSuccess: `Imagen de Perfil Actualizada`,
    },
    logoutSuccess: `¡Ha cerrado sesión satisfactoriamente!`,
    logoutError: generalCommunicationError,
  },

  currentBalance: {
    eth: `Su Saldo Actual de ETH (Ethereum) es:`,
    bcpt: `Su Saldo Actual de BCPT es:`,
  },

  welcomeView: {
    by: `CONSTRUIDO POR`,
    makeItEasy: `Lndr facilita el seguimiento de deudas simples.`,
    weHelpFriends: `Ayudamos a amigos a vivir, trabajar, y jugar juntos.`,
    len: `Len`,
    dot: `.`,
    der: `der`,
    shareDinner: `Compartir Cena`,
    fillTank: `Repostar Combustible`,
    travelTogether: `Viajar Juntos`,
    runEthereum: `Nuestra plataforma funciona en base a ETH (Ethereum)`,
    firstLendingApp: `La primera aplicación móvil de préstamos respaldados por la seguridad que ofrece blockchain.`,
    greatConcert: `Asista a Buenos Conciertos`,
    youPlayWithFriends: `Disfrute con sus Amigos; \n y deje que nosotros llevemos la cuenta …`,
    start: `Comenzar`,
  },

  walkthrough: {
    skip: `omitir`,
    continue: `continuar`,
    step1: {
      easyToUse: `Lndr es la forma más fácil de dividir las facturas, los gastos de las acciones y pagar las deudas simples con amigos y familiares, todo hecho de forma segura en la blockchain.`,
      len: `Len`,
      der: `der`,
    },
    step2: {
      getStarted: `Para comenzar con Lndr, tendrá que añadir un amigo.`,
      friendsScreen: `Visita los Amigos pantalla para buscar, agregar o invitar a sus amigos y familiares para conectar el Lndr.`,
    },
    step3: {
      title: `Registrar una transacción`,
      easy: `Dividir una cuenta o la adición de una deuda con un amigo es fácil en Lndr!`,
      selectFriend: `Seleccione su amigo, su moneda y el monto.`,
      addMemo: `Añadir algunas notas en el cuadro de la nota y haga clic en Enviar.`,
    },
    step4: {
      title: `Pagar Deudas`,
      ready: `Listo para pagar deudas?`,
      payPal: `Cuando es el momento de ajustar cuentas con Lndr, \n se puede elegir PayPal:`,
      ether: `- cryptocurrencies como éter:`,
      cash: `- o simplemente grabar un pago en efectivo:`,
      positiveBalance: `10,46`,
    },
    step5: {
      title: `Multi moneda`,
      multiCurrency: `Lndr puede mantener un registro de sus transacciones, incluso si suceden en diferentes monedas.`,
      exchangeRate: `Cuando usted decide ajustar cuentas con su amigo, todas las transacciones se convertirán en su divisa principal utilizando los tipos de cambio más arriba-hasta la fecha disponible.`,
      start: `Empezar a utilizar Lndr!`,
    }
  },

  debtManagement: {
    shell: `Nueva transacción`,
    add: `Agregar Deuda`,
    selectFriend: `Seleccionar`,
    lend: `Nuevo préstamo`,
    borrow: `Nueva deuda`,
    owesMe: `Me debe`,
    iOwe: `Yo debo`,
    iLent: `Me Deben`,
    iBorrowed: `Debo`,
    settleUpLower: `Pagar Deudas`,
    amountToSettle: `Monto a Pagar`,
    total: `Total`,
    record: `Historial`,
    records: `Archivos`,
    chooseCurrency: `Elija una moneda`,

    createError: {
      amountTooLow: `El monto debe ser mayor a $ 0`,
      amountTooHigh: `El monto debe ser menor a $ 1.000.000.000`,
      selfAsFriend: `No se puede almacenar una deuda con usted mismo. Por favor, elija a otro usuario.`,
      pending: `Por favor, concrete su transacción pendiente con este usuario antes de crear otra transacción.`,
      insufficientEth: E => `Necesita al menos: ${E} ETH (Ethereum) para pagar, vaya a la Configuración para consultar su saldo`,
    },
    fields: {
      currency: `Moneda`,
      amount: `Monto`,
      settlementAmount: `Cantidad Acordada`,
      selectFriend: `Amigo`,
      memo: `Nota`,
      direction: `Seleccione el Comprobante Correcto`,
    },
    memo: {
      example: `Añadir una nota`,
    },
    direction: {
      lend: X => `${X} Me Debe`,
      borrow: X => `Le Debo ${X} `,
      initiatedLend: X => `${X} dice que él/ella le debe`,
      initiatedBorrow: X => `${X} dice que usted debe`,
      pendingLend: X => `@${X} le debe`,
      pendingBorrow: X => `Usted debe @${X}`,
      pendingLendSettlement: S => `@${S.debtorNickname} solicita un pago en ${S.settlementCurrency}`,
      pendingBorrowSettlement: S => `@${S.creditorNickname} quiere acordar un pago con usted en ${S.settlementCurrency}`,
      pendingLendSettlementMe: S => `Ha solicitado a un acuerdo de pago con @${S.debtorNickname} en ${S.settlementCurrency}`,
      pendingBorrowSettlementMe: S => `Se le solicitó a @${S.creditorNickname} acordar un pago en ${S.settlementCurrency}`,
    },
    pending: {
      success: F => `Deuda pendiente enviada a @${F.nickname}`,
      error: generalCommunicationError
    },
    pendingParens: `(pendiente)`,
    confirmation: {
      transaction: CP => `Transacción con ${CP} se ha confirmado con éxito`,
      settlement: CP => `Pago Acordado con ${CP} se ha confirmado con éxito`,
      error: `No se ha podido confirmar la transacción en este momento. Por favor, inténtelo de nuevo más tarde`,
    },
    rejection: {
      success: `Transacción Rechazada`,
      error: `No pudimos rechazar la transacción en este momento. Por favor, inténtelo de nuevo más tarde`,
    },
    balances: {
      error: `No se puede cargar saldos en este momento. Por favor, inténtelo de nuevo más tarde`,
    },
    for: M => `para ${M}`,
    settleUp: `Pagar Deudas`,
    settleTotal: `Total Acordado`,
    settleUpMemo: (D, A) => `${D === 'lend' ? 'Acordando Pago Por': 'Solicitud de Acordar Pago Por'} ${A} `,
    recordSettleUpMemo: `Pagar Deudas`,
    balanceByCurrency: `Detalles`,
  },
  settlementManagement: {
    bilateral: {
      error: {
        insufficient: X => `Su Pago acordado con ${X} falló por fondos insuficientes`,
        generic: X => `Hubo un error al procesar su pago con ${X}`,
      }
    },
    eth: `Pagar con ETH (Ethereum)`,
    paypal: `Pagar con PayPal`,
    nonPayment: `Archivar un Pago`,
    select: `Seleccionar el tipo de pago`,
  },

  accountViewLanguage: {
    lndr: `L n d r`,
    home: `Inicio`,
    friends: `Amigos`,
    activity: `Actividad`,
  },

  notifications: {
    toggleNotifications: `Activar Notificaciones`,
    enable: `Activar`,
    disable: `Desactivar`,
  },

  pendingTransactionsLanguage: {
    shell: `Transacción Pendiente`,
    title: `Pendiente`,
    memo: `Nota:`,
    for: `Para`,
    none: `No tiene transacciones pendientes`,
    confirmationQuestion: `¿Está seguro de que desea confirmar esta transacción?`,
    pendingAnnouncement: `Esta transacción está esperando la confirmación de su contraparte.`,
    bilateral: `Esperando por la transferencia de ETH (Ethereum) para completar el proceso`,
    confirm: `Confirmar`,
    reject: `Rechazar Transacción`,
    rejectRequest: `Rechazar`,
    cancel: `Cancelar la Transacción`,
    direction: {
      lend: (X, Z) => `@${X} le debe ${Z} `,
      borrow: (X, Z) => `Usted debe @${X} ${Z}`,
    }
  },

  pendingSettlementsLanguage: {
    shell: `Acuerdo Pendiente`,
    title: `Pendiente`,
    none: `No tiene acuerdos pendientes`,
    confirm: `Confirmar`,
    reject: `Rechazar Acuerdo`,
    cancel: `Cancelar Acuerdo`,
  },

  recentTransactionsLanguage: {
    title: `Completado`,
    none: `No tiene transacciones completadas`,
    direction: {
      lend: (X, Z) => `@${X} le debe ${Z} `,
      borrow: (X, Z) => `Usted debe @${X} ${Z}`
    },
    balance: `Saldo`,
    consolidatedBalance: `Saldo`,
    friends: FS => `(de ${FS} ${FS === 1 ? 'amigo': 'amigos'})`,
  },

  tabs: {
    home: `Inicio `,
    friends: `Amigos`,
    activity: `Actividad`,
  },

  confirmation: {
    shell: `Confirmación`,
    done: `Terminado`,
    create: {
      start: `Hemos enviado el archivo a `,
      end: ` para su confirmación.`,
    },
    confirm: {
      start: `Usted ha confirmado el  presente archivo, correspondiente a `,
      end: `.`,
    },
    reject: {
      start: `Le hemos informado a `,
      end: ` que el presente archivo fue rechazado por usted.`,
    },
    confirmFriend: {
      start: `Ahora es amigo de `,
      end: `!`,
    },
    rejectFriend: {
      start: `Ha rechazado la solicitud de amistad de `,
      end: `.`,
    },
    rejectOutboundFriendRequest: {
      start: `Ha cancelado la solicitud de amistad a `,
      end: `.`,
    },
    ethSent: {
      start: `Ha enviado `,
      end: ` ETH con éxito, y el hash de la transacción es `,
    },
    bcptSent: {
      start: `Has enviado `,
      end: ` BCPT con éxito, y el hash de la transacción es `,
    },
    requestPayPalPayee: {
      start: `Hemos dejado `,
      end: ` sabe que le gustaría que conformarse con PayPal.`,
    },
    requestPayPalPayment: {
      start: `Hemos dejado `,
      end: ` saber que desea pagar con PayPal.`,
    },
    settledWithPayPal: {
      start: `Hemos dejado `,
      end: ` saber que usted se decida con PayPal.`,
    },
    kycSuccess: {
      start: `¡Gracias! se está verificando su cuenta.  
      
      `,
      end: `Se le notificará cuando sus características adicionales están desbloqueados.` 
    },
    status: `Puede ver el estado de esta transacción en la `,
    activity: `pestaña Actividad.`,
  },

  pendingFriendRequestsLanguage: {
    shell: `Solicitud de amistad`,
    message: `Solicitudes de amistad`,
    request: F => `@${F} quiere ser su Amigo!`,
    outbound: F => `Se envió una solicitud de amistad a @${F}`,
  },

  privacyPolicy: {
    link: `lndr.io/terms/`,
    message: `Al hacer clic debajo de usted confirma que ha leído y acepto la política de privacidad de Blockmason. Blockmason puede utilizar su dirección de correo electrónico para enviar actualizaciones sobre Blockmason y LNDR. Aquí hay un enlace a la política de privacidad:`
  },

  payPalLanguage: {
    connectPayPal: `Conecte PayPal`,
    connectSuccess: `PayPal activado con éxito.`,
    disconnectPayPal: `Desconectar PayPal`,
    disconnected: `PayPal desconectado.`,
    requestPayPalPayment: `Solicitud de pago de PayPal`,
    sendWithPayPal: `Enviar con PayPal`,
    enablePayPal: `Activar PayPal`,
    requestPayPalPayee: `solicitar PayPal`,
    enablePayPalForFriend: F => `Habilitar PayPal permite @${F} para pagar you.`,
    friendNotEnabled: F => `@${F} no ha permitido PayPal pagos.`,
    friendRequestedConnect: F => `@${F} quiere pagar vía PayPal`,
    requestFriendConnect: F => `Se preguntó @${F} para habilitar PayPal`,
    feesNotification: `No incluye las tarifas de PayPal`,
    feesInformationHeader: `PayPal Tasas de Información`,
    feesInformation: `1. Su cuenta PayPal debe estar ligada a una cuenta bancaria.
    
2. El pago en una moneda distinta a la moneda de su banco le cobrará un cargo de $ 0,35.
    
3. Los gastos de transferencia Internacionales:
    EE.UU. a Canadá / Europa: $ 2.99
    EE.UU. a cualquier otro lugar: $ 4.99
    
4. Estas tarifas no son exhaustivas. Para obtener la información más actualizada, visite:

    https://www.paypal.com/us/webapps/mpp/paypal-fees#sending-us`,
    payPalSite: `PayPal.com`,
  },

  countries: [
    { name: `Afganistán`, code: 'AFG' },
    { name: `Albania`, code: 'ALB' },
    { name: `Argelia`, code: 'DZA' },
    { name: `Samoa Americana`, code: 'ASM' },
    { name: `Andorra`, code: 'AND' },
    { name: `Angola`, code: 'AGO' },
    { name: `Anguilla`, code: 'AIA' },
    { name: `Antártida`, code: 'ATA' },
    { name: `Antigua y Barbuda`, code: 'ATG' },
    { name: `Argentina`, code: 'ARG' },
    { name: `Armenia`, code: 'ARM' },
    { name: `Aruba`, code: 'ABW' },
    { name: `Australia`, code: 'AUS' },
    { name: `Austria`, code: 'AUT' },
    { name: `Azerbaiyán`, code: 'AZE' },
    { name: `Bahamas`, code: 'BHS' },
    { name: `Bahrein`, code: 'BHR' },
    { name: `Bangladesh`, code: 'BGD' },
    { name: `Barbados`, code: 'BRB' },
    { name: `Bielorrusia`, code: 'BLR' },
    { name: `Bélgica`, code: 'BEL' },
    { name: `Belice`, code: 'BLZ' },
    { name: `Benin`, code: 'BEN' },
    { name: `islas Bermudas`, code: 'BMU' },
    { name: `Bután`, code: 'BTN' },
    { name: `Bolivia`, code: 'BOL' },
    { name: `Bosnia y Herzegovina`, code: 'BIH' },
    { name: `Botswana`, code: 'BWA' },
    { name: `Brasil`, code: 'BRA' },
    { name: `Brunei`, code: 'BRN' },
    { name: `Bulgaria`, code: 'BGR' },
    { name: `Burkina Faso`, code: 'BFA' },
    { name: `Burundi`, code: 'BDI' },
    { name: `Cabo Verde`, code: 'CPV' },
    { name: `Camboya`, code: 'KHM' },
    { name: `Camerún`, code: 'CMR' },
    { name: `Canadá`, code: 'CAN' },
    { name: `Islas Caimán`, code: 'CYM' },
    { name: `República Centroafricana`, code: 'CAF' },
    { name: `Chad`, code: 'TCD' },
    { name: `Chile`, code: 'CHL' },
    { name: `China`, code: 'CHN' },
    { name: `Colombia`, code: 'COL' },
    { name: `Comoras`, code: 'COM' },
    { name: `Congo`, code: 'COG' },
    { name: `Congo`, code: 'COD' },
    { name: `Islas Cook`, code: 'COK' },
    { name: `Costa Rica`, code: 'CRI' },
    { name: `Costa de Marfil`, code: 'CIV' },
    { name: `Croacia`, code: 'HRV' },
    { name: `Cuba`, code: 'CUB' },
    { name: `Curaçao`, code: 'CUW' },
    { name: `Chipre`, code: 'CYP' },
    { name: `Chequia`, code: 'CZE' },
    { name: `Dinamarca`, code: 'DNK' },
    { name: `Djibouti`, code: 'DJI' },
    { name: `dominica`, code: 'DMA' },
    { name: `República Dominicana`, code: 'DOM' },
    { name: `Ecuador`, code: 'ECU' },
    { name: `Egipto`, code: 'EGY' },
    { name: `El Salvador`, code: 'SLV' },
    { name: `Guinea Ecuatorial`, code: 'GNQ' },
    { name: `Eritrea`, code: 'ERI' },
    { name: `Estonia`, code: 'EST' },
    { name: `Eswatini`, code: 'SWZ' },
    { name: `Etiopía`, code: 'ETH' },
    { name: `Fiji`, code: 'FJI' },
    { name: `Finlandia`, code: 'FIN' },
    { name: `Francia`, code: 'FRA' },
    { name: `Guayana francés`, code: 'GUF' },
    { name: `Polinesia francés`, code: 'PYF' },
    { name: `Gabón`, code: 'GAB' },
    { name: `Gambia`, code: 'GMB' },
    { name: `Georgia`, code: 'GEO' },
    { name: `Alemania`, code: 'DEU' },
    { name: `Ghana`, code: 'GHA' },
    { name: `Gibraltar`, code: 'GIB' },
    { name: `Grecia`, code: 'GRC' },
    { name: `Tierra Verde`, code: 'GRL' },
    { name: `Granada`, code: 'GRD' },
    { name: `Guadalupe`, code: 'GLP' },
    { name: `Guam`, code: 'GUM' },
    { name: `Guatemala`, code: 'GTM' },
    { name: `Guinea`, code: 'GIN' },
    { name: `Guinea-Bissau`, code: 'GNB' },
    { name: `Guayana`, code: 'GUY' },
    { name: `Haití`, code: 'HTI' },
    { name: `Vaticano`, code: 'VAT' },
    { name: `Honduras`, code: 'HND' },
    { name: `Hong Kong`, code: 'HKG' },
    { name: `Hungría`, code: 'HUN' },
    { name: `Islandia`, code: 'ISL' },
    { name: `India`, code: 'IND' },
    { name: `Indonesia`, code: 'IDN' },
    { name: `Corrí`, code: 'IRN' },
    { name: `Irak`, code: 'IRQ' },
    { name: `Irlanda`, code: 'IRL' },
    { name: `Isla del hombre`, code: 'IMN' },
    { name: `Israel`, code: 'ISR' },
    { name: `Italia`, code: 'ITA' },
    { name: `Jamaica`, code: 'JAM' },
    { name: `Japón`, code: 'JPN' },
    { name: `Jordán`, code: 'JOR' },
    { name: `Kazajstán`, code: 'KAZ' },
    { name: `Kenia`, code: 'KEN' },
    { name: `Kiribati`, code: 'KIR' },
    { name: `Corea (RPDC)`, code: 'PRK' },
    { name: `Corea (ROK)`, code: 'KOR' },
    { name: `Kuwait`, code: 'KWT' },
    { name: `Kirguizistán`, code: 'KGZ' },
    { name: `Laos`, code: 'LAO' },
    { name: `Letonia`, code: 'LVA' },
    { name: `Líbano`, code: 'LBN' },
    { name: `Lesoto`, code: 'LSO' },
    { name: `Liberia`, code: 'LBR' },
    { name: `Libia`, code: 'LBY' },
    { name: `Liechtenstein`, code: 'LIE' },
    { name: `Lituania`, code: 'LTU' },
    { name: `Luxemburgo`, code: 'LUX' },
    { name: `macao`, code: 'MAC' },
    { name: `macedonia`, code: 'MKD' },
    { name: `Madagascar`, code: 'MDG' },
    { name: `Malawi`, code: 'MWI' },
    { name: `Malasia`, code: 'MYS' },
    { name: `Maldivas`, code: 'MDV' },
    { name: `mali`, code: 'MLI' },
    { name: `Malta`, code: 'MLT' },
    { name: `Islas Marshall`, code: 'MHL' },
    { name: `Martinica`, code: 'MTQ' },
    { name: `Mauritania`, code: 'MRT' },
    { name: `Isla mauricio`, code: 'MUS' },
    { name: `Méjico`, code: 'MEX' },
    { name: `micronesia`, code: 'FSM' },
    { name: `Moldavia`, code: 'MDA' },
    { name: `Mónaco`, code: 'MCO' },
    { name: `Mongolia`, code: 'MNG' },
    { name: `Montenegro`, code: 'MNE' },
    { name: `Montserrat`, code: 'MSR' },
    { name: `Marruecos`, code: 'MAR' },
    { name: `Mozambique`, code: 'MOZ' },
    { name: `Myanmar`, code: 'MMR' },
    { name: `Namibia`, code: 'NAM' },
    { name: `Nauru`, code: 'NRU' },
    { name: `Nepal`, code: 'NPL' },
    { name: `Países Bajos`, code: 'NLD' },
    { name: `Nueva Caledonia`, code: 'NCL' },
    { name: `Nueva Zelanda`, code: 'NZL' },
    { name: `Nicaragua`, code: 'NIC' },
    { name: `Níger`, code: 'NER' },
    { name: `Nigeria`, code: 'NGA' },
    { name: `Niue`, code: 'NIU' },
    { name: `Islas Marianas del Norte`, code: 'MNP' },
    { name: `Noruega`, code: 'NOR' },
    { name: `Omán`, code: 'OMN' },
    { name: `Pakistán`, code: 'PAK' },
    { name: `Palau`, code: 'PLW' },
    { name: `Palestina`, code: 'PSE' },
    { name: `Panamá`, code: 'PAN' },
    { name: `Papúa Nueva Guinea`, code: 'PNG' },
    { name: `Paraguay`, code: 'PRY' },
    { name: `Perú`, code: 'PER' },
    { name: `Filipinas`, code: 'PHL' },
    { name: `Pitcairn`, code: 'PCN' },
    { name: `Polonia`, code: 'POL' },
    { name: `Portugal`, code: 'PRT' },
    { name: `Puerto Rico`, code: 'PRI' },
    { name: `Katar`, code: 'QAT' },
    { name: `Reunión`, code: 'REU' },
    { name: `Rumania`, code: 'ROU' },
    { name: `Federación Rusa`, code: 'RUS' },
    { name: `Ruanda`, code: 'RWA' },
    { name: `San Bartolomé`, code: 'BLM' },
    { name: `Santa Helena, Ascensión y Tristán da Cunha`, code: 'SHN' },
    { name: `Saint Kitts y Nevis`, code: 'KNA' },
    { name: `Santa Lucía`, code: 'LCA' },
    { name: `San Martín`, code: 'MAF' },
    { name: `San Pedro y Miquelón`, code: 'SPM' },
    { name: `San Vicente y las Granadinas`, code: 'VCT' },
    { name: `Samoa`, code: 'WSM' },
    { name: `San Marino`, code: 'SMR' },
    { name: `Santo Tomé y Príncipe`, code: 'STP' },
    { name: `Arabia Saudita`, code: 'SAU' },
    { name: `Senegal`, code: 'SEN' },
    { name: `Serbia`, code: 'SRB' },
    { name: `Seychelles`, code: 'SYC' },
    { name: `Sierra Leona`, code: 'SLE' },
    { name: `Singapur`, code: 'SGP' },
    { name: `Sint Maarten`, code: 'SXM' },
    { name: `Eslovaquia`, code: 'SVK' },
    { name: `Eslovenia`, code: 'SVN' },
    { name: `Islas Salomón`, code: 'SLB' },
    { name: `Somalia`, code: 'SOM' },
    { name: `Sudáfrica`, code: 'ZAF' },
    { name: `Sudán del Sur`, code: 'SSD' },
    { name: `España`, code: 'ESP' },
    { name: `Sri Lanka`, code: 'LKA' },
    { name: `Sudán`, code: 'SDN' },
    { name: `Surinam`, code: 'SUR' },
    { name: `Suecia`, code: 'SWE' },
    { name: `Suiza`, code: 'CHE' },
    { name: `República Árabe Siria`, code: 'SYR' },
    { name: `Taiwán`, code: 'TWN' },
    { name: `Tayikistán`, code: 'TJK' },
    { name: `Tanzania`, code: 'TZA' },
    { name: `Tailandia`, code: 'THA' },
    { name: `Timor Oriental`, code: 'TLS' },
    { name: `Ir`, code: 'TGO' },
    { name: `Tokelau`, code: 'TKL' },
    { name: `Tonga`, code: 'TON' },
    { name: `Trinidad y Tobago`, code: 'TTO' },
    { name: `Túnez`, code: 'TUN' },
    { name: `Turquía`, code: 'TUR' },
    { name: `Turkmenistán`, code: 'TKM' },
    { name: `Islas Turcas y Caicos`, code: 'TCA' },
    { name: `Tuvalu`, code: 'TUV' },
    { name: `Uganda`, code: 'UGA' },
    { name: `Ucrania`, code: 'UKR' },
    { name: `Emiratos Árabes Unidos`, code: 'ARE' },
    { name: `Reino Unido`, code: 'GBR' },
    { name: `Estados Unidos de America`, code: 'USA' },
    { name: `Estados Unidos Islas menores alejadas de`, code: 'UMI' },
    { name: `Uruguay`, code: 'URY' },
    { name: `Uzbekistán`, code: 'UZB' },
    { name: `Vanuatu`, code: 'VUT' },
    { name: `Venezuela`, code: 'VEN' },
    { name: `Vietnam`, code: 'VNM' },
    { name: `Islas Vírgenes Británicas`, code: 'VGB' },
    { name: `Islas Vírgenes de EE.UU`, code: 'VIR' },
    { name: `Sahara Occidental`, code: 'ESH' },
    { name: `Yemen`, code: 'YEM' },
    { name: `Zambia`, code: 'ZMB' },
    { name: `Zimbabue`, code: 'ZWE' },
  ]
}
