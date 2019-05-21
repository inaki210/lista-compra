import React from 'react';

import { storiesOf } from '$ui/.storybook/storiesOf';
import { CallMeBackLayout } from './CallMeBackLayout';

storiesOf('CallMeBackLayout', module).add('default', () => (
  <CallMeBackLayout title="Título">contenido</CallMeBackLayout>
));
