import { action } from '@storybook/addon-actions';
import React from 'react';

import { storiesOf } from '$ui/.storybook/storiesOf';
import { Link } from './Link';

storiesOf('Link', module).add('default', () => (
  <Link onClick={action('onClick')}>enlace</Link>
));
