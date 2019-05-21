import { select } from '@storybook/addon-knobs';
import React from 'react';

import { storiesOf } from '$ui/.storybook/storiesOf';
import { matchMedia } from '$ui/styles/utils/media';
import { MatchMedia, MediaProps } from './MatchMedia';

storiesOf('MatchMedia', module).add('default', () => (
  <MatchMedia {...getMediaProps()}>contenido</MatchMedia>
));

function getMediaProps() {
  const keys = Object.keys(matchMedia);
  const media = select('Media query', keys, keys[0]);
  return { [media]: true } as MediaProps;
}
