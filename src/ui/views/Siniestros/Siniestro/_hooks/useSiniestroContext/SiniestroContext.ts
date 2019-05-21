import { createContext } from 'react';

import { SiniestroContextValue } from './SiniestroContext.types';

export { SiniestroContext };

const SiniestroContext = createContext<SiniestroContextValue | undefined>(
  undefined,
);
