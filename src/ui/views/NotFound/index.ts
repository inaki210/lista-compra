import { reactLazy } from '$core/infraestructure/utils/react';

export { NotFound };

const NotFound = reactLazy(
  () => import(/* webpackChunkName: "notFound" */ './NotFound'),
  module => module.NotFound,
);
