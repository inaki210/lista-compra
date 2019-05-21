import dayjs from 'dayjs';
import LanguageDetector from 'i18next-browser-languagedetector';
import numeral from 'numeral';

import { config } from '$config';
import { locales } from '$locale/locales';
import { backend } from './backend';
import { currentLocale } from './currentLocale';
import { formatter } from './formatter';
import { i18nextInstance } from './i18nextInstance';

i18nextInstance
  .use(backend)
  .use(config.isIntegrated ? {} : LanguageDetector)
  .init({
    load: 'languageOnly',
    fallbackLng: locales[0],
    whitelist: locales,
    debug: false,

    detection: config.isIntegrated
      ? undefined
      : {
          order: ['cookie'],
          caches: ['cookie'],
          lookupCookie: config.locale.cookieName,
        },

    interpolation: {
      format: formatter,
    },
  });

i18nextInstance.on('languageChanged', () => {
  const locale = currentLocale();
  dayjs.locale(locale);
  numeral.locale(locale);
});
