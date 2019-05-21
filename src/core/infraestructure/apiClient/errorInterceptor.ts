import { AxiosError } from 'axios';

import { createAppError } from '$core/infraestructure/createAppError';
import { apiClientErrors } from './apiClient.errors';
import { Interceptor } from './applyInterceptor';

export { errorInterceptor };

const errorInterceptor: Interceptor = {
  onRequestError: onError,
  onResponseError: onError,
};

function onError(error: AxiosError) {
  const apiClientError = createApiClientError(error);
  return Promise.reject(apiClientError);
}

function createApiClientError(error: AxiosError) {
  if (error.response) {
    return createError(apiClientErrors.response, error.response);
  }
  if (error.request) {
    return createError(apiClientErrors.request, error.request);
  }
  return createError(apiClientErrors.default, error);
}

function createError<Params>(name: string, params: Params) {
  return createAppError(apiClientErrors.context, name, params);
}
