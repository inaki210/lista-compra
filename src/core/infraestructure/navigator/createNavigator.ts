import { Router, State as RouterState } from 'router5';
import { Unsubscribe } from 'router5/types/types/base';

import {
  Navigator,
  State,
  StateChangedCallback,
  StateParams,
} from './navigator.types';

export { createNavigator };

function createNavigator<StateName extends string>(
  router: Router,
  window: Window,
): Navigator<StateName> {
  return {
    goToState: (stateName, params) => goToState(router, stateName, params),
    goToUrl: (url, target) => window.open(url, target),
    goBack: () => window.history.back(),
    isActive: stateName => isActive(router, stateName),
    isCurrent: stateName => isCurrent(router, stateName),
    onStateChanged: callback => onStateChanged(router, callback),
    current: () => current(router),
  };
}

function goToState<StateName extends string>(
  router: Router,
  stateName: StateName,
  params?: StateParams,
) {
  return router.navigate(stateName, params || {});
}

function isActive<StateName extends string>(
  router: Router,
  stateName: StateName,
) {
  const state = router.getState();
  const regExp = new RegExp(`^${stateName}(\\.|$)`);
  return regExp.test(state.name);
}

function isCurrent<StateName extends string>(
  router: Router,
  stateName: StateName,
) {
  const state = router.getState();
  return state.name === stateName;
}

function onStateChanged<StateName extends string>(
  router: Router,
  callback: StateChangedCallback<StateName>,
) {
  return router.subscribe(({ previousRoute, route }) =>
    callback(createState(previousRoute), createState(route)),
  ) as Unsubscribe;
}

function current<StateName extends string>(router: Router) {
  const state = router.getState();
  return createState<StateName>(state);
}

function createState<StateName extends string>(
  routerState: RouterState,
): State<StateName> {
  return {
    name: routerState.name as StateName,
    params: routerState.params,
  };
}
