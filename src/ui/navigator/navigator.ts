import { createAppError } from '$core/infraestructure/createAppError';
import { Navigator, Routes } from '$core/infraestructure/navigator';
import { StateName } from './navigator.types';
import { routes } from './routes';

export { navigator, configureNavigator };

const navigator: Navigator<StateName> = {
  goToState: notConfigured('goToState'),
  goToUrl: notConfigured('goToUrl'),
  goBack: notConfigured('goBack'),
  isActive: notConfigured('isActive'),
  isCurrent: notConfigured('isCurrent'),
  onStateChanged: notConfigured('onStateChange'),
  current: notConfigured('current'),
};

function configureNavigator(createNavigator: CreateNavigator) {
  Object.assign(navigator, createNavigator(routes));
}

function notConfigured<T>(method: string): () => T {
  return () => {
    throw createAppError('navigator', `method ${method} not configured`);
  };
}

interface CreateNavigator {
  (routes: Routes<StateName>): Navigator<StateName>;
}
