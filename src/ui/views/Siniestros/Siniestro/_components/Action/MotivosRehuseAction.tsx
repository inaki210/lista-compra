import React, { useMemo } from 'react';

import { getMotivosRehuseName } from '$core/domain/motivosRehuses';
import { ModalProps } from '$ui/components/Modal';
import {
  MotivosRehuseModal,
} from '$ui/views/Siniestros/Siniestro/_components/MotivosRehuseModal';
import { ActionProps } from './Action.models';
import { ModalOrStateProps } from './ModalOrStateAction';
import { OptionalModalOrStateAction } from './OptionalModalOrStateAction';

export { MotivosRehuseAction };

interface Props extends ActionProps {
  codigo: string | undefined;
}

function MotivosRehuseAction({ codigo, children }: Props) {
  const name = useMemo(getName, [codigo]);
  return (
    <OptionalModalOrStateAction value={name} onCreateProps={onCreateProps}>
      {children}
    </OptionalModalOrStateAction>
  );

  function getName() {
    return codigo && getMotivosRehuseName(codigo);
  }
}

function onCreateProps(name: string): ModalOrStateProps {
  return {
    modal: function({ onClose }: ModalProps) {
      return <MotivosRehuseModal name={name} onClose={onClose} />;
    },
    stateName: 'motivosRehuse',
    stateParams: { name },
  };
}
