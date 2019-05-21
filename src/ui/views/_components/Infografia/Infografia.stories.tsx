import React from 'react';

import { selectInfografia } from '$ui/.storybook/samples/infografias';
import { storiesOf } from '$ui/.storybook/storiesOf';
import { Infografia } from './Infografia';

storiesOf('Infografia', module).add('default', () => (
  <Infografia name={selectInfografia()} />
));
