import React, { useMemo } from 'react';

import { Falsy } from '$core/infraestructure/utils/utils.types';
import { ActionProps } from './Action.models';
import { ModalOrStateAction, ModalOrStateProps } from './ModalOrStateAction';
import { NoAction } from './NoAction';

export { OptionalModalOrStateAction };

interface Props<Value> extends ActionProps {
  value: Value | Falsy;
  onCreateProps: (value: Value) => ModalOrStateProps;
}

function OptionalModalOrStateAction<Value>({
  value,
  onCreateProps,
  children,
}: Props<Value>) {
  const data = useMemo(createData, [value, onCreateProps]);
  if (!data) {
    return <NoAction>{children}</NoAction>;
  }
  return <ModalOrStateAction {...data}>{children}</ModalOrStateAction>;

  function createData() {
    return value && onCreateProps(value);
  }
}
