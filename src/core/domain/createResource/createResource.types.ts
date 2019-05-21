import { TypedArrayBase } from '$core/infraestructure/utils/utils.types';

export interface Resource<Params extends TypedArrayBase, Result> {
  load(...params: Params): Promise<void>;
  register(callback: (result: Result) => void): UnregisterFunction;
  unregister(callback: (result: Result) => void): void;
}

export interface UnregisterFunction {
  (): void;
}
