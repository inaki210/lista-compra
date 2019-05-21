import { EventEmitter } from 'events';

import { TypedArrayBase } from './utils.types';

export { createEvents };

function createEvents<
  Event extends string,
  Data extends TypedArrayBase = []
>() {
  const eventEmitter = new EventEmitter();

  return { on, emit };

  function on(name: Event, callback: Callback<Data>) {
    eventEmitter.addListener(name, callback as Callback);
    return () => {
      eventEmitter.removeListener(name, callback as Callback);
    };
  }

  function emit(name: Event, ...data: Data) {
    eventEmitter.emit(name, ...data);
  }
}

interface Callback<Data extends TypedArrayBase = TypedArrayBase> {
  (...data: Data): void;
}
