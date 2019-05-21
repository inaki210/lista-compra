import { ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';

import { createAppError } from '$core/infraestructure/createAppError';
import { CreatePortalContext } from './CreatePortalContext';

export { useCreatePortal };

function useCreatePortal() {
  const container = useContext(CreatePortalContext);
  const [element] = useState(() => document.createElement('div'));
  useEffect(loadElement, [container, element]);
  const createPortal = useMemo(createCreatePortal, [element]);

  if (!container) {
    throw createAppError('useCreatePortal', 'undefinedContext');
  }
  return createPortal;

  function loadElement() {
    if (!container) {
      return;
    }
    container.appendChild(element);
    return () => {
      container.removeChild(element);
    };
  }

  function createCreatePortal() {
    return (children: ReactNode) => ReactDOM.createPortal(children, element);
  }
}
