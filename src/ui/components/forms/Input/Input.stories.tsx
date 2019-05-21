import React from 'react';

import { storiesOf } from '$ui/.storybook/storiesOf';
import { Input } from './Input.styles';

storiesOf('Input', module).add('default', () => <Input type="text" />);
