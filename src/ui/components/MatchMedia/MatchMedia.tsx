import React from 'react';

import { createAppError } from '$core/infraestructure/createAppError';
import { VariantsProps } from '$core/infraestructure/utils/VariantsProps';
import { MatchMediaKey, useMatchMedia } from '$ui/hooks/useMatchMedia';
import { matchMedia } from '$ui/styles/utils/media';

export { MatchMedia };

type Props = MediaProps & BaseProps;

export type MediaProps = VariantsProps<
  { [matchMediaKey in MatchMediaKey]: {} }
>;

interface BaseProps {
  children: React.ReactNode;
}

function MatchMedia({ children, ...mediaProps }: Props) {
  const matchMediaKey = getMatchMediaKey(mediaProps);
  const matches = useMatchMedia(matchMediaKey);
  return <>{matches && children}</>;
}

function getMatchMediaKey(mediaProps: MediaProps) {
  const currentMatchMediaKey = Object.keys(matchMedia)
    .map(matchMediaKey => matchMediaKey as MatchMediaKey)
    .find(matchMediaKey => !!mediaProps[matchMediaKey]);
  if (!currentMatchMediaKey) {
    throw createAppError('MatchMedia', 'media query inválida', matchMedia);
  }
  return currentMatchMediaKey;
}
