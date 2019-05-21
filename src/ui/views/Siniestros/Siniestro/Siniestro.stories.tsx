import React from 'react';

import { Ramo } from '$core/domain/siniestros';
import { storiesOf } from '$ui/.storybook/storiesOf';
import { Siniestro } from './Siniestro';

storiesOf('Siniestro', module).add('default', () => (
  <Siniestro siniestro={15726} ramo={Ramo.hogar} />
));
