import React, { ReactNode, useCallback, useEffect, useState } from 'react';

import { Factura } from '$core/domain/siniestros/facturas';
import { format } from '$core/infraestructure/locale/format';
import { t } from '$core/infraestructure/locale/t';
import { hasItems } from '$core/infraestructure/utils/array';
import { Table } from '$ui/components/Table';
import { Column } from '$ui/components/Table/Table.types';
import { usePresenter } from '$ui/hooks/usePresenter';
import {
  useSiniestroContext,
} from '$ui/views/Siniestros/Siniestro/_hooks/useSiniestroContext';
import { FacturasPresenter } from './Facturas.presenter';
import { FacturasTableBodyCell } from './Facturas.styles';

export { Facturas };

interface Props {
  children?: ReactNode;
}

function Facturas({ children }: Props) {
  const { params } = useSiniestroContext();
  const [facturas, setFacturas] = useState<Factura[]>([]);
  const presenter = usePresenter(FacturasPresenter.create, { setFacturas });
  useEffect(loadPresenter, [presenter, params]);
  const handleRowClick = useCallback(onRowClick, [presenter]);

  return (
    <>
      {hasItems(facturas) && (
        <>
          {children}
          <Table
            columns={columns}
            rows={facturas}
            onRowClick={handleRowClick}
            BodyCell={FacturasTableBodyCell}
          />
        </>
      )}
    </>
  );

  function loadPresenter() {
    return presenter.onLoad(params);
  }

  function onRowClick(factura: Factura) {
    presenter.onFacturaClick(factura);
  }
}

const columns: Column<Factura>[] = [
  {
    name: 'emisor',
    title: () => t('siniestros.facturas.emisor'),
    content: factura => factura.nombre,
  },
  {
    name: 'fecha',
    title: () => t('siniestros.facturas.fecha'),
    content: factura => format(factura.fecha),
  },
];
