import React from 'react';

import { storiesOf } from '$ui/.storybook/storiesOf';
import { Informacion } from './Informacion';

storiesOf('Informacion', module).add('default', () => (
  <Informacion>
    <Informacion.Header>Cabecera</Informacion.Header>
    <Informacion.Body>Contenido</Informacion.Body>
  </Informacion>
));
