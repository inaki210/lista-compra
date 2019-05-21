import React, { ReactNode } from 'react';

import { SiniestroContext } from './SiniestroContext';
import { SiniestroContextValue } from './SiniestroContext.types';

export { SiniestroContextProvider };

interface Props {
  value: SiniestroContextValue;
  children: ReactNode;
}

function SiniestroContextProvider({ value, children }: Props) {
  return (
    <SiniestroContext.Provider value={value}>
      {children}
    </SiniestroContext.Provider>
  );
}
