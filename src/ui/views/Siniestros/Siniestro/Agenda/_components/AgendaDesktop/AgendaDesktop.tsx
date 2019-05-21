import React, { useMemo } from 'react';

import { t } from '$core/infraestructure/locale/t';
import { BigCalendar } from '$ui/components/BigCalendar';
import {
  TrabajosAgenda,
} from '$ui/views/Siniestros/Siniestro/_hooks/useTrabajosAgenda';
import {
  AgendaDesktopAviso,
  AgendaDesktopHeader,
  AgendaDesktopWrapper,
} from './AgendaDesktop.styles';

export { AgendaDesktop };

interface Props {
  trabajos: TrabajosAgenda;
}

function AgendaDesktop({ trabajos }: Props) {
  const events = useMemo(createEvents, [trabajos]);

  return (
    <AgendaDesktopWrapper>
      <AgendaDesktopHeader>{t('siniestros.agenda.titulo')}</AgendaDesktopHeader>
      <AgendaDesktopAviso>{t('siniestros.agenda.aviso')}</AgendaDesktopAviso>
      <BigCalendar events={events} />
    </AgendaDesktopWrapper>
  );

  function createEvents() {
    return trabajos.map(trabajo => ({
      title: trabajo.nombre,
      start: trabajo.fechaInicio,
      end: trabajo.fechaFin,
    }));
  }
}
