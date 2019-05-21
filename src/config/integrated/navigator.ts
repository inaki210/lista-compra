import { Router } from 'router5';

import {
  createNavigator,
  createRouter,
  Navigator,
  Routes,
} from '$core/infraestructure/navigator';
import {
  passthroughNavigatorClient,
} from '$core/infraestructure/passthroughNavigator';
import { StateName } from '$ui/navigator';
import { configureNavigator } from '$ui/navigator/navigator';

configureNavigator(routes => {
  const router = createIntegratedRouter(routes);
  return createWrappedNavigator(router);
});

function createIntegratedRouter(routes: Routes<StateName>) {
  const router = createRouter({
    defaultState: 'notFound',
    routes,
  });
  const path = router.buildPath('home', {});
  return router.start(path);
}

function createWrappedNavigator(router: Router): Navigator<StateName> {
  const navigator = createNavigator<StateName>(router, window);
  passthroughNavigatorClient.onStateChanged((state, params) =>
    navigator.goToState(state as StateName, params),
  );
  return {
    ...navigator,
    goToState: passthroughNavigatorClient.goToState,
    goBack: () => passthroughNavigatorClient.goToState('back'),
  };
}
