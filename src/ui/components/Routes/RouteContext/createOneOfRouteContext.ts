import { navigator } from '$ui/navigator';
import { createBaseRouteContext } from './createBaseRouteContext';

export { createOneOfRouteContext };

function createOneOfRouteContext() {
  let isAnyActive: boolean = false;
  const routes: Route[] = [];

  return {
    context: createBaseRouteContext((getIsActive, onStateChangedCallback) => {
      const route = addRoute(getIsActive);
      loadIsActive();
      const offStateChanged = navigator.onStateChanged(onStateChangedCallback);
      return {
        isActive: () => route.isActive,
        unregister: () => {
          offStateChanged();
          removeRoute(route);
        },
      };
    }),
    isActive: () => isAnyActive,
    unregister: navigator.onStateChanged(loadIsActive),
  };

  function addRoute(getIsActive: () => boolean): Route {
    const route = {
      isActive: false,
      getIsActive,
    };
    routes.push(route);
    return route;
  }

  function loadIsActive() {
    let isActive = false;
    routes.forEach(route => {
      route.isActive = !isActive && route.getIsActive();
      isActive = isActive || route.isActive;
    });
    isAnyActive = isActive;
  }

  function removeRoute(route: Route) {
    const index = routes.indexOf(route);
    routes.slice(index, 1);
  }
}

interface Route {
  isActive: boolean;
  getIsActive(): boolean;
}
