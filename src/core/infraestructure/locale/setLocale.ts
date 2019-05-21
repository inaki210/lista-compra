import { Locale } from '$locale/locales';
import { i18next } from './i18next';

export { setLocale };

function setLocale(locale: Locale) {
  i18next.changeLanguage(locale);
}
