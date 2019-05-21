import React, { useMemo } from 'react';

import { t } from '$core/infraestructure/locale/t';
import { compareDates } from '$core/infraestructure/utils/comparators';
import { addDays } from '$core/infraestructure/utils/date';
import { Trabajo } from '$ui/views/Siniestros/Siniestro/_components/Trabajo';
import {
  TrabajosAgenda,
} from '$ui/views/Siniestros/Siniestro/_hooks/useTrabajosAgenda';
import {
  AgendaMobileAviso,
  AgendaMobileCalendar,
  AgendaMobileHeader,
  AgendaMobileTrabajo,
  AgendaMobileTrabajos,
  AgendaMobileWrapper,
} from './AgendaMobile.styles';

export { AgendaMobile };

interface Props {
  trabajos: TrabajosAgenda;
}

function AgendaMobile({ trabajos }: Props) {
  const selectedDates = useMemo(createSelectedDates, [trabajos]);

  return (
    <AgendaMobileWrapper>
      <AgendaMobileHeader>{t('siniestros.agenda.titulo')}</AgendaMobileHeader>
      <AgendaMobileAviso>{t('siniestros.agenda.aviso')}</AgendaMobileAviso>
      <AgendaMobileCalendar selectedDates={selectedDates} />
      {trabajos && (
        <>
          <AgendaMobileTrabajos>
            {trabajos.map(trabajo => (
              <AgendaMobileTrabajo key={trabajo.id}>
                <Trabajo
                  nombre={trabajo.nombre}
                  descripcion={trabajo.descripcion}
                  finalizado={trabajo.finalizado}
                />
              </AgendaMobileTrabajo>
            ))}
          </AgendaMobileTrabajos>
        </>
      )}
    </AgendaMobileWrapper>
  );

  function createSelectedDates() {
    const dates = new Set<Date>();
    trabajos.forEach(trabajo =>
      loadDates(dates, trabajo.fechaInicio, trabajo.fechaFin),
    );
    return Array.from(dates);
  }
}

function loadDates(dates: Set<Date>, fechaInicio: Date, fechaFin: Date) {
  let fecha = fechaInicio;
  while (compareDates(fecha, fechaFin) <= 0) {
    dates.add(fecha);
    fecha = addDays(fecha, 1);
  }
}
