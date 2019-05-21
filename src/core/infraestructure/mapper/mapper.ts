import { createAppError } from '$core/infraestructure/createAppError';
import { TypedArrayBase } from '../utils/utils.types';
import { errors } from './mapper.errors';
import {
  ArrayMapping,
  ArrayValue,
  FieldMapping,
  FieldsMappings,
  Mapping,
  NamedFieldMapping,
  ObjectMapping,
  TransformMapping,
  TrasformFunction,
} from './mapper.models';

export { map };

function map<Source, Result, Context = {}>(
  source: Source,
  mapping: Mapping<Result, Context>,
  context: Context = {} as Context,
) {
  if (isNotDefined(source)) {
    throw createError(errors.sourceWithoutValue, source, mapping);
  }
  if (isTransformMapping(mapping)) {
    return mapping.transform(source, context);
  }
  if (isObjectMapping(mapping)) {
    if (!(source instanceof Object)) {
      throw createError(errors.sourceIsNotObject, source, mapping);
    }
    return mapObject(source, mapping.object, context);
  }
  if (isArrayMapping(mapping)) {
    if (!(source instanceof Array)) {
      throw createError(errors.sourceIsNotArray, source, mapping);
    }
    return mapArray<Source & TypedArrayBase, ArrayValue<Result>, Context>(
      source,
      mapping.array,
      context,
    );
  }
  throw createError(errors.invalidMapping, source, mapping);
}

function isNotDefined<Source>(source: Source) {
  return source === undefined || source === null;
}

function mapObject<Source, Result, Context>(
  source: Source,
  mappings: FieldsMappings<Result, Context>,
  context: Context,
) {
  return Object.keys(mappings).reduce(
    (result, field) => {
      const fieldMapping = mappings[field];
      result[field] = mapField(source, fieldMapping, context);
      return result;
    },
    {} as Result,
  );
}

function mapField<Source, Result, Context>(
  source: Source,
  mapping: FieldMapping<Result, Context>,
  context: Context,
) {
  if (isTransformFunction(mapping)) {
    return mapping(source, context);
  }
  if (mapping === false) {
    return null;
  }
  if (typeof mapping === 'string') {
    return mapNamedField(
      source,
      { name: mapping, transform: value => value },
      context,
    );
  }
  return mapNamedField(source, mapping, context);
}

function mapNamedField<Source, Result, Context>(
  source: Source,
  mapping: NamedFieldMapping<Result, Context>,
  context: Context,
) {
  const [name, optional] = mapping.name.endsWith('?')
    ? [mapping.name.slice(0, -1), true]
    : [mapping.name, false];
  const sourceValue = source[name];
  if (isNotDefined(sourceValue)) {
    if (optional) {
      return null;
    }
    throw createError(errors.requiredFieldWithoutValue, source, mapping);
  }
  return map(sourceValue, mapping, context);
}

function mapArray<
  Source extends TypedArrayBase,
  Result extends TypedArrayBase,
  Context
>(
  source: Source,
  mapping: Mapping<Result[number], Context>,
  context: Context,
): Result {
  return source.map(value => map(value, mapping, context)) as Result;
}

function isTransformMapping<Result, Context>(
  mapping: Mapping<Result, Context>,
): mapping is TransformMapping<Result, Context> {
  return mapping && !!(mapping as TransformMapping<Result, Context>).transform;
}

function isObjectMapping<Result, Context>(
  mapping: Mapping<Result, Context>,
): mapping is ObjectMapping<Result, Context> {
  return mapping && !!(mapping as ObjectMapping<Result, Context>).object;
}

function isArrayMapping<Result, Context>(
  mapping: Mapping<Result, Context>,
): mapping is ArrayMapping<Result, Context> {
  return mapping && !!(mapping as ArrayMapping<Result, Context>).array;
}

function isTransformFunction<Result, Context>(
  mapping: FieldMapping<Result, Context>,
): mapping is TrasformFunction<Result, Context> {
  return typeof mapping === 'function';
}

function createError<Source, Result, Context>(
  message: string,
  source: Source,
  mapping: Mapping<Result, Context>,
) {
  return createAppError(errors.context, message, { source, mapping });
}
