import React, { ReactNode, useEffect, useMemo, useState } from 'react';

import { SiniestroParams } from '$core/domain/siniestros';
import { Siniestro } from '$core/domain/siniestros/siniestro';
import { Loading } from '$ui/components/Loading';
import { usePresenter } from '$ui/hooks/usePresenter';
import {
  SiniestroContextProvider,
  SiniestroContextValue,
} from '$ui/views/Siniestros/Siniestro/_hooks/useSiniestroContext';
import { SiniestroLoaderPresenter } from './SiniestroLoader.presenter';

export { SiniestroLoader };

interface Props extends SiniestroParams {
  children: (context: SiniestroContextValue) => ReactNode;
}

function SiniestroLoader({ children, ...props }: Props) {
  const params = useMemo(createParams, [props.siniestro, props.ramo]);
  const [siniestro, setSiniestro] = useState<Siniestro>();
  const presenter = usePresenter(SiniestroLoaderPresenter.create, {
    setSiniestro,
  });
  useEffect(loadPresenter, [presenter, params]);
  const context = useMemo(createContext, [params, siniestro]);

  if (!context) {
    return <Loading />;
  }
  return (
    <SiniestroContextProvider value={context}>
      {children(context)}
    </SiniestroContextProvider>
  );

  function createParams() {
    return { siniestro: props.siniestro, ramo: props.ramo };
  }

  function loadPresenter() {
    return presenter.onLoaded(params);
  }

  function createContext(): SiniestroContextValue | null {
    if (!siniestro) {
      return null;
    }
    return {
      params,
      siniestro,
    };
  }
}
