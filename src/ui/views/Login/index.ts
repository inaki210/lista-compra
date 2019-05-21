import { reactLazy } from '$core/infraestructure/utils/react';

export { Login };

const Login = reactLazy(
  () => import(/* webpackChunkName: "login" */ './Login'),
  module => module.Login,
);
