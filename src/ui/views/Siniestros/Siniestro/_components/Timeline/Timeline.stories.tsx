import React from 'react';

import {
  siniestroDecorator,
} from '$ui/.storybook/decorators/siniestroDecorator';
import { storiesOf } from '$ui/.storybook/storiesOf';
import { Timeline } from './Timeline';

storiesOf('Timeline', module)
  .addDecorator(siniestroDecorator)
  .add('default', () => <Timeline />);
