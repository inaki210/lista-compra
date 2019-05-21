import { createResource } from '$core/domain/createResource';
import { getMotivosRehuse } from './motivosRehuses.api';

export { motivosRehuseResource, getMotivosRehuseName };

const motivosRehuseResource = createResource(getMotivosRehuse);

function getMotivosRehuseName(codigo: string) {
  switch (codigo.toLowerCase()) {
    case 'fs0601':
      return 'condensaciones';
    case 'fs0602':
      return 'fitraciones-cubierta';
    case 'fs0603':
      return 'filtraciones-fachada';
    case 'fs0604':
      return 'filtraciones-sellado';
    case 'fs0605':
      return 'goteo';
    default:
      return undefined;
  }
}
