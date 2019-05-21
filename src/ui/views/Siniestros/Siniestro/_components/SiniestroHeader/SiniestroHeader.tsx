import React from 'react';

import { MatchMedia } from '$ui/components/MatchMedia';
import { BackLink } from '$ui/components/Routes/BackLink';
import {
  useSiniestroContext,
} from '$ui/views/Siniestros/Siniestro/_hooks/useSiniestroContext';
import {
  SiniestroHeaderActions,
  SiniestroHeaderTitle,
  SiniestroHeaderWrapper,
} from './SiniestroHeader.styles';

export { SiniestroHeader };

function SiniestroHeader() {
  const { siniestro } = useSiniestroContext();
  return (
    <SiniestroHeaderWrapper>
      <SiniestroHeaderTitle>{siniestro.descripcionCausa}</SiniestroHeaderTitle>
      <MatchMedia tabletAndDesktop>
        <SiniestroHeaderActions>
          <BackLink />
        </SiniestroHeaderActions>
      </MatchMedia>
    </SiniestroHeaderWrapper>
  );
}
