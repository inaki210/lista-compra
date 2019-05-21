import { currentLocale as i18nextCurrentLocale, i18next } from './i18next';

export { currentLocale };

function currentLocale() {
  return i18next.isInitialized ? i18nextCurrentLocale() : null;
}
