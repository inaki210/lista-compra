import React from 'react';

import {
  ModalCloseButton,
  ModalCloseImage,
  ModalCloseWrapper,
} from './ModalClose.styles';

export { ModalClose };

interface Props {
  onClose: () => void;
}

function ModalClose({ onClose }: Props) {
  return (
    <ModalCloseWrapper>
      <ModalCloseButton onClick={onClose}>
        <ModalCloseImage name="close.svg" />
      </ModalCloseButton>
    </ModalCloseWrapper>
  );
}
