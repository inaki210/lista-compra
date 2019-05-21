import axios from 'axios';

import { config } from '$config';
import { applyInterceptor } from './applyInterceptor';
import { authorizationInterceptor } from './authorizationInterceptor';
import { errorInterceptor } from './errorInterceptor';
import { localeInterceptor } from './localeInterceptor';

export { apiClientInstance };

const apiClientInstance = axios.create({
  baseURL: config.api.url,
});

applyInterceptor(apiClientInstance, errorInterceptor);
applyInterceptor(apiClientInstance, localeInterceptor);
applyInterceptor(apiClientInstance, authorizationInterceptor);
