import React from 'react';

import { MediaList } from '$ui/components/MediaList';
import { Modal, ModalProps } from '$ui/components/Modal';
import { Section } from '$ui/components/Section';
import { Header, ModalBody } from './MediaListModal.styles';

export { MediaListModal };

interface Props extends ModalProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

function MediaListModal({ header, children, onClose }: Props) {
  return (
    <Modal onClose={onClose}>
      <ModalBody>
        <Section>
          <Header>{header}</Header>
          <MediaList>{children}</MediaList>
        </Section>
      </ModalBody>
    </Modal>
  );
}

MediaListModal.Item = MediaList.Item;
