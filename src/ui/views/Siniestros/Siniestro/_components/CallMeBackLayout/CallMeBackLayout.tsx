import React from 'react';

import {
  CallMeBackLayoutImage,
  CallMeBackLayoutSection,
  CallMeBackLayoutSectionHeader,
  CallMeBackLayoutWrapper,
} from './CallMeBackLayout.styles';

export { CallMeBackLayout };

interface Props {
  title: string;
  children: React.ReactNode;
}

function CallMeBackLayout({ title, children }: Props) {
  return (
    <CallMeBackLayoutWrapper>
      <CallMeBackLayoutImage name="gestor.svg" />
      <CallMeBackLayoutSection>
        <CallMeBackLayoutSectionHeader>{title}</CallMeBackLayoutSectionHeader>
        {children}
      </CallMeBackLayoutSection>
    </CallMeBackLayoutWrapper>
  );
}
