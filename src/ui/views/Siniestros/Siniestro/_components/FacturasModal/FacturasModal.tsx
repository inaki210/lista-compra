import React from 'react';

import { t } from '$core/infraestructure/locale/t';
import { Modal, ModalProps } from '$ui/components/Modal';
import { Section } from '$ui/components/Section';
import { Facturas } from '$ui/views/Siniestros/Siniestro/_components/Facturas';

export { FacturasModal };

interface Props extends ModalProps {}

function FacturasModal({ onClose }: Props) {
  return (
    <Modal onClose={onClose}>
      <Modal.Body>
        <Section>
          <Section.Header>{t('siniestros.facturas.titulo')}</Section.Header>
          <Facturas />
        </Section>
      </Modal.Body>
    </Modal>
  );
}
