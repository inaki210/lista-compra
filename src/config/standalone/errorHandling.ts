import { handleError, onError } from '$core/domain/errorEventBus';
import { createAppError } from '$core/infraestructure/createAppError';
import { log } from '$core/infraestructure/log';

window.onerror = (event, source, lineno, colno, error) => {
  const appError = createAppError('Global', 'unhandled error', {
    event,
    source,
    lineno,
    colno,
    error,
  });
  handleError(appError);
};

onError(appError =>
  log.error(appError.context, appError.name, appError.params),
);
