import React from 'react';

import {
  siniestroDecorator,
} from '$ui/.storybook/decorators/siniestroDecorator';
import { storiesOf } from '$ui/.storybook/storiesOf';
import { DatosContacto } from './DatosContacto';

storiesOf('DatosContacto', module)
  .addDecorator(siniestroDecorator)
  .add('default', () => <DatosContacto />);
