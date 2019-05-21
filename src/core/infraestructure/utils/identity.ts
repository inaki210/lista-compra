import { TypedArrayBase } from './utils.types';

export { createDerivedIdentity, createDerivedArrayIdentity };

function createDerivedIdentity<Template>() {
  return function derivedIdentity<Value extends Template>(value: Value) {
    return value;
  };
}

function createDerivedArrayIdentity<Template extends TypedArrayBase>() {
  return function derivedIdentity<Params extends Template>(...params: Params) {
    return params;
  };
}
