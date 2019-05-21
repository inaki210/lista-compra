import React from 'react';

import { isAuthenticated } from '$core/domain/session';

export { NotAuthenticated };

interface Props {
  children: React.ReactNode;
}

function NotAuthenticated({ children }: Props) {
  return <>{!isAuthenticated() && children}</>;
}
