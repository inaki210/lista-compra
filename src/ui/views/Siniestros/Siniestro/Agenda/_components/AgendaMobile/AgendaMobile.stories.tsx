import React from 'react';

import { trabajos } from '$ui/.storybook/samples/trabajos';
import { storiesOf } from '$ui/.storybook/storiesOf';
import { AgendaMobile } from './AgendaMobile';

storiesOf('AgendaMobile', module).add('default', () => (
  <AgendaMobile trabajos={trabajos} />
));
