import React, { useMemo } from 'react';

import { Persona } from '$core/domain/siniestros/siniestro';
import {
  GrupoContactosContacto,
  GrupoContactosTitle,
  GrupoContactosWrapper,
} from './GrupoContactos.styles';

export { GrupoContactos };

interface Props {
  titulo: string;
  contacto: Persona | Persona[];
}

function GrupoContactos({ titulo, contacto }: Props) {
  const contactos = useMemo(createContactos, [contacto]);
  if (contactos.length === 0) {
    return null;
  }
  return (
    <GrupoContactosWrapper>
      <GrupoContactosTitle>{titulo}:</GrupoContactosTitle>
      {contactos.map(current => (
        <GrupoContactosContacto key={current.id} persona={current} />
      ))}
    </GrupoContactosWrapper>
  );

  function createContactos() {
    return contacto instanceof Array ? contacto : [contacto];
  }
}
