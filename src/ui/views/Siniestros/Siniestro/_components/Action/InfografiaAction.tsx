import React from 'react';

import { ModalProps } from '$ui/components/Modal';
import {
  InfografiaModal,
} from '$ui/views/Siniestros/Siniestro/_components/InfografiaModal';
import {
  useSiniestroContext,
} from '$ui/views/Siniestros/Siniestro/_hooks/useSiniestroContext';
import { ActionProps } from './Action.models';
import { ModalOrStateProps } from './ModalOrStateAction';
import { OptionalModalOrStateAction } from './OptionalModalOrStateAction';

export { InfografiaAction };

function InfografiaAction({ children }: ActionProps) {
  const { siniestro } = useSiniestroContext();
  return (
    <OptionalModalOrStateAction
      value={siniestro.infografia}
      onCreateProps={onCreateProps}
    >
      {children}
    </OptionalModalOrStateAction>
  );
}

function onCreateProps(name: string): ModalOrStateProps {
  return {
    modal: function({ onClose }: ModalProps) {
      return <InfografiaModal name={name} onClose={onClose} />;
    },
    stateName: 'infografia',
    stateParams: { name },
  };
}
