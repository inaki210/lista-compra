import { ReactNode } from 'react';

import { StateParams } from '$core/infraestructure/navigator';
import { StateName } from '$ui/navigator';

export interface RouteLinkProps {
  className?: string;
  state: StateName;
  params?: StateParams;
  children: ReactNode;
}
