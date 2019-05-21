import React from 'react';

import {
  ContactoItemDetail,
  ContactoItemImage,
  ContactoItemWrapper,
} from './ContactoItem.styles';

export { ContactoItem };

interface Props {
  className?: string;
  icon: string;
  children: React.ReactNode;
}

function ContactoItem({ className, icon, children }: Props) {
  return (
    <ContactoItemWrapper className={className}>
      <ContactoItemImage name={icon} />
      <ContactoItemDetail>{children}</ContactoItemDetail>
    </ContactoItemWrapper>
  );
}
