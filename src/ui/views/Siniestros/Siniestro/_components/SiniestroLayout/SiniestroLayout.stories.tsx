import React from 'react';

import { Ramo } from '$core/domain/siniestros';
import { storiesOf } from '$ui/.storybook/storiesOf';
import { SiniestroLayout } from './SiniestroLayout';

storiesOf('SiniestroLayout', module)
  .add('default', () => (
    <SiniestroLayout siniestro={15726} ramo={Ramo.hogar}>
      Contenido
    </SiniestroLayout>
  ))
  .add('showDetalleLink', () => (
    <SiniestroLayout siniestro={15726} ramo={Ramo.hogar} showDetalleLink>
      Contenido
    </SiniestroLayout>
  ))
  .add('withAside', () => (
    <SiniestroLayout siniestro={15726} ramo={Ramo.hogar} withAside>
      Contenido
    </SiniestroLayout>
  ))
  .add('withAside + withAgenda', () => (
    <SiniestroLayout siniestro={15726} ramo={Ramo.hogar} withAside withAgenda>
      Contenido
    </SiniestroLayout>
  ));
