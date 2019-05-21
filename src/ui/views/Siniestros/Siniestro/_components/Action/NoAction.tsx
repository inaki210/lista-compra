import React from 'react';

import { ActionProps } from './Action.models';

export { NoAction };

function NoAction({ children }: ActionProps) {
  return <>{children(undefined)}</>;
}
