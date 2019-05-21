import React from 'react';

import { storiesOf } from '$ui/.storybook/storiesOf';
import { DetalleSection } from './DetalleSection';

storiesOf('DetalleSection', module).add('default', () => (
  <DetalleSection>
    <DetalleSection.Header>Detalle del parte</DetalleSection.Header>
    contenido
  </DetalleSection>
));
