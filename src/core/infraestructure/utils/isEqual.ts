export { isEqual };

function isEqual<Param>(param1: Param, param2: Param): boolean {
  return (
    param1 === param2 ||
    isArrayAndEqual(param1, param2) ||
    isObjectAndEqual(param1, param2)
  );
}

function isArrayAndEqual<Param>(param1: Param, param2: Param) {
  return (
    param1 instanceof Array &&
    param2 instanceof Array &&
    arrayIsEqual(param1, param2)
  );
}

function arrayIsEqual<Param>(array1: Param[], array2: Param[]) {
  return (
    array1.length === array2.length &&
    array1.every((value, index) => isEqual(value, array2[index]))
  );
}

function isObjectAndEqual<Param>(param1: Param, param2: Param) {
  return (
    typeof param1 === 'object' &&
    typeof param2 === 'object' &&
    objectIsEqual(param1, param2)
  );
}

function objectIsEqual(param1: {}, param2: {}) {
  const param1Keys = Object.keys(param1);
  const param2Keys = Object.keys(param2);
  return (
    arrayIsEqual(param1Keys, param2Keys) &&
    param1Keys.every(key => isEqual(param1[key], param2[key]))
  );
}
