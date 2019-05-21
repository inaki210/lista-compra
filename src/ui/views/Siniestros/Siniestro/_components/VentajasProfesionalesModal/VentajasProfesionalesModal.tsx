import React from 'react';

import { t } from '$core/infraestructure/locale/t';
import { MediaListModal } from '$ui/components/MediaListModal';
import { ModalProps } from '$ui/components/Modal';

export { VentajasProfesionalesModal };
interface Props extends ModalProps {}

function VentajasProfesionalesModal({ onClose }: Props) {
  return (
    <MediaListModal header={t('siniestros.ventajas.titulo')} onClose={onClose}>
      <MediaListModal.Item>
        <MediaListModal.Item.Image name="seleccionado.svg" />
        <MediaListModal.Item.Content>
          {t('siniestros.ventajas.seleccionado')}
        </MediaListModal.Item.Content>
      </MediaListModal.Item>
      <MediaListModal.Item>
        <MediaListModal.Item.Image name="profesionales.svg" />
        <MediaListModal.Item.Content>
          {t('siniestros.ventajas.profesionales')}
        </MediaListModal.Item.Content>
      </MediaListModal.Item>
      <MediaListModal.Item>
        <MediaListModal.Item.Image name="info.svg" />
        <MediaListModal.Item.Content>
          {t('siniestros.ventajas.informacion')}
        </MediaListModal.Item.Content>
      </MediaListModal.Item>
      <MediaListModal.Item>
        <MediaListModal.Item.Image name="documento.svg" />
        <MediaListModal.Item.Content>
          {t('siniestros.ventajas.documentos')}
        </MediaListModal.Item.Content>
      </MediaListModal.Item>
      <MediaListModal.Item>
        <MediaListModal.Item.Image name="contacto.svg" />
        <MediaListModal.Item.Content>
          {t('siniestros.ventajas.contacto')}
        </MediaListModal.Item.Content>
      </MediaListModal.Item>
      <MediaListModal.Item>
        <MediaListModal.Item.Image name="presupuesto.svg" />
        <MediaListModal.Item.Content>
          {t('siniestros.ventajas.presupuesto')}
        </MediaListModal.Item.Content>
      </MediaListModal.Item>
      <MediaListModal.Item>
        <MediaListModal.Item.Image name="garantia.svg" />
        <MediaListModal.Item.Content>
          {t('siniestros.ventajas.garantia')}
        </MediaListModal.Item.Content>
      </MediaListModal.Item>
    </MediaListModal>
  );
}
