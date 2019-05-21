import React from 'react';

import { t } from '$core/infraestructure/locale/t';
import { navigator } from '$ui/navigator';
import { BackLinkLink } from './BackLink.styles';

export { BackLink };

interface Props {
  className?: string;
}

function BackLink({ className }: Props) {
  return (
    <BackLinkLink className={className} onClick={handleClick}>
      {t('components.backLink')}
    </BackLinkLink>
  );

  function handleClick() {
    navigator.goBack();
  }
}
