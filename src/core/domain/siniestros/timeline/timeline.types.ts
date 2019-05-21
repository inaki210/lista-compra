export interface Timeline extends Array<TimelineEntry> {}

export interface TimelineEntry {
  id: string;
  fecha: Date;
  mensaje: string;
  etiqueta: Etiqueta;
  tipo: EntryType;
  leido: boolean;
}

export enum EntryType {
  default = 'default',
  success = 'success',
  warning = 'warning',
  error = 'error',
}

export enum Etiqueta {
  gestion = 1,
  peritacion = 2,
  reparacion = 3,
}
