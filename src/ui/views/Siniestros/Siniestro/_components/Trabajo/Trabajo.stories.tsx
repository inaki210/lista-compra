import React from 'react';

import { storiesOf } from '$ui/.storybook/storiesOf';
import { Trabajo } from './Trabajo';

storiesOf('Trabajo', module)
  .add('default', () => <Trabajo nombre="Nombre" descripcion="Descripcion" />)
  .add('finalizado', () => (
    <Trabajo nombre="Nombre" descripcion="Descripcion" finalizado />
  ));
