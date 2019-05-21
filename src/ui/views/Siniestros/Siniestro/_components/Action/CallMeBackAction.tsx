import React, { useMemo } from 'react';

import { getOperatorCode } from '$core/domain/callMeBack';
import { ModalProps } from '$ui/components/Modal';
import {
  CallMeBackModal,
} from '$ui/views/Siniestros/Siniestro/_components/CallMeBackModal';
import {
  useSiniestroContext,
} from '$ui/views/Siniestros/Siniestro/_hooks/useSiniestroContext';
import { ActionProps } from './Action.models';
import { ModalAction } from './ModalAction';
import { NoAction } from './NoAction';

export { CallMeBackAction };

function CallMeBackAction({ children }: ActionProps) {
  const { params } = useSiniestroContext();
  const modal = useMemo(createModal, [params]);

  if (!modal) {
    return <NoAction>{children}</NoAction>;
  }
  return <ModalAction modal={modal}>{children}</ModalAction>;

  function createModal() {
    const operatorCode = getOperatorCode(params.ramo);
    if (!operatorCode) {
      return undefined;
    }
    return function({ onClose }: ModalProps) {
      return <CallMeBackModal operatorCode={operatorCode} onClose={onClose} />;
    };
  }
}
