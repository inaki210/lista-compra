import { SiniestroParams } from '$core/domain/siniestros';
import { get } from '$core/infraestructure/apiClient';
import {
  map,
  Mapping,
  parseBoolean,
  parseDate,
  parseNumber,
} from '$core/infraestructure/mapper';
import { Timeline } from './timeline.types';

export { getTimelineApi, marcarLeidoApi };

async function getTimelineApi(params: SiniestroParams) {
  const path = timelineBasePath(params);
  const data = await get({
    path,
    ignoreNotFoundError: {
      value: [],
    },
  });
  return map(data, timelineMappings, params);
}

async function marcarLeidoApi(params: SiniestroParams, timelineEntry: string) {
  const path = timelineBasePath(params);
  await get({
    path: `${path}/${timelineEntry}/leido`,
  });
}

function timelineBasePath(params: SiniestroParams) {
  return `siniestros/${params.ramo}/${params.siniestro}/timeline`;
}

const timelineMappings: Mapping<Timeline, SiniestroParams> = {
  array: {
    object: {
      id: 'id',
      fecha: {
        name: 'fecha',
        transform: parseDate,
      },
      mensaje: 'mensaje',
      etiqueta: {
        name: 'etiqueta',
        transform: parseNumber,
      },
      tipo: 'tipo',
      leido: {
        name: 'leido',
        transform: parseBoolean,
      },
    },
  },
};
