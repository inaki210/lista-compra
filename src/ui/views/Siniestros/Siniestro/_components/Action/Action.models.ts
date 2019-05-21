import { ReactNode } from 'react';

export interface ActionProps {
  children: (handleAction?: () => void) => ReactNode;
}

export interface ActionParams {
  [name: string]: string | undefined;
}
