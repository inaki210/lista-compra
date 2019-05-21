import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import React, { MouseEvent, useEffect, useMemo, useRef } from 'react';

import { VariantsProps } from '$core/infraestructure/utils/VariantsProps';
import { useCreatePortal } from '$ui/hooks/useCreatePortal';
import { ModalSize } from './Modal.models';
import {
  ModalBackdrop,
  ModalBody,
  ModalContainer,
  ModalDialog,
} from './Modal.styles';
import { ModalProps } from './Modal.types';
import { ModalClose } from './ModalClose';

export { Modal };

Modal.Body = ModalBody;

type Props = SizeProps & BaseProps;

export type SizeProps = VariantsProps<{
  _: {};
  large: {};
  small: {};
}>;

interface BaseProps extends ModalProps {
  children: React.ReactNode;
}

function Modal({ onClose, children, ...sizeProps }: Props) {
  const createPortal = useCreatePortal();
  const handleModalDialogClick = useMemo(createHandleModalDialogClick, [
    onClose,
  ]);
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(configureBodyScroll, [modalRef]);

  return createPortal(
    <ModalBackdrop ref={modalRef} onClick={onClose}>
      <ModalContainer>
        <ModalDialog
          modalSize={getModalSizeSize(sizeProps)}
          onClick={handleModalDialogClick}
        >
          {onClose && <ModalClose onClose={onClose} />}
          {children}
        </ModalDialog>
      </ModalContainer>
    </ModalBackdrop>,
  );

  function createHandleModalDialogClick() {
    return onClose || onModalDialogClick;

    function onModalDialogClick(event: MouseEvent) {
      event.stopPropagation();
    }
  }

  function configureBodyScroll() {
    disableBodyScroll(modalRef.current, { reserveScrollBarGap: true });
    return () => {
      enableBodyScroll(modalRef.current);
    };
  }
}

function getModalSizeSize(sizeProps: SizeProps) {
  if (sizeProps.large) {
    return ModalSize.large;
  }
  if (sizeProps.small) {
    return ModalSize.small;
  }
  return ModalSize.default;
}
