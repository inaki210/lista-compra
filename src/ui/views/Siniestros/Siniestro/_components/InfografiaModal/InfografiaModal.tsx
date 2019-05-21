import React from 'react';

import { Modal, ModalProps } from '$ui/components/Modal';
import { Infografia } from '$ui/views/_components/Infografia';

export { InfografiaModal };

interface Props extends ModalProps {
  name: string;
}

function InfografiaModal({ name, onClose }: Props) {
  return (
    <Modal large onClose={onClose}>
      <Infografia name={name} />
    </Modal>
  );
}
