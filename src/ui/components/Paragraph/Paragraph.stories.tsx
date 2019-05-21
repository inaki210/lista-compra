import React from 'react';

import { storiesOf } from '$ui/.storybook/storiesOf';
import { Paragraph } from './Paragraph.styles';

storiesOf('Paragraph', module).add('default', () => (
  <Paragraph>contenido</Paragraph>
));
