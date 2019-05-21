import {
  createDerivedArrayIdentity,
} from '$core/infraestructure/utils/identity';

export { locales };
export type Locale = typeof locales[number];

const identity = createDerivedArrayIdentity<string[]>();

const locales = identity('es', 'eu');
