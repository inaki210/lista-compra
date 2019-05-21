import React, { useCallback, useState } from 'react';

import { Siniestro } from '$core/domain/siniestros/siniestro';
import { format } from '$core/infraestructure/locale/format';
import { t } from '$core/infraestructure/locale/t';
import { MatchMedia } from '$ui/components/MatchMedia';
import { Modal } from '$ui/components/Modal';
import { useGoToState } from '$ui/hooks/useGoToState';
import {
  InfografiaAction,
} from '$ui/views/Siniestros/Siniestro/_components/Action/InfografiaAction';
import {
  SiniestroAside,
} from '$ui/views/Siniestros/Siniestro/_components/SiniestroAside';
import { useSiniestroContext } from '../../../_hooks/useSiniestroContext';
import {
  SiniestroContentStateAction,
  SiniestroContentStateActions,
  SiniestroContentStateEstado,
  SiniestroContentStateItem,
  SiniestroContentStateLabel,
  SiniestroContentStateValue,
  SiniestroContentStateWrapper,
} from './SiniestroContentState.styles';

export { SiniestroContentState };

interface Props {
  siniestro: Siniestro;
}

function SiniestroContentState({ siniestro }: Props) {
  const [mostrarContactos, setMostrarContactos] = useState(false);
  const handleMostrarContactos = useCallback(onMostrarContactos, [
    setMostrarContactos,
  ]);
  const handleOcultarContactos = useCallback(onOcultarContactos, [
    setMostrarContactos,
  ]);
  const { params } = useSiniestroContext();
  const goToAgenda = useGoToState('siniestro.agenda', params);

  return (
    <SiniestroContentStateWrapper>
      {siniestro.estado && (
        <SiniestroContentStateItem>
          <SiniestroContentStateLabel>
            {t('siniestros.estado')}:
          </SiniestroContentStateLabel>
          <SiniestroContentStateEstado>
            {siniestro.estado}
          </SiniestroContentStateEstado>
        </SiniestroContentStateItem>
      )}
      {siniestro.fechaSiniestro && (
        <SiniestroContentStateItem>
          <SiniestroContentStateLabel>
            {t('siniestros.fechaInicio')}:
          </SiniestroContentStateLabel>
          <SiniestroContentStateValue>
            {format(siniestro.fechaSiniestro)}
          </SiniestroContentStateValue>
        </SiniestroContentStateItem>
      )}
      <SiniestroContentStateActions>
        <MatchMedia onlyMobileAndTablet>
          <SiniestroContentStateAction
            icon="agenda.svg"
            name={t('siniestros.actions.agenda')}
            onClick={goToAgenda}
          />
          <SiniestroContentStateAction
            icon="contactos-action.svg"
            name={t('siniestros.actions.contactos')}
            onClick={handleMostrarContactos}
          />
          {mostrarContactos && (
            <Modal onClose={handleOcultarContactos}>
              <SiniestroAside />
            </Modal>
          )}
        </MatchMedia>
        <InfografiaAction>
          {handleAction =>
            handleAction && (
              <SiniestroContentStateAction
                icon="info-action.svg"
                name={t('siniestros.actions.ayuda')}
                onClick={handleAction}
              />
            )
          }
        </InfografiaAction>
      </SiniestroContentStateActions>
    </SiniestroContentStateWrapper>
  );

  function onMostrarContactos() {
    setMostrarContactos(true);
  }

  function onOcultarContactos() {
    setMostrarContactos(false);
  }
}
