export { config };

const config = {
  isIntegrated: false,
  locale: {
    cookieName: process.env.REACT_APP__LOCALE__COOKIE_NAME,
  },
  api: {
    url: process.env.REACT_APP__API__URL,
  },
  callMeBack: {
    propagate: process.env.REACT_APP__CALL_ME_BACK__PROPAGATE,
    codigos: {
      hogarYComercio:
        process.env.REACT_APP__CALL_ME_BACK__CODIGO_HOGAR_Y_COMERCIO,
    },
  },
};
