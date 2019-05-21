import React, { useMemo } from 'react';

import { SiniestroParams } from '$core/domain/siniestros';
import { useMatchMedia } from '$ui/hooks/useMatchMedia';
import {
  SiniestroLayout,
} from '$ui/views/Siniestros/Siniestro/_components/SiniestroLayout';
import { SiniestroContent } from './_components/SiniestroContent';
import { Timeline } from './_components/Timeline';

export { Siniestro };

interface Props extends SiniestroParams {}

function Siniestro(props: Props) {
  const matchesDesktop = useMatchMedia('desktop');
  const asideProps = useMemo(createAsideProps, [matchesDesktop]);

  return (
    <SiniestroLayout {...props} {...asideProps} showDetalleLink>
      <SiniestroContent />
      <Timeline />
    </SiniestroLayout>
  );

  function createAsideProps() {
    return matchesDesktop
      ? {
          withAside: true as true,
          withAgenda: true,
        }
      : {};
  }
}
