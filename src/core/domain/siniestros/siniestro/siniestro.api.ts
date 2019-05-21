import { SiniestroParams } from '$core/domain/siniestros';
import { get } from '$core/infraestructure/apiClient';
import {
  FieldsMappings,
  map,
  Mapping,
  parseBoolean,
  parseDate,
  parseNumber,
} from '$core/infraestructure/mapper';
import { getInfografiaName } from './getInfografiaName';
import {
  Persona,
  PersonaContacto,
  Siniestro,
  TipoPersonaContacto,
} from './siniestro.types';

export { getSiniestroApi };

async function getSiniestroApi(params: SiniestroParams) {
  const data = await get({
    path: `siniestros/${params.ramo}/${params.siniestro}`,
  });
  const siniestro = map(data, mappings, params);
  if (siniestro.tipoSiniestro) {
    siniestro.infografia = getInfografiaName(params.ramo, siniestro);
  }
  return siniestro;
}

const personaMapping: FieldsMappings<Persona, SiniestroParams> = {
  id: 'id',
  nombre: 'nombre?',
  telefono: 'telefono?',
  email: 'email?',
  horarios: 'horario?',
};

const personaContactoMapping: FieldsMappings<
  PersonaContacto,
  SiniestroParams
> = {
  ...personaMapping,
  nombre: persona => persona.razonsocial || persona.nombre,
  tipo: persona =>
    persona.razonsocial
      ? TipoPersonaContacto.razonSocial
      : TipoPersonaContacto.persona,
  telefonoMovil: 'telefonomovil?',
  telefonoTrabajo: 'telefonotrabajo?',
};

const mappings: Mapping<Siniestro, SiniestroParams> = {
  object: {
    id: 'id',
    siniestro: 'siniestro',
    poliza: 'poliza',
    riesgo: 'riesgo?',
    estado: 'situacion?',
    urgencia: {
      name: 'urgencia?',
      transform: parseBoolean,
    },
    fechaSiniestro: {
      name: 'fecSis?',
      transform: parseDate,
    },
    descripcionCausa: 'desccausa?',
    tipoSiniestro: {
      name: 'codcausa?',
      transform: parseNumber,
    },
    incluyePiezas: {
      name: 'piezas?',
      transform: parseBoolean,
    },
    relato: 'relato?',
    personaContacto: {
      name: 'personacontacto?',
      object: personaContactoMapping,
    },
    tramitadores: {
      name: 'tramitadores?',
      array: {
        object: personaMapping,
      },
    },
    gestor: {
      name: 'gestor?',
      object: personaMapping,
    },
    mediador: {
      name: 'mediador?',
      object: personaMapping,
    },
    peritos: {
      name: 'peritos?',
      array: {
        object: personaMapping,
      },
    },
    reparadores: {
      name: 'reparadores?',
      array: {
        object: personaMapping,
      },
    },
    infografia: false,
    agenda: featureFlags.agenda
      ? {
          name: 'agenda?',
          array: {
            object: {
              id: 'id',
              nombre: value => `${value.gremio} ${value.reparador}`,
              fechaInicio: {
                name: 'fechaInicio',
                transform: parseDate,
              },
              fechaFin: {
                name: 'fechaFin',
                transform: parseDate,
              },
            },
          },
        }
      : false,
  },
};
