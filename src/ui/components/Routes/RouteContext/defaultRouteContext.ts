import { navigator } from '$ui/navigator';
import { createBaseRouteContext } from './createBaseRouteContext';

export { defaultRouteContext };

const defaultRouteContext = createBaseRouteContext(
  (getIsActive, onStateChangedCallback) => {
    let isActive: boolean;
    loadIsActive();
    return {
      isActive: () => isActive,
      unregister: navigator.onStateChanged(handleStateChanged),
    };

    function loadIsActive() {
      isActive = getIsActive();
    }

    function handleStateChanged() {
      loadIsActive();
      onStateChangedCallback();
    }
  },
);
