import { reactLazy } from '$core/infraestructure/utils/react';

export { Home };

const Home = reactLazy(
  () => import(/* webpackChunkName: "home" */ './Home'),
  module => module.Home,
);
