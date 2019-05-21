import { State } from '$core/infraestructure/navigator';
import { StateName } from '$ui/navigator';

export interface RouteContextValue {
  register: Register;
  current(): State<StateName>;
  isActive(state: StateName, exact: boolean): boolean;
}

export interface Register {
  (getIsActive: () => boolean, onStateChangedCallback: () => void): RouteState;
}

export interface RouteState {
  isActive(): boolean;
  unregister(): void;
}
