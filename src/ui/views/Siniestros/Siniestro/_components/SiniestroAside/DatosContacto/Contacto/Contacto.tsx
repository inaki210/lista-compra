import React from 'react';

import { Persona } from '$core/domain/siniestros/siniestro';
import { hasItems } from '$core/infraestructure/utils/array';
import { ContactoItem, ContactoLink, ContactoWrapper } from './Contacto.styles';

export { Contacto };

interface Props {
  className?: string;
  persona: Persona;
}

function Contacto({ className, persona }: Props) {
  return (
    <ContactoWrapper className={className}>
      <div>{persona.nombre}</div>
      {persona.telefono && (
        <ContactoItem icon="telefono.svg">
          <ContactoLink href={`tel:${persona.telefono}`}>
            {persona.telefono}
          </ContactoLink>
        </ContactoItem>
      )}
      {persona.email && (
        <ContactoItem icon="arroba.svg">
          <ContactoLink href={`mailto:${persona.email}`}>
            {persona.email}
          </ContactoLink>
        </ContactoItem>
      )}
      {hasItems(persona.horarios) && (
        <ContactoItem icon="horario.svg">
          {persona.horarios.map((horario, index) => (
            <span key={index}>{horario}</span>
          ))}
        </ContactoItem>
      )}
    </ContactoWrapper>
  );
}
