import React, { useMemo } from 'react';

import { t } from '$core/infraestructure/locale/t';
import { hasItems } from '$core/infraestructure/utils/array';
import { compareDates } from '$core/infraestructure/utils/comparators';
import { HelpPopUp } from '$ui/components/HelpPopUp';
import { useGoToState } from '$ui/hooks/useGoToState';
import {
  useSiniestroContext,
} from '$ui/views/Siniestros/Siniestro/_hooks/useSiniestroContext';
import {
  useTrabajosAgenda,
} from '$ui/views/Siniestros/Siniestro/_hooks/useTrabajosAgenda';
import {
  AgendaTitulo,
  AgendaTrabajo,
  AgendaTrabajos,
  AgendaWrapper,
} from './Agenda.styles';

export { Agenda };

function Agenda() {
  const { params, siniestro } = useSiniestroContext();
  const trabajos = useTrabajosAgenda(siniestro.agenda);
  const trabajosPendientes = useMemo(createTrabajosPendientes, [trabajos]);
  const goToAgenda = useGoToState('siniestro.agenda', params);

  return (
    <>
      {hasItems(trabajosPendientes) && (
        <AgendaWrapper onClick={goToAgenda}>
          <AgendaTitulo>
            {t('siniestros.agenda.titulo')}{' '}
            <HelpPopUp>{t('siniestros.agenda.aviso')}</HelpPopUp>
          </AgendaTitulo>
          <AgendaTrabajos>
            {trabajosPendientes.map(trabajo => (
              <AgendaTrabajo
                key={trabajo.id}
                nombre={trabajo.nombre}
                descripcion={trabajo.descripcion}
              />
            ))}
          </AgendaTrabajos>
        </AgendaWrapper>
      )}
    </>
  );

  function createTrabajosPendientes() {
    if (!hasItems(trabajos)) {
      return [];
    }
    const hoy = new Date();
    return trabajos
      .filter(trabajo => compareDates(trabajo.fechaFin, hoy) >= 0)
      .filter((_, index) => index < 2);
  }
}
