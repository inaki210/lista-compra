import React, { useState } from 'react';

import { CreatePortalContext } from './CreatePortalContext';

export { CreatePortalProvider };

interface Props {
  children: React.ReactNode;
}

function CreatePortalProvider({ children }: Props) {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  return (
    <>
      {container && (
        <CreatePortalContext.Provider value={container}>
          {children}
        </CreatePortalContext.Provider>
      )}
      <div ref={setContainer} />
    </>
  );
}
