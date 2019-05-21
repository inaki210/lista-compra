import React, { useEffect, useState } from 'react';

import { dispatch } from '$core/domain/dispatch';
import {
  Infografia as InfografiaEntity,
  infografiaResource,
} from '$core/domain/infografias';
import { Html } from '$ui/components/Html';
import { Section } from '$ui/components/Section';
import { Informacion } from '$ui/views/_components/Informacion';
import {
  InfografiaItemWrapper,
  InfografiaProcesoContainer,
} from './Infografia.styles';
import { InfografiaItem } from './InfografiaItem';

export { Infografia };

interface Props {
  name: string;
}

function Infografia({ name }: Props) {
  const [infografia, setInfografia] = useState<InfografiaEntity>();
  useEffect(loadInfografia, [name, setInfografia]);

  return (
    <>
      {infografia && (
        <Section>
          <Informacion>
            <Informacion.Header>
              <Section.Header>{infografia.titulo}</Section.Header>
              <Html html={infografia.descripcion} />
            </Informacion.Header>
            <InfografiaProcesoContainer>
              {infografia.proceso.map((item, index) => (
                <InfografiaItemWrapper key={index}>
                  <InfografiaItem item={item} />
                </InfografiaItemWrapper>
              ))}
            </InfografiaProcesoContainer>
          </Informacion>
        </Section>
      )}
    </>
  );

  function loadInfografia() {
    const unregister = infografiaResource.register(setInfografia);
    dispatch(() => infografiaResource.load(name));
    return unregister;
  }
}
