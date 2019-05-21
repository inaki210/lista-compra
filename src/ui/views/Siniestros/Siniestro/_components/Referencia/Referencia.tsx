import React from 'react';

import { SiniestroParams } from '$core/domain/siniestros';
import { t } from '$core/infraestructure/locale/t';
import { RouteLink } from '$ui/components/Routes/RouteLink';
import { ReferenciaLabel, ReferenciaValue } from './Referencia.styles';

export { Referencia };

interface Props {
  className?: string;
  siniestro?: number;
  params: SiniestroParams;
  showDetalleLink?: boolean;
}

function Referencia({ className, siniestro, params, showDetalleLink }: Props) {
  return (
    <div className={className}>
      <ReferenciaLabel>{t('siniestros.numeroReferencia')}:</ReferenciaLabel>
      <ReferenciaValue>{siniestro}</ReferenciaValue>
      {showDetalleLink && (
        <RouteLink state="siniestro.detalle" params={params}>
          {t('siniestros.verDetalle')}
        </RouteLink>
      )}
    </div>
  );
}
