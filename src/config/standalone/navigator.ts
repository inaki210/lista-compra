import browserPluginFactory from 'router5-plugin-browser';

import {
  createNavigator,
  createRouter,
  Routes,
} from '$core/infraestructure/navigator';
import { StateName } from '$ui/navigator';
import { configureNavigator } from '$ui/navigator/navigator';

configureNavigator(routes => {
  const router = createStandaloneRouter(routes);
  return createNavigator<StateName>(router, window);
});

function createStandaloneRouter(routes: Routes<StateName>) {
  const router = createRouter({
    defaultState: 'notFound',
    routes,
  });
  router.usePlugin(
    browserPluginFactory({
      base: process.env.PUBLIC_URL,
    }),
  );
  return router.start();
}
