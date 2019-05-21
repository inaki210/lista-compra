import React from 'react';

import { SectionHeader } from './Section.styles';

export { Section };

interface Props {
  className?: string;
  children: React.ReactNode;
}

function Section({ className, children }: Props) {
  return <section className={className}>{children}</section>;
}

Section.Header = SectionHeader;
