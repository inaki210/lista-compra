import React, { ReactNode } from 'react';

import {
  TrabajoDescripcion,
  TrabajoTitle,
  TrabajoWrapper,
} from './Trabajo.styles';

export { Trabajo };

interface Props {
  className?: string;
  nombre: ReactNode;
  descripcion: ReactNode;
  finalizado?: boolean;
}

function Trabajo({ className, nombre, descripcion, finalizado }: Props) {
  return (
    <TrabajoWrapper className={className} finalizado={finalizado}>
      <TrabajoTitle finalizado={finalizado}>{nombre}</TrabajoTitle>
      <TrabajoDescripcion>{descripcion}</TrabajoDescripcion>
    </TrabajoWrapper>
  );
}
