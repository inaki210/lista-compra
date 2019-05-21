import { useContext } from 'react';

import { createAppError } from '$core/infraestructure/createAppError';
import { SiniestroContext } from './SiniestroContext';

export { useSiniestroContext };

function useSiniestroContext() {
  const siniestroContext = useContext(SiniestroContext);
  if (!siniestroContext) {
    throw createAppError('useSiniestroContext', 'undefinedContext');
  }
  return siniestroContext;
}
