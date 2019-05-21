import './dates';
import './numbers';

import { Locale } from './locales';

export { loadLocale };

async function loadLocale(locale: Locale, namespace: string) {
  const content = await loadLocaleFile(locale, namespace);
  return content.default;
}

function loadLocaleFile(locale: Locale, namespace: string) {
  return import(/* webpackChunkName: "locales/[request]" */ `./resources/${namespace}.${locale}`);
}
