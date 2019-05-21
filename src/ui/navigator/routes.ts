import { Routes, StateParams } from '$core/infraestructure/navigator';
import { createDerivedIdentity } from '$core/infraestructure/utils/identity';

export { routes };

const identity = createDerivedIdentity<Routes<string>>();

const routes = identity({
  notFound: '/not-found',
  home: '/',
  siniestro: {
    path: '/siniestros/:ramo<\\d+>/:siniestro<\\d+>',
    params: {
      encode: encodeSiniestorParams,
      decode: decodeSiniestroParams,
    },
  },
  'siniestro.detalle': '/detalle',
  'siniestro.agenda': '/agenda',
  infografia: '/infografias/:name',
  motivosRehuse: '/motivos-rehuses/:name',
});

function encodeSiniestorParams(params: StateParams) {
  return {
    ...params,
    ramo: params.ramo.toString(),
    siniestro: params.siniestro.toString(),
  };
}

function decodeSiniestroParams(params: StateParams) {
  return {
    ...params,
    ramo: parseInt(params.ramo, 10),
    siniestro: parseInt(params.siniestro, 10),
  };
}
