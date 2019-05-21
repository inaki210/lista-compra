import { createResource } from '$core/domain/createResource';
import { getInfografia } from './infografia.api';

export { infografiaResource };

const infografiaResource = createResource(getInfografia);
