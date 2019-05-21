import React from 'react';

import { Modal, ModalProps } from '$ui/components/Modal';
import { MotivosRehuse } from '$ui/views/_components/MotivosRehuse';

export { MotivosRehuseModal };

interface Props extends ModalProps {
  name: string;
}

function MotivosRehuseModal({ name, onClose }: Props) {
  return (
    <Modal onClose={onClose}>
      <MotivosRehuse name={name} />
    </Modal>
  );
}
