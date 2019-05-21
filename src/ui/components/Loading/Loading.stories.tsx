import React from 'react';

import { storiesOf } from '$ui/.storybook/storiesOf';
import { Loading } from './Loading';

storiesOf('Loading', module)
  .add('default', () => <Loading />)
  .add('withoutDelay', () => <Loading withoutDelay />)
  .add('small', () => <Loading small />);
