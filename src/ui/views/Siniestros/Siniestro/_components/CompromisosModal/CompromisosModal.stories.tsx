import { action } from '@storybook/addon-actions';
import React from 'react';

import { storiesOf } from '$ui/.storybook/storiesOf';
import { CompromisosModal } from './CompromisosModal';

storiesOf('CompromisosModal', module).add('default', () => (
  <CompromisosModal onClose={action('onClose')} />
));
