import { navigator, StateName } from '$ui/navigator';
import { Register, RouteContextValue } from './RouteContext.types';

export { createBaseRouteContext };

function createBaseRouteContext(register: Register): RouteContextValue {
  return {
    register,
    current: () => navigator.current(),
    isActive: (state: StateName, exact: boolean) =>
      exact ? navigator.isCurrent(state) : navigator.isActive(state),
  };
}
