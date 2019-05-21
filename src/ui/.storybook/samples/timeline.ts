import {
  EntryType,
  Etiqueta,
  Timeline,
} from '$core/domain/siniestros/timeline';

export { timeline };

const timeline: Timeline = [
  {
    id: '16',
    fecha: new Date(2018, 6, 26, 10, 10),
    mensaje: `
      Consulte la
      <action name="agendaReparador" param-codigo="FS0601">
        agenda de los reparadores
      </action>
    `,
    etiqueta: Etiqueta.gestion,
    tipo: EntryType.default,
    leido: false,
  },
  {
    id: '15',
    fecha: new Date(2018, 6, 25, 9, 54),
    mensaje: `
      Lea la
      <action name="motivosRehuse" param-codigo="FS0601">
        causa del rehuse
      </action>
    `,
    etiqueta: Etiqueta.gestion,
    tipo: EntryType.error,
    leido: false,
  },
  {
    id: '14',
    fecha: new Date(2018, 6, 22, 10, 36),
    mensaje: `
      Lea la <action name="infografia">guía util</action> de este siniestro y en
      caso de duda <action name="callMe">te llamamos</action>
    `,
    etiqueta: Etiqueta.gestion,
    tipo: EntryType.default,
    leido: false,
  },
  {
    id: '13',
    fecha: new Date(2018, 6, 20, 12),
    mensaje: `
      El perito Javier López <a href="tel:66665555">66665555</a> e-mail se
      pondrá en contacto contigo en menos de 8 horas para concertar una cita
    `,
    etiqueta: Etiqueta.peritacion,
    tipo: EntryType.default,
    leido: false,
  },
  {
    id: '12',
    fecha: new Date(2018, 6, 20, 11),
    mensaje: `
      El perito Javier López <a href="tel:66665555">66665555</a> e-mail se
      pondrá en contacto contigo en menos de 8 horas para concertar una cita
    `,
    etiqueta: Etiqueta.peritacion,
    tipo: EntryType.default,
    leido: false,
  },
  {
    id: '11',
    fecha: new Date(2018, 6, 18, 12),
    mensaje: 'Puedes consultar la agenda de gremios',
    etiqueta: Etiqueta.gestion,
    tipo: EntryType.default,
    leido: true,
  },
  {
    id: '10',
    fecha: new Date(2018, 6, 18, 11),
    mensaje: `
      El reparador Indere <a href="tel:66665555">66665555</a> ha intentado
      contactar contigo pero no ha sido posible. Seguirá intentandolo.
    `,
    etiqueta: Etiqueta.reparacion,
    tipo: EntryType.warning,
    leido: true,
  },
  {
    id: '9',
    fecha: new Date(2018, 6, 14, 12),
    mensaje: `
      El perito Javier López <a href="tel:66665555">66665555</a> e-mail se
      pondrá en contacto contigo en menos de 8 horas para concertar una cita
    `,
    etiqueta: Etiqueta.peritacion,
    tipo: EntryType.default,
    leido: true,
  },
  {
    id: '8',
    fecha: new Date(2018, 6, 14, 11),
    mensaje: `
      Puedes <action name="facturas">consultar aquí la factura</action> que
      hemos abonado por los servicios de reparación. Cuentas con un año de
      garantía.
    `,
    etiqueta: Etiqueta.gestion,
    tipo: EntryType.success,
    leido: true,
  },
  {
    id: '7',
    fecha: new Date(2018, 6, 13),
    mensaje: `
      El perito Javier López <a href="tel:66665555">66665555</a> e-mail se
      pondrá en contacto contigo en menos de 8 horas para concertar una cita
    `,
    etiqueta: Etiqueta.peritacion,
    tipo: EntryType.default,
    leido: true,
  },
  {
    id: '6',
    fecha: new Date(2018, 6, 12, 12),
    mensaje: `
      En un plazo máximo de 3 horas el reparador Indere
      <a href="tel:666333333">666 333 333</a>, se pondrá en contacto contigo
    `,
    etiqueta: Etiqueta.reparacion,
    tipo: EntryType.success,
    leido: true,
  },
  {
    id: '5',
    fecha: new Date(2018, 6, 12, 11),
    mensaje: `
      El perito Javier López <a href="tel:66665555">66665555</a> e-mail se
      pondrá en contacto contigo en menos de 8 horas para concertar una cita
    `,
    etiqueta: Etiqueta.reparacion,
    tipo: EntryType.default,
    leido: true,
  },
  {
    id: '4',
    fecha: new Date(2018, 6, 12, 10),
    mensaje: `
      El perito Javier López <a href="tel:66665555">66665555</a> e-mail se
      pondrá en contacto contigo en menos de 8 horas para concertar una cita
    `,
    etiqueta: Etiqueta.reparacion,
    tipo: EntryType.default,
    leido: true,
  },
  {
    id: '3',
    fecha: new Date(2018, 6, 11),
    mensaje: `
      Para continuar con la tramitación de la incidencia, necesitamos que nos
      envíes cierta documentación. Entra en www.xxx.es o llámanos al
      <a href="tel:944947428">944947428</a>
    `,
    etiqueta: Etiqueta.gestion,
    tipo: EntryType.error,
    leido: true,
  },
  {
    id: '2',
    fecha: new Date(2018, 6, 9),
    mensaje: `
      El perito Javier López <a href="tel:66665555">66665555</a> e-mail se
      pondrá en contacto contigo en menos de 8 horas para concertar una cita
    `,
    etiqueta: Etiqueta.peritacion,
    tipo: EntryType.default,
    leido: true,
  },
  {
    id: '1',
    fecha: new Date(2018, 6, 8),
    mensaje: `
      Hola! Hemos registrado la incidencia (ref.: 8-555555) y estamos trabajando
      para su solución. Te mantendremos informado.
    `,
    etiqueta: Etiqueta.gestion,
    tipo: EntryType.success,
    leido: true,
  },
];
