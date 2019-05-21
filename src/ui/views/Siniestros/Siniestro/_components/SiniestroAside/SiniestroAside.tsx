import React from 'react';

import { Agenda } from './Agenda';
import { DatosContacto } from './DatosContacto';
import { SiniestroAsideWrapper } from './SiniestroAside.styles';
import { TeLlamamos } from './TeLlamamos';

export { SiniestroAside };

interface Props {
  withAgenda?: boolean;
}

function SiniestroAside({ withAgenda }: Props) {
  return (
    <SiniestroAsideWrapper>
      {featureFlags.agenda && withAgenda && <Agenda />}
      <DatosContacto />
      <TeLlamamos />
    </SiniestroAsideWrapper>
  );
}
