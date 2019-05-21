import React, { useCallback } from 'react';

import { t } from '$core/infraestructure/locale/t';
import { Html, ReplaceProps } from '$ui/components/Html';
import { Link } from '$ui/components/Link';
import { Paragraph } from '$ui/components/Paragraph';
import {
  CallMeBackAction,
} from '$ui/views/Siniestros/Siniestro/_components/Action/CallMeBackAction';
import {
  CallMeBackLayout,
} from '$ui/views/Siniestros/Siniestro/_components/CallMeBackLayout';
import { TeLlamamosHorario, TeLlamamosWrapper } from './TeLlamamos.styles';

export { TeLlamamos };

function TeLlamamos() {
  return (
    <CallMeBackAction>
      {handleAction =>
        handleAction && <TeLlamamosAction onClick={handleAction} />
      }
    </CallMeBackAction>
  );
}

interface ActionProps {
  onClick: () => void;
}

function TeLlamamosAction({ onClick }: ActionProps) {
  const handleReplace = useCallback(onReplace, [onClick]);
  return (
    <TeLlamamosWrapper>
      <CallMeBackLayout title={t('siniestros.callMeBack.banner.titulo')}>
        <Paragraph>
          <Html
            html={t('siniestros.callMeBack.banner.descripcion')}
            onReplace={handleReplace}
          />
        </Paragraph>
        <TeLlamamosHorario>
          {t('siniestros.callMeBack.banner.horario')}
        </TeLlamamosHorario>
      </CallMeBackLayout>
    </TeLlamamosWrapper>
  );

  function onReplace({ tag, children }: ReplaceProps) {
    switch (tag) {
      case 'a':
        return <Link onClick={onClick}>{children()}</Link>;
      default:
        return false;
    }
  }
}
