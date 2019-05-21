import { AxiosRequestConfig } from 'axios';

import { Interceptor } from './applyInterceptor';

export { authorizationInterceptor, setAuthorization, clearAuthorization };

const authorizationInterceptor: Interceptor = {
  onRequestSuccess,
};

function onRequestSuccess(config: AxiosRequestConfig) {
  if (authorization) {
    config.headers.Authorization = authorization;
  }
  return config;
}

function setAuthorization(type: string, token: string) {
  authorization = `${type} ${token}`;
}

function clearAuthorization() {
  authorization = null;
}

let authorization: string | null = null;
