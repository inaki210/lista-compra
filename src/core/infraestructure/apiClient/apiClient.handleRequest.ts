import { AxiosPromise, AxiosResponse } from 'axios';

import { AppError, isAppError } from '../createAppError';
import { apiClientErrors } from './apiClient.errors';
import { ApiClientConfig } from './apiClient.types';

export { handleRequest };

async function handleRequest<Result>(
  { ignoreNotFoundError }: ApiClientConfig<Result>,
  apiCall: () => AxiosPromise<Result>,
) {
  try {
    const response = await apiCall();
    return response.data;
  } catch (error) {
    if (ignoreNotFoundError && isNotFoundError(error)) {
      return ignoreNotFoundError.value;
    }
    throw error;
  }
}

function isNotFoundError(error: any) {
  return (
    isApiClientResponseError(error) &&
    error.params &&
    error.params.status === 404
  );
}

function isApiClientResponseError(
  error: any,
): error is AppError<AxiosResponse<any>> {
  return (
    isAppError(error) &&
    error.context === apiClientErrors.context &&
    error.name === apiClientErrors.response
  );
}
