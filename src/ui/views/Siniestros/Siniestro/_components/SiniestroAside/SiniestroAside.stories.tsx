import React from 'react';

import {
  siniestroDecorator,
} from '$ui/.storybook/decorators/siniestroDecorator';
import { storiesOf } from '$ui/.storybook/storiesOf';
import { SiniestroAside } from './SiniestroAside';

storiesOf('SiniestroAside', module)
  .addDecorator(siniestroDecorator)
  .add('default', () => <SiniestroAside />)
  .add('withAgenda', () => <SiniestroAside withAgenda />);
