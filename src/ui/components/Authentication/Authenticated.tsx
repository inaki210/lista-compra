import React from 'react';

import { isAuthenticated } from '$core/domain/session';

export { Authenticated };

interface Props {
  children: React.ReactNode;
}

function Authenticated({ children }: Props) {
  return <>{isAuthenticated() && children}</>;
}
