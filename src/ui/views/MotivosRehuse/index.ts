import { reactLazy } from '$core/infraestructure/utils/react';

export { MotivosRehuse };

const MotivosRehuse = reactLazy(
  () => import(/* webpackChunkName: "motivosRehuse" */ './MotivosRehuse'),
  module => module.MotivosRehuse,
);
