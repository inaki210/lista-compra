import { SiniestroParams } from '$core/domain/siniestros';
import { get, getFile } from '$core/infraestructure/apiClient';
import { map, Mapping, parseDate } from '$core/infraestructure/mapper';
import { Factura } from './facturas.types';

export { getFacturas, getFactura };

async function getFacturas(params: SiniestroParams) {
  const data = await get({
    path: `siniestros/${params.ramo}/${params.siniestro}/facturas`,
    ignoreNotFoundError: {
      value: [],
    },
  });
  return map(data, mappings, params);
}

const mappings: Mapping<Factura[], SiniestroParams> = {
  array: {
    object: {
      id: 'enlace',
      nombre: 'nombre',
      fecha: {
        name: 'fecha',
        transform: parseDate,
      },
      enlace: 'enlace',
    },
  },
};

function getFactura(path: string) {
  return getFile({ path });
}
