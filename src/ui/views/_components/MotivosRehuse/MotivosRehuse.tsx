import React, { useEffect, useState } from 'react';

import { dispatch } from '$core/domain/dispatch';
import {
  MotivosRehuse as MotivosRehuseEntity,
  motivosRehuseResource,
} from '$core/domain/motivosRehuses';
import { Html } from '$ui/components/Html';
import { Informacion } from '$ui/views/_components/Informacion';
import { MotivosRehuseHeader } from './MotivosRehuse.styles';

export { MotivosRehuse };

interface Props {
  name: string;
}

function MotivosRehuse({ name }: Props) {
  const [motivosRehuse, setMotivosRehuse] = useState<MotivosRehuseEntity>();
  useEffect(loadInfografia, [name, setMotivosRehuse]);

  return (
    <>
      {motivosRehuse && (
        <Informacion>
          <MotivosRehuseHeader>{motivosRehuse.titulo}</MotivosRehuseHeader>
          <Informacion.Body>
            <Html html={motivosRehuse.descripcion} />
          </Informacion.Body>
        </Informacion>
      )}
    </>
  );

  function loadInfografia() {
    const unregister = motivosRehuseResource.register(setMotivosRehuse);
    dispatch(() => motivosRehuseResource.load(name));
    return unregister;
  }
}
