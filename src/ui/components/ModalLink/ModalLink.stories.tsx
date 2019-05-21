import React from 'react';

import { storiesOf } from '$ui/.storybook/storiesOf';
import { Modal, ModalProps } from '$ui/components/Modal';
import { ModalLink } from './ModalLink';

storiesOf('ModalLink', module).add('default', () => (
  <ModalLink modal={ModalEjemplo}>enlace a la modal</ModalLink>
));

function ModalEjemplo({ onClose }: ModalProps) {
  return (
    <Modal onClose={onClose}>
      <Modal.Body>
        <p>contenido modal</p>
      </Modal.Body>
    </Modal>
  );
}
