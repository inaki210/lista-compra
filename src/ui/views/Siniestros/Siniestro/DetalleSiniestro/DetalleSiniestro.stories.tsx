import React from 'react';

import { Ramo } from '$core/domain/siniestros';
import { storiesOf } from '$ui/.storybook/storiesOf';
import { DetalleSiniestro } from './DetalleSiniestro';

storiesOf('DetalleSiniestro', module).add('default', () => (
  <DetalleSiniestro siniestro={15726} ramo={Ramo.hogar} />
));
