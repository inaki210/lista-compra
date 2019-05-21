import {
  AppError,
  createAppError,
  isAppError,
} from '$core/infraestructure/createAppError';
import { createEventBus } from '$core/infraestructure/eventBus';

export { handleError, onError };

const eventBus = createEventBus();
const [onError, emitError] = eventBus.createEvent<ErrorCallback>();

function handleError<Error>(error: Error) {
  const appError = isAppError(error) ? error : createUnknownAppError(error);
  emitError(appError);
}

function createUnknownAppError<Error>(error: Error) {
  return createAppError('ErrorEventBus', 'unknown error', error);
}

interface ErrorCallback {
  (appError: AppError<any>): void;
}
