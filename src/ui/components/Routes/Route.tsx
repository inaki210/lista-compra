import React from 'react';

import { StateParams } from '$core/infraestructure/navigator';
import { StateName } from '$ui/navigator';
import { RouteContainer } from './RouteContainer';
import { defaultRouteContext, RouteContext } from './RouteContext';

export { Route };

interface Props {
  state: StateName;
  exact?: boolean;
  children: (params: StateParams) => React.ReactNode;
}

class Route extends React.Component<Props> {
  static contextType = RouteContext;

  context!: React.ContextType<typeof RouteContext>;

  render() {
    const { children } = this.props;
    return (
      <RouteContainer
        getIsActive={this.getIsActive}
        routeContext={defaultRouteContext}
      >
        {visible => visible && children(this.getParams())}
      </RouteContainer>
    );
  }

  private getIsActive = () => {
    const { state, exact } = this.props;
    return this.context.isActive(state, exact || false);
  };

  private getParams() {
    const state = this.context.current();
    return state.params;
  }
}
