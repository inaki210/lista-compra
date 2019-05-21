import { EventoAgenda } from '$core/domain/siniestros/siniestro';

export interface TrabajosAgenda extends Array<TrabajoAgenda> {}

export interface TrabajoAgenda extends EventoAgenda {
  descripcion: string;
  finalizado: boolean;
}
