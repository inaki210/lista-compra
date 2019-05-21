import React from 'react';

import { ActionParams, ActionProps } from './Action.models';
import { AgendaReparadorAction } from './AgendaReparadorAction';
import { CallMeBackAction } from './CallMeBackAction';
import { FacturasAction } from './FacturasAction';
import { InfografiaAction } from './InfografiaAction';
import { MotivosRehuseAction } from './MotivosRehuseAction';
import { NoAction } from './NoAction';

export { Action };

interface Props extends ActionProps {
  name: string;
  params?: ActionParams;
}

function Action({ name, params = {}, children }: Props) {
  switch (name) {
    case 'agendaReparador':
      return <AgendaReparadorAction>{children}</AgendaReparadorAction>;
    case 'callMe':
      return <CallMeBackAction>{children}</CallMeBackAction>;
    case 'facturas':
      return <FacturasAction>{children}</FacturasAction>;
    case 'infografia':
      return <InfografiaAction>{children}</InfografiaAction>;
    case 'motivosRehuse':
      return (
        <MotivosRehuseAction codigo={params.codigo}>
          {children}
        </MotivosRehuseAction>
      );
    default:
      return <NoAction>{children}</NoAction>;
  }
}
