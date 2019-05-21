import React from 'react';

import {
  siniestroDecorator,
} from '$ui/.storybook/decorators/siniestroDecorator';
import { storiesOf } from '$ui/.storybook/storiesOf';
import { SiniestroContent } from './SiniestroContent';

storiesOf('SiniestroContent', module)
  .addDecorator(siniestroDecorator)
  .add('default', () => <SiniestroContent />);
