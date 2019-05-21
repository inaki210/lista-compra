import React from 'react';

import { storiesOf } from '$ui/.storybook/storiesOf';
import { Strong } from './Strong.styles';

storiesOf('Strong', module).add('default', () => <Strong>contenido</Strong>);
