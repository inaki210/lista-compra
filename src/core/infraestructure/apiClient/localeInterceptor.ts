import { AxiosRequestConfig } from 'axios';

import { currentLocale } from '$core/infraestructure/locale/i18next';
import { Interceptor } from './applyInterceptor';

export { localeInterceptor };

const localeInterceptor: Interceptor = {
  onRequestSuccess,
};

function onRequestSuccess(config: AxiosRequestConfig) {
  const locale = currentLocale();
  if (locale) {
    config.headers['Accept-Language'] = currentLocale();
  }
  return config;
}
