import { createContext } from 'react';

export { CreatePortalContext };

const CreatePortalContext = createContext<HTMLElement | undefined>(undefined);
