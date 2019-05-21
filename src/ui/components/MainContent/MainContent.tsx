import React from 'react';

import {
  MainContentAside,
  MainContentBody,
  MainContentWrapper,
} from './MainContent.styles';

export { MainContent };

interface Props {
  className?: string;
  children: React.ReactNode;
}

function MainContent({ className, children }: Props) {
  return (
    <MainContentWrapper className={className}>{children}</MainContentWrapper>
  );
}

MainContent.Body = MainContentBody;
MainContent.Aside = MainContentAside;
