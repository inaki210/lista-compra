import React from 'react';

import { SiniestroParams } from '$core/domain/siniestros';
import { t } from '$core/infraestructure/locale/t';
import { DetalleSection } from '$ui/views/_components/DetalleSection';
import { Facturas } from '$ui/views/Siniestros/Siniestro/_components/Facturas';
import {
  SiniestroLayout,
} from '$ui/views/Siniestros/Siniestro/_components/SiniestroLayout';
import {
  DetalleSiniestroDefaultSection,
} from './_components/DetalleSiniestroDefaultSection';
import {
  DetalleSiniestroPersonaContactoSection,
} from './_components/DetalleSiniestroPersonaContactoSection';

export { DetalleSiniestro };

interface Props extends SiniestroParams {}

function DetalleSiniestro(props: Props) {
  return (
    <SiniestroLayout {...props} withAside>
      <DetalleSiniestroDefaultSection />
      <DetalleSiniestroPersonaContactoSection />
      <DetalleSection>
        <Facturas>
          <DetalleSection.Header>
            {t('siniestros.facturas.titulo')}
          </DetalleSection.Header>
        </Facturas>
      </DetalleSection>
    </SiniestroLayout>
  );
}
