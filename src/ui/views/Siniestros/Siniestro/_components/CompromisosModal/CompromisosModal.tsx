import React from 'react';

import { t } from '$core/infraestructure/locale/t';
import { MediaListModal } from '$ui/components/MediaListModal';
import { ModalProps } from '$ui/components/Modal';

export { CompromisosModal };

interface Props extends ModalProps {}

function CompromisosModal({ onClose }: Props) {
  return (
    <MediaListModal
      header={t('siniestros.compromisos.titulo')}
      onClose={onClose}
    >
      <MediaListModal.Item>
        <MediaListModal.Item.Image name="plazo.svg" />
        <MediaListModal.Item.Content>
          {t('siniestros.compromisos.plazo')}
        </MediaListModal.Item.Content>
      </MediaListModal.Item>
      <MediaListModal.Item>
        <MediaListModal.Item.Image name="foto.svg" />
        <MediaListModal.Item.Content>
          {t('siniestros.compromisos.foto')}
        </MediaListModal.Item.Content>
      </MediaListModal.Item>
      <MediaListModal.Item>
        <MediaListModal.Item.Image name="contactos.svg" />
        <MediaListModal.Item.Content>
          {t('siniestros.compromisos.contactos')}
        </MediaListModal.Item.Content>
      </MediaListModal.Item>
      <MediaListModal.Item>
        <MediaListModal.Item.Image name="avance.svg" />
        <MediaListModal.Item.Content>
          {t('siniestros.compromisos.avance')}
        </MediaListModal.Item.Content>
      </MediaListModal.Item>
    </MediaListModal>
  );
}
