import React from 'react';

import { noop } from '$core/infraestructure/utils/noop';
import { RouteContext } from './RouteContext';
import {
  RouteContextValue,
  RouteState,
} from './RouteContext/RouteContext.types';

export { RouteContainer };
interface Props {
  getIsActive: () => boolean;
  routeContext: RouteContextValue;
  children: (visible: boolean) => React.ReactNode;
}

interface State {
  visible: boolean;
}

class RouteContainer extends React.Component<Props, State> {
  static contextType = RouteContext;

  context!: React.ContextType<typeof RouteContext>;

  state: State = {
    visible: false,
  };

  private routeState: RouteState = {
    isActive: () => false,
    unregister: noop,
  };

  componentDidMount() {
    this.registerRouteState();
  }

  componentWillUnmount() {
    this.unregisterRouteState();
  }

  render() {
    const { visible } = this.state;
    const { routeContext, children } = this.props;
    return (
      <RouteContext.Provider value={routeContext}>
        {children(visible)}
      </RouteContext.Provider>
    );
  }

  private registerRouteState() {
    this.routeState = this.context.register(
      this.getIsActive,
      this.handleStateChanged,
    );
    this.handleStateChanged();
  }

  private getIsActive = () => this.props.getIsActive();

  private handleStateChanged = () => {
    const { visible } = this.state;
    const isVisible = this.routeState.isActive();
    if (visible !== isVisible) {
      this.setState({ visible: isVisible });
    }
  };

  private unregisterRouteState() {
    this.routeState.unregister();
  }
}
