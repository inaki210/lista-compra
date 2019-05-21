import { createResource } from '$core/domain/createResource';
import { getFactura as getFacturaApi, getFacturas } from './facturas.api';
import { Factura } from './facturas.types';

export { facturasResource, getFactura };

const facturasResource = createResource(getFacturas);

function getFactura(factura: Factura) {
  return getFacturaApi(factura.enlace);
}
