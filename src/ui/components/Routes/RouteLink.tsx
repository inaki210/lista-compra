import React from 'react';

import { Link } from '$ui/components/Link';
import { useGoToState } from '$ui/hooks/useGoToState';
import { RouteLinkProps } from './RouteLink.types';

export { RouteLink };

function RouteLink({ className, state, params, children }: RouteLinkProps) {
  const goToState = useGoToState(state, params);

  return (
    <Link className={className} onClick={goToState}>
      {children}
    </Link>
  );
}
