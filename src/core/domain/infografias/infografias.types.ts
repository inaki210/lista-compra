export interface Infografia {
  titulo: string;
  descripcion: string;
  proceso: ProcesoItem[];
}

export type ProcesoItem = Seccion | Mensaje | Faq;

interface Seccion {
  tipo: 'seccion';
  titulo: string;
}

interface Mensaje {
  tipo: 'mensaje';
  imagen: string;
  contenido: string;
}

interface Faq {
  tipo: 'faq';
  pregunta: string;
  respuesta: string;
}
