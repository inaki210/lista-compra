import React from 'react';

import { format } from '$core/infraestructure/locale/format';
import { t } from '$core/infraestructure/locale/t';
import { DetalleList } from '$ui/views/_components/DetalleList';
import { DetalleSection } from '$ui/views/_components/DetalleSection';
import {
  useSiniestroContext,
} from '$ui/views/Siniestros/Siniestro/_hooks/useSiniestroContext';

export { DetalleSiniestroDefaultSection };

function DetalleSiniestroDefaultSection() {
  const { siniestro } = useSiniestroContext();
  return (
    <DetalleSection>
      <DetalleSection.Header>
        {t('siniestros.detalle.titulo')}
      </DetalleSection.Header>
      <DetalleList>
        <DetalleList.Item
          name={t('siniestros.detalle.poliza')}
          content={siniestro.poliza}
        />
        {siniestro.fechaSiniestro && (
          <DetalleList.Item
            name={t('siniestros.detalle.fechaSiniestro')}
            content={format(siniestro.fechaSiniestro)}
          />
        )}
        {siniestro.relato && (
          <DetalleList.Item
            name={t('siniestros.detalle.relato')}
            content={siniestro.relato}
          />
        )}
      </DetalleList>
    </DetalleSection>
  );
}
