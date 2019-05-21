import { noop } from '$core/infraestructure/utils/noop';
import { loadLocale } from '$locale';
import { Locale } from '$locale/locales';

export { backend };

const backend = {
  type: 'backend',
  init: noop,
  read,
};

async function read(locale: Locale, namespace: string, callback: Callback) {
  try {
    const translations = await loadLocale(locale, namespace);
    callback(null, translations);
  } catch (reason) {
    callback(reason, null);
  }
}

interface Callback {
  // tslint:disable-next-line:no-any
  (error: any, translations: any): void;
}
