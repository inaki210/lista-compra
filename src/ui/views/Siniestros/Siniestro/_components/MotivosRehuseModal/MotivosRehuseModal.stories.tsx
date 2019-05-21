import { action } from '@storybook/addon-actions';
import React from 'react';

import { selectMotivosRehuse } from '$ui/.storybook/samples/motivosRehuses';
import { storiesOf } from '$ui/.storybook/storiesOf';
import { MotivosRehuseModal } from './MotivosRehuseModal';

storiesOf('MotivosRehuseModal', module).add('default', () => (
  <MotivosRehuseModal
    name={selectMotivosRehuse()}
    onClose={action('onClose')}
  />
));
