import * as Models from './mapper.models';

export type Mapping<Result, Context = {}> = Models.Mapping<Result, Context>;
export type FieldsMappings<Result, Context = {}> = Models.FieldsMappings<
  Result,
  Context
>;
