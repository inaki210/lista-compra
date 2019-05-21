export interface Navigator<StateName extends string> {
  goToState(stateName: StateName, params?: StateParams): void;
  goToUrl(url: string, target?: string): void;
  goBack(): void;
  isActive(stateName: StateName): boolean;
  isCurrent(stateName: StateName): boolean;
  onStateChanged(callback: StateChangedCallback<StateName>): OffStateChanged;
  current(): State<StateName>;
}

export interface StateChangedCallback<StateName extends string> {
  (from: State<StateName>, to: State<StateName>): void;
}

export interface OffStateChanged {
  (): void;
}

export type Routes<StateName extends string> = {
  [stateName in StateName]: string | Route
};

export interface Route {
  path: string;
  params?: RouteParams;
}

export interface RouteParams {
  encode(stateParams: StateParams): StateParams;
  decode(pathParams: StateParams): StateParams;
}

export interface ExternalNavigator {
  goToState(stateName: string, params?: StateParams): void;
  onStateChanged(
    callback: (stateName: string, params?: StateParams) => void,
  ): OffStateChanged;
}

export interface State<StateName extends string> {
  name: StateName;
  params: StateParams;
}

export interface StateParams {
  // tslint:disable-next-line:no-any
  [key: string]: any;
}
