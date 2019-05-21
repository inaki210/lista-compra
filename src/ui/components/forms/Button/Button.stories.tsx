import { action } from '@storybook/addon-actions';
import React from 'react';

import { storiesOf } from '$ui/.storybook/storiesOf';
import { Button } from './Button.styles';

storiesOf('Button', module).add('default', () => (
  <Button onClick={action('onClick')}>click me</Button>
));
