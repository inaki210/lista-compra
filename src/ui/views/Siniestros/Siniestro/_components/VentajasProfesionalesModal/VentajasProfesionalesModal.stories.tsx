import { action } from '@storybook/addon-actions';
import React from 'react';

import { storiesOf } from '$ui/.storybook/storiesOf';
import { VentajasProfesionalesModal } from './VentajasProfesionalesModal';

storiesOf('VentajasProfesionalesModal', module).add('default', () => (
  <VentajasProfesionalesModal onClose={action('onClose')} />
));
