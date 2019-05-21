import React, { ReactNode } from 'react';

import { InformacionBody, InformacionHeader } from './Informacion.styles';

export { Informacion };

interface Props {
  children: ReactNode;
}

function Informacion({ children }: Props) {
  return <>{children}</>;
}

Informacion.Header = InformacionHeader;
Informacion.Body = InformacionBody;
