import React from 'react';

import { hasNoItems } from '$core/infraestructure/utils/array';
import { useGoToState } from '$ui/hooks/useGoToState';
import {
  useSiniestroContext,
} from '$ui/views/Siniestros/Siniestro/_hooks/useSiniestroContext';
import { ActionProps } from './Action.models';
import { NoAction } from './NoAction';

export { AgendaReparadorAction };

function AgendaReparadorAction({ children }: ActionProps) {
  const { params, siniestro } = useSiniestroContext();
  const goToState = useGoToState('siniestro.agenda', params);

  if (!featureFlags.agenda || hasNoItems(siniestro.agenda)) {
    return <NoAction>{children}</NoAction>;
  }
  return <>{children(goToState)}</>;
}
