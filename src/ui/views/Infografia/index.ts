import { reactLazy } from '$core/infraestructure/utils/react';

export { Infografia };

const Infografia = reactLazy(
  () => import(/* webpackChunkName: "infografia" */ './Infografia'),
  module => module.Infografia,
);
