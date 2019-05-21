import React from 'react';

import { RouteContainer } from './RouteContainer';
import { createOneOfRouteContext } from './RouteContext';

export { OneRouteOf };

interface Props {
  children: React.ReactNode;
}

class OneRouteOf extends React.Component<Props> {
  private oneOfRouteContext = createOneOfRouteContext();

  componentWillUnmount() {
    this.oneOfRouteContext.unregister();
  }

  render() {
    const { children } = this.props;
    const { context } = this.oneOfRouteContext;
    return (
      <RouteContainer getIsActive={this.getIsActive} routeContext={context}>
        {() => children}
      </RouteContainer>
    );
  }

  private getIsActive = () => this.oneOfRouteContext.isActive();
}
