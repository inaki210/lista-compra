import React from 'react';

import { storiesOf } from '$ui/.storybook/storiesOf';
import { DetalleList } from './DetalleList';

storiesOf('DetalleList', module).add('default', () => (
  <DetalleList>
    <DetalleList.Item name="campo 1" content="detalle 1" />
    <DetalleList.Item name="campo 2" content="detalle 2" />
    <DetalleList.Item name="campo 3" content="detalle 3" />
  </DetalleList>
));
