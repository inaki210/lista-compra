import createRouterOriginal, { Route as RouteDefinition } from 'router5';

import { Route, RouteParams, Routes } from './navigator.types';

export { createRouter };

export interface Config<StateName extends string> {
  defaultState: StateName;
  routes: Routes<StateName>;
}

function createRouter<StateName extends string>(config: Config<StateName>) {
  const routes = createRoutes(config.routes);
  return createRouterOriginal(routes, {
    defaultRoute: config.defaultState,
    trailingSlashMode: 'never',
    strictTrailingSlash: true,
  });
}

function createRoutes<StateName extends string>(
  routes: Routes<StateName>,
): RouteDefinition[] {
  return Object.keys(routes).map(stateName => {
    const state = getState(routes[stateName]);
    return {
      name: stateName,
      path: state.path,
      ...handleParams(state.params),
    };
  });
}

function getState(state: string | Route) {
  if (typeof state === 'string') {
    return { path: state };
  }
  return state;
}

function handleParams(params?: RouteParams) {
  if (!params) {
    return {};
  }
  return {
    encodeParams: params.encode,
    decodeParams: params.decode,
  };
}
