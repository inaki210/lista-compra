import { TypedArrayBase } from '../utils/utils.types';

export type Mapping<Result, Context = {}> =
  | TransformMapping<Result, Context>
  | ObjectMapping<Result, Context>
  | ArrayMapping<Result, Context>;

export type TransformMapping<Result, Context = {}> = {
  transform: TrasformFunction<Result, Context>;
};

export type TrasformFunction<Result, Context = {}> = {
  // tslint:disable-next-line:no-any
  (value: any, context: Context): Result;
};

export type ObjectMapping<Result, Context = {}> = Result extends (
  | TypedArrayBase
  | Date)
  ? never
  : Result extends object
  ? {
      object: FieldsMappings<Result, Context>;
    }
  : never;

export type FieldsMappings<Result, Context = {}> = {
  [field in keyof Result]-?: FieldMapping<Result[field], Context>
};

export type FieldMapping<Result, Context = {}> =
  | false
  | string
  | NamedFieldMapping<Result, Context>
  | TrasformFunction<Result, Context>;

export type NamedFieldMapping<Result, Context = {}> = {
  name: string;
} & Mapping<Result, Context>;

export type ArrayMapping<Result, Context = {}> = Result extends TypedArrayBase
  ? {
      array: Mapping<Result[number], Context>;
    }
  : never;

export type ArrayValue<Value> = Value extends TypedArrayBase ? Value : never;
