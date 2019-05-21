import { compareDates } from '$core/infraestructure/utils/comparators';
import { agenda } from './agenda';

export { trabajos };

const trabajos = agenda.map(evento => ({
  ...evento,
  descripcion: 'descripción',
  finalizado: compareDates(evento.fechaFin, new Date()) < 0,
}));
