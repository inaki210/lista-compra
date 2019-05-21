import React from 'react';

import {
  SiniestroContentActionContainer,
  SiniestroContentActionImage,
} from './SiniestroContentAction.styles';

export { SiniestroContentAction };

interface Props {
  className?: string;
  icon: string;
  name: string;
  onClick: () => void;
}

function SiniestroContentAction({ className, icon, name, onClick }: Props) {
  return (
    <SiniestroContentActionContainer className={className} onClick={onClick}>
      <SiniestroContentActionImage name={icon} />
      {name}
    </SiniestroContentActionContainer>
  );
}
