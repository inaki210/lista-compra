import { reactLazy } from '$core/infraestructure/utils/react';

export { DetalleSiniestro };

const DetalleSiniestro = reactLazy(
  () => import(/* webpackChunkName: "detalleSiniestro" */ './DetalleSiniestro'),
  module => module.DetalleSiniestro,
);
