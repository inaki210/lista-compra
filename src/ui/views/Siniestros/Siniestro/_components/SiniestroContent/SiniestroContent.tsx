import React from 'react';

import {
  useSiniestroContext,
} from '$ui/views/Siniestros/Siniestro/_hooks/useSiniestroContext';
import { SiniestroContentProcess } from './SiniestroContentProcess';
import { SiniestroContentState } from './SiniestroContentState';

export { SiniestroContent };

function SiniestroContent() {
  const { siniestro } = useSiniestroContext();
  return (
    <>
      <SiniestroContentProcess />
      <SiniestroContentState siniestro={siniestro} />
    </>
  );
}
