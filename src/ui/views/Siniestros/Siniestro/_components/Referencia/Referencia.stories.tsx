import React from 'react';

import { siniestro } from '$ui/.storybook/samples/siniestro';
import { siniestroParams } from '$ui/.storybook/samples/siniestroParams';
import { storiesOf } from '$ui/.storybook/storiesOf';
import { Referencia } from './Referencia';

storiesOf('Referencia', module)
  .add('default', () => (
    <Referencia siniestro={siniestro.siniestro} params={siniestroParams} />
  ))
  .add('showDetalleLink', () => (
    <Referencia
      siniestro={siniestro.siniestro}
      params={siniestroParams}
      showDetalleLink
    />
  ));
