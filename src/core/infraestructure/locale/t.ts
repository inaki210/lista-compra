import { i18next } from './i18next';

export { t, createNamespacedT };

const t: TFunction = (...params) => i18next.t(...params);

const createNamespacedT = (namespace: string) =>
  i18next.getFixedT(null, namespace);

type TFunction = typeof i18next.t;
