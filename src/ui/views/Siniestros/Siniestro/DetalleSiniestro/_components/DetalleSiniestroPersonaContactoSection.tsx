import React from 'react';

import { TipoPersonaContacto } from '$core/domain/siniestros/siniestro';
import { t } from '$core/infraestructure/locale/t';
import { DetalleList } from '$ui/views/_components/DetalleList';
import { DetalleSection } from '$ui/views/_components/DetalleSection';
import {
  useSiniestroContext,
} from '$ui/views/Siniestros/Siniestro/_hooks/useSiniestroContext';

export { DetalleSiniestroPersonaContactoSection };

function DetalleSiniestroPersonaContactoSection() {
  const { siniestro } = useSiniestroContext();
  const personaContacto = siniestro.personaContacto;

  if (!personaContacto) {
    return null;
  }

  const nombreKey =
    personaContacto.tipo === TipoPersonaContacto.persona
      ? 'siniestros.detalle.personaContacto.nombre'
      : 'siniestros.detalle.personaContacto.razonSocial';
  return (
    <DetalleSection>
      <DetalleSection.Header>
        {t('siniestros.detalle.personaContacto.titulo')}
      </DetalleSection.Header>
      <DetalleList>
        <DetalleList.Item
          name={t(nombreKey)}
          content={personaContacto.nombre}
        />
        {personaContacto.telefono && (
          <DetalleList.Item
            name={t('siniestros.detalle.personaContacto.telefono')}
            content={personaContacto.telefono}
          />
        )}
        {personaContacto.telefonoMovil && (
          <DetalleList.Item
            name={t('siniestros.detalle.personaContacto.telefonoMovil')}
            content={personaContacto.telefonoMovil}
          />
        )}
        {personaContacto.telefonoTrabajo && (
          <DetalleList.Item
            name={t('siniestros.detalle.personaContacto.telefonoTrabajo')}
            content={personaContacto.telefonoTrabajo}
          />
        )}
        {personaContacto.email && (
          <DetalleList.Item
            name={t('siniestros.detalle.personaContacto.email')}
            content={personaContacto.email}
          />
        )}
      </DetalleList>
    </DetalleSection>
  );
}
