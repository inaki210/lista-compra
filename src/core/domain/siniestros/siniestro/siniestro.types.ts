import { TipoSiniestro } from '$core/domain/siniestros';

export interface Siniestro {
  id: string;
  siniestro: number;
  poliza: number;
  riesgo?: string;
  estado?: string;
  urgencia?: boolean;
  fechaSiniestro?: Date;
  descripcionCausa?: string;
  tipoSiniestro?: TipoSiniestro;
  incluyePiezas?: boolean;
  relato?: string;
  personaContacto?: PersonaContacto;
  tramitadores?: Persona[];
  gestor?: Persona;
  mediador?: Persona;
  peritos?: Persona[];
  reparadores?: Persona[];
  infografia?: string;
  agenda?: Agenda;
}

export interface PersonaContacto extends Persona {
  tipo: TipoPersonaContacto;
  telefonoMovil?: string;
  telefonoTrabajo?: string;
}

export enum TipoPersonaContacto {
  persona,
  razonSocial,
}

export interface Persona {
  id: string;
  nombre: string;
  email?: string;
  telefono?: string;
  horarios?: string[];
}

export interface Agenda extends Array<EventoAgenda> {}

export interface EventoAgenda {
  id: string;
  nombre: string;
  fechaInicio: Date;
  fechaFin: Date;
}
