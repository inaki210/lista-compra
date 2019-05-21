import { TypedArrayBase } from './utils/utils.types';

export { log };

const log = {
  debug,
  error,
};

function debug(message: string, ...params: TypedArrayBase) {
  // tslint:disable-next-line:no-console
  console.log(message, ...params);
}

function error(message: string, ...params: TypedArrayBase) {
  // tslint:disable-next-line:no-console
  console.error(message, ...params);
}
