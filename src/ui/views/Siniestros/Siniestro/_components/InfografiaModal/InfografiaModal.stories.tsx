import { action } from '@storybook/addon-actions';
import React from 'react';

import { selectInfografia } from '$ui/.storybook/samples/infografias';
import { storiesOf } from '$ui/.storybook/storiesOf';
import { InfografiaModal } from './InfografiaModal';

storiesOf('InfografiaModal', module).add('default', () => (
  <InfografiaModal name={selectInfografia()} onClose={action('onClose')} />
));
