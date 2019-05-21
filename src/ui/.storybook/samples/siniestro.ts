import { TipoSiniestro } from '$core/domain/siniestros';
import {
  Siniestro,
  TipoPersonaContacto,
} from '$core/domain/siniestros/siniestro';
import { agenda } from './agenda';

export { siniestro };

const siniestro: Siniestro = {
  id: 'id35278',
  siniestro: 35278,
  poliza: 81841056124,
  riesgo: 'Dirección',
  estado: 'abierto',
  fechaSiniestro: new Date(2018, 6, 10),
  descripcionCausa: 'Daños por agua',
  tipoSiniestro: TipoSiniestro.dañosPorAguaHogar,
  infografia: 'hogar-agua',
  relato: `
    Daños por agua fuga de terceros. Daños por fuga no reparada en filtración de
    agua de lluvia a través de la fachada.
  `,
  personaContacto: {
    id: '1',
    tipo: TipoPersonaContacto.persona,
    nombre: 'Ana Agirretxu',
    email: 'usuario@dominio.com',
    telefono: '944112233',
    telefonoMovil: '666777888',
    telefonoTrabajo: '944223344',
  },
  tramitadores: [
    {
      id: '2',
      nombre: 'Ana Agirretxu',
      telefono: '944546789',
      email: 'siniestros@lagunaro.es',
    },
  ],
  gestor: {
    id: '2',
    nombre: 'Ana Agirretxu',
    telefono: '944546789',
    email: 'siniestros@lagunaro.es',
  },
  mediador: {
    id: '3',
    nombre: 'Luis López',
    telefono: '944546789',
    email: 'siniestros@lagunaro.es',
  },
  peritos: [
    {
      id: '3',
      nombre: 'Luis López',
      telefono: '944546789',
      email: 'siniestros@lagunaro.es',
    },
  ],
  reparadores: [
    {
      id: '2',
      nombre: 'Ana Agirretxu',
      telefono: '944546789',
      email: 'siniestros@lagunaro.es',
      horarios: ['Lunes a Jueves de 8:00 a 20:00', 'Viernes de 8:00 a 15:00'],
    },
    {
      id: '3',
      nombre: 'Luis López',
      telefono: '944546789',
      email: 'siniestros@lagunaro.es',
    },
  ],
  agenda: featureFlags.agenda ? agenda : undefined,
};
