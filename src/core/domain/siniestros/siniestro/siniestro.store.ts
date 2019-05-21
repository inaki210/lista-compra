import { createResource } from '$core/domain/createResource';
import { getSiniestroApi } from './siniestro.api';

export { siniestroResource };

const siniestroResource = createResource(getSiniestroApi);
