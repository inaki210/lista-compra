import React, { useCallback, useState } from 'react';

import { ModalProps } from '$ui/components/Modal';
import { ActionProps } from './Action.models';

export { ModalAction };

interface Props extends ActionProps {
  modal: React.ComponentType<ModalProps>;
}

function ModalAction({ children, modal: Modal }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const handleMostrarModal = useCallback(onMostrarModal, [setModalVisible]);
  const handleOcultarModal = useCallback(onOcultarModal, [setModalVisible]);
  return (
    <>
      {children(handleMostrarModal)}
      {modalVisible && <Modal onClose={handleOcultarModal} />}
    </>
  );

  function onMostrarModal() {
    setModalVisible(true);
  }

  function onOcultarModal() {
    setModalVisible(false);
  }
}
