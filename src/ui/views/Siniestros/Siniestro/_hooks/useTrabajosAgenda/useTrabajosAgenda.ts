import { useMemo } from 'react';

import { Agenda, EventoAgenda } from '$core/domain/siniestros/siniestro';
import { hasNoItems } from '$core/infraestructure/utils/array';
import {
  compareDates,
  compareStrings,
} from '$core/infraestructure/utils/comparators';
import { createTrabajo } from './createTrabajo';
import { TrabajosAgenda } from './useTrabajosAgenda.types';

export { useTrabajosAgenda };

function useTrabajosAgenda(agenda: Agenda | undefined) {
  const trabajos = useMemo(createTrabajos, [agenda]);

  return trabajos;

  function createTrabajos(): TrabajosAgenda {
    if (hasNoItems(agenda)) {
      return [];
    }
    return agenda.sort(compareEventos).map(createTrabajo);
  }
}

function compareEventos(evento1: EventoAgenda, evento2: EventoAgenda) {
  return (
    compareDates(evento1.fechaInicio, evento2.fechaInicio) ||
    compareDates(evento1.fechaFin, evento2.fechaFin) ||
    compareStrings(evento1.id, evento2.id)
  );
}
