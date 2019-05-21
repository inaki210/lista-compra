import { i18next } from './i18next';

export { localeChanged };

const localeChanged = {
  register,
  unregister,
};

function register(callback: Callback) {
  i18next.on('initialized', callback);
  i18next.on('languageChanged', callback);
  return () => unregister(callback);
}

function unregister(callback: Callback) {
  i18next.off('initialized', callback);
  i18next.off('languageChanged', callback);
}

interface Callback {
  (): void;
}
