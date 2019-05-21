import React from 'react';

import { LayoutWrapper } from './Layout.styles';

export { Layout };

interface Props {
  className?: string;
  children: React.ReactNode;
}

function Layout({ className, children }: Props) {
  return (
    <LayoutWrapper className={className}>
      <h1>Mezu Front</h1>
      {children}
    </LayoutWrapper>
  );
}
