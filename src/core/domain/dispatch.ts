import { TypedArrayBase } from '$core/infraestructure/utils/utils.types';
import { handleError } from './errorEventBus';

export { dispatch };

function dispatch<Query extends QueryFunction>(query: Query) {
  dispatchAsync(query).catch(handleError);
}

async function dispatchAsync<Query extends QueryFunction>(query: Query) {
  await query();
}

interface QueryFunction {
  (...params: TypedArrayBase): void | Promise<void>;
}
