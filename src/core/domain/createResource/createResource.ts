import { EventEmitter } from 'events';

import { createAppError } from '$core/infraestructure/createAppError';
import { isEqual } from '$core/infraestructure/utils/isEqual';
import { TypedArrayBase } from '$core/infraestructure/utils/utils.types';
import { errors } from './createResource.errors';
import { Resource } from './createResource.types';

export { createResource };

function createResource<Params extends TypedArrayBase, Result>(
  query: (...params: Params) => Promise<Result>,
  areSameParams: (
    currentParams: Params,
    newParams: Params,
  ) => boolean = isEqual,
): Resource<Params, Result> {
  let currentResult: Result;
  let currentParams: Params | null = null;
  const eventEmitter = new EventEmitter();
  const eventName = 'storeLoaded';

  return {
    load,
    register,
    unregister,
  };

  async function load(...params: Params) {
    requireListener();
    checkParams(params);
    await loadResult(params);
    emit();
  }

  function register(callback: (result: Result) => void) {
    eventEmitter.addListener(eventName, callback);
    return () => unregister(callback);
  }

  function unregister(callback: (result: Result) => void) {
    eventEmitter.removeListener(eventName, callback);
  }

  function requireListener() {
    if (eventEmitter.listenerCount(eventName) <= 0) {
      throw createAppError(errors.context, errors.registerListenerBeforeLoad);
    }
  }

  function checkParams(params: Params) {
    if (currentParams && areSameParams(currentParams, params)) {
      emit();
    } else {
      currentParams = null;
    }
  }

  async function loadResult(params: Params) {
    currentResult = await query(...params);
    currentParams = params;
  }

  function emit() {
    eventEmitter.emit(eventName, currentResult);
  }
}
