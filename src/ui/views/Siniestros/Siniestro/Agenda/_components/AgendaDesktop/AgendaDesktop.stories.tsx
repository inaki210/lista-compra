import React from 'react';

import { trabajos } from '$ui/.storybook/samples/trabajos';
import { storiesOf } from '$ui/.storybook/storiesOf';
import { AgendaDesktop } from './AgendaDesktop';

storiesOf('AgendaDesktop', module).add('default', () => (
  <AgendaDesktop trabajos={trabajos} />
));
