import React from 'react';

import {
  FacturasModal,
} from '$ui/views/Siniestros/Siniestro/_components/FacturasModal';
import { ActionProps } from './Action.models';
import { ModalAction } from './ModalAction';

export { FacturasAction };

function FacturasAction({ children }: ActionProps) {
  return <ModalAction modal={FacturasModal}>{children}</ModalAction>;
}
