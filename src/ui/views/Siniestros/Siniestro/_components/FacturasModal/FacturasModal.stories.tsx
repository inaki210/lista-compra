import { action } from '@storybook/addon-actions';
import React from 'react';

import { storiesOf } from '$ui/.storybook/storiesOf';
import { FacturasModal } from './FacturasModal';

storiesOf('FacturasModal', module).add('default', () => (
  <FacturasModal onClose={action('onClose')} />
));
