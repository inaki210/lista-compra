import React from 'react';

import { SiniestroParams } from '$core/domain/siniestros';
import { useMatchMedia } from '$ui/hooks/useMatchMedia';
import {
  SiniestroLayout,
} from '$ui/views/Siniestros/Siniestro/_components/SiniestroLayout';
import {
  useSiniestroContext,
} from '$ui/views/Siniestros/Siniestro/_hooks/useSiniestroContext';
import {
  useTrabajosAgenda,
} from '$ui/views/Siniestros/Siniestro/_hooks/useTrabajosAgenda';
import { AgendaDesktop } from './_components/AgendaDesktop';
import { AgendaMobile } from './_components/AgendaMobile';

export { Agenda };

interface Props extends SiniestroParams {}

function Agenda(props: Props) {
  return (
    <SiniestroLayout {...props}>
      <AgendaView />
    </SiniestroLayout>
  );
}

function AgendaView() {
  const { siniestro } = useSiniestroContext();
  const trabajos = useTrabajosAgenda(siniestro.agenda);
  const matchesOnlyMobile = useMatchMedia('onlyMobile');

  if (matchesOnlyMobile) {
    return <AgendaMobile trabajos={trabajos} />;
  }
  return <AgendaDesktop trabajos={trabajos} />;
}
