import React from 'react';

import { ProcesoItem } from '$core/domain/infografias';
import { createAppError } from '$core/infraestructure/createAppError';
import { Html } from '$ui/components/Html';
import {
  InfografiaBullet,
  InfografiaFaq,
  InfografiaFaqQuestion,
  InfografiaFaqResponse,
  InfografiaMensaje,
  InfografiaMensajeContent,
  InfografiaMensajeIcon,
  InfografiaSeccion,
} from './InfografiaItem.styles';

export { InfografiaItem };

interface Props {
  item: ProcesoItem;
}

function InfografiaItem({ item }: Props) {
  switch (item.tipo) {
    case 'seccion':
      return <InfografiaSeccion>{item.titulo}</InfografiaSeccion>;
    case 'mensaje':
      return (
        <>
          <InfografiaBullet />
          <InfografiaMensaje>
            <InfografiaMensajeIcon name={item.imagen} />
            <InfografiaMensajeContent>
              <Html html={item.contenido} />
            </InfografiaMensajeContent>
          </InfografiaMensaje>
        </>
      );
    case 'faq':
      return (
        <InfografiaFaq>
          <InfografiaFaqQuestion>{item.pregunta}</InfografiaFaqQuestion>
          <InfografiaFaqResponse>{item.respuesta}</InfografiaFaqResponse>
        </InfografiaFaq>
      );
    default:
      throw createAppError('Infografia', 'unkown item type', { item });
  }
}
