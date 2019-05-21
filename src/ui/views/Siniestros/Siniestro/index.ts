import { reactLazy } from '$core/infraestructure/utils/react';

export { Siniestro };

const Siniestro = reactLazy(
  () => import(/* webpackChunkName: "siniestro" */ './Siniestro'),
  module => module.Siniestro,
);
