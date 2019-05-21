import { EventEmitter } from 'events';

import { TypedArrayBase } from '$core/infraestructure/utils/utils.types';

export { createEventBus };

function createEventBus() {
  const eventEmitter = new EventEmitter();
  return {
    createEvent,
  };

  function createEvent<Callback extends CallbackBase = DefaultCallback>() {
    const name = Symbol();
    return [on, emit] as [typeof on, typeof emit];

    function on(callback: Callback) {
      eventEmitter.addListener(name, callback);
      return () => {
        eventEmitter.removeListener(name, callback);
      };
    }

    function emit(...data: Parameters<Callback>) {
      eventEmitter.emit(name, ...data);
    }
  }
}

interface CallbackBase {
  (...data: TypedArrayBase): void;
}

interface DefaultCallback {
  (): void;
}
