import { EventoAgenda } from '$core/domain/siniestros/siniestro';
import { t } from '$core/infraestructure/locale/t';
import { compareDates } from '$core/infraestructure/utils/comparators';
import { TrabajoAgenda } from './useTrabajosAgenda.types';

export { createTrabajo };

function createTrabajo(evento: EventoAgenda): TrabajoAgenda {
  const finalizado = esTrabajoFinalizado(evento);
  const nombre = t(
    finalizado
      ? 'siniestros.agenda.trabajo.tituloFinalizado'
      : 'siniestros.agenda.trabajo.titulo',
    { nombre: evento.nombre },
  );
  const descripcion = t('siniestros.agenda.trabajo.periodo', {
    inicio: evento.fechaInicio,
    fin: evento.fechaFin,
    interpolation: { escapeValue: false },
  });
  return {
    ...evento,
    nombre,
    descripcion,
    finalizado,
  };
}

function esTrabajoFinalizado(evento: EventoAgenda) {
  const hoy = new Date();
  return compareDates(evento.fechaFin, hoy) < 0;
}
