import React from 'react';

import { Ramo } from '$core/domain/siniestros';
import { storiesOf } from '$ui/.storybook/storiesOf';
import { Agenda } from './Agenda';

storiesOf('Agenda', module).add('default', () => (
  <Agenda siniestro={15726} ramo={Ramo.hogar} />
));
