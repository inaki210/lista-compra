import { RenderFunction } from '@storybook/react';
import React from 'react';

import { siniestroParams } from '$ui/.storybook/samples/siniestroParams';
import {
  SiniestroLoader,
} from '$ui/views/Siniestros/Siniestro/_components/SiniestroLoader';

export { siniestroDecorator };

const siniestroDecorator = (story: RenderFunction) => (
  <SiniestroLoader {...siniestroParams}>{() => story()}</SiniestroLoader>
);
