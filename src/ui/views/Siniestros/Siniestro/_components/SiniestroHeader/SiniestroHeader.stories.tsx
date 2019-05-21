import React from 'react';

import {
  siniestroDecorator,
} from '$ui/.storybook/decorators/siniestroDecorator';
import { storiesOf } from '$ui/.storybook/storiesOf';
import { SiniestroHeader } from './SiniestroHeader';

storiesOf('SiniestroHeader', module)
  .addDecorator(siniestroDecorator)
  .add('default', () => <SiniestroHeader />);
