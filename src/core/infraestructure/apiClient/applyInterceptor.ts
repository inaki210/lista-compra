import {
  AxiosError,
  AxiosInstance,
  AxiosInterceptorManager,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

export { applyInterceptor };

function applyInterceptor(instance: AxiosInstance, interceptor: Interceptor) {
  use(
    instance.interceptors.request,
    interceptor.onRequestSuccess,
    interceptor.onRequestError,
  );
  use(
    instance.interceptors.response,
    interceptor.onResponseSuccess,
    interceptor.onResponseError,
  );
}

function use<Value>(
  manager: AxiosInterceptorManager<Value>,
  success?: Success<Value>,
  error?: Error,
) {
  if (success || error) {
    manager.use(success, error);
  }
}

export interface Interceptor {
  onRequestSuccess?: Success<AxiosRequestConfig>;
  onRequestError?: Error;
  onResponseSuccess?: Success<AxiosResponse>;
  onResponseError?: Error;
}

interface Success<Value> {
  (value: Value): Value | Promise<Value>;
}

interface Error {
  // tslint:disable-next-line:no-any
  (error: AxiosError): any;
}
