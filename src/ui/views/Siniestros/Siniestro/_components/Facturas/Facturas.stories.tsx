import React from 'react';

import {
  siniestroDecorator,
} from '$ui/.storybook/decorators/siniestroDecorator';
import { storiesOf } from '$ui/.storybook/storiesOf';
import { Facturas } from './Facturas';

storiesOf('Facturas', module)
  .addDecorator(siniestroDecorator)
  .add('default', () => <Facturas />);
