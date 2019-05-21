import React from 'react';

import { selectMotivosRehuse } from '$ui/.storybook/samples/motivosRehuses';
import { storiesOf } from '$ui/.storybook/storiesOf';
import { MotivosRehuse } from './MotivosRehuse';

storiesOf('MotivosRehuse', module).add('default', () => (
  <MotivosRehuse name={selectMotivosRehuse()} />
));
