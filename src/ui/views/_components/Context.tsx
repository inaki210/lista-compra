import React from 'react';

import { Authentication } from '$ui/components/Authentication';
import { Locale } from '$ui/components/Locale';
import { CreatePortalProvider } from '$ui/hooks/useCreatePortal';
import { GlobalThemeProvider } from '$ui/styles/GlobalThemeProvider';

export { Context };

interface Props {
  children: React.ReactNode;
}

function Context({ children }: Props) {
  return (
    <GlobalThemeProvider>
      <Locale>
        <Authentication>
          <CreatePortalProvider>{children}</CreatePortalProvider>
        </Authentication>
      </Locale>
    </GlobalThemeProvider>
  );
}
