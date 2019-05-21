import React from 'react';

import { RouteContainer } from './RouteContainer';
import { defaultRouteContext } from './RouteContext';

export { AnyRoute };

interface Props {
  children: React.ReactNode;
}

function AnyRoute({ children }: Props) {
  return (
    <RouteContainer
      getIsActive={getIsActive}
      routeContext={defaultRouteContext}
    >
      {visible => visible && children}
    </RouteContainer>
  );
}

function getIsActive() {
  return true;
}
