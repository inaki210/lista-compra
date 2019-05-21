import { configureIntegratedContext } from '$config/integratedContext';
import { handleError, onError } from '$core/domain/errorEventBus';
import * as session from '$core/domain/session';
import { setLocale } from '$core/infraestructure/locale/setLocale';
import {
  passthroughNavigatorServer,
} from '$core/infraestructure/passthroughNavigator';

configureIntegratedContext({
  initialize: () => _laPSParams.initialize(externalContext),
  element: _laPSParams.element,
});

declare const _laPSParams: {
  element: HTMLElement;
  origin: string;
  initialize: (context: typeof externalContext) => void;
};

const externalContext = {
  setLocale,
  login,
  authenticate,
  goToState: passthroughNavigatorServer.goToState,
  onStateChanged: passthroughNavigatorServer.onStateChanged,
  onError,
};

function login(params: session.Params) {
  return withErrorHandler(() => session.login(_laPSParams.origin, params));
}

function authenticate(token: session.Token) {
  return withErrorHandler(() => session.authenticate(token));
}

async function withErrorHandler<Method extends () => Promise<void>>(
  method: Method,
) {
  try {
    await method();
  } catch (error) {
    handleError(error);
  }
}
