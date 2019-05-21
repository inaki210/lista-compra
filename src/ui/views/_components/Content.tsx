import React from 'react';

import { Authenticated } from '$ui/components/Authentication';
import { Loading } from '$ui/components/Loading';
import { MatchMedia } from '$ui/components/MatchMedia';
import { AnyRoute } from '$ui/components/Routes/AnyRoute';
import { OneRouteOf } from '$ui/components/Routes/OneRouteOf';
import { RedirectTo } from '$ui/components/Routes/RedirectTo';
import { Route } from '$ui/components/Routes/Route';
import { Infografia } from '$ui/views/Infografia';
import { MotivosRehuse } from '$ui/views/MotivosRehuse';
import { NotFound } from '$ui/views/NotFound';
import { Siniestro } from '$ui/views/Siniestros/Siniestro';
import { Agenda } from '$ui/views/Siniestros/Siniestro/Agenda';
import {
  DetalleSiniestro,
} from '$ui/views/Siniestros/Siniestro/DetalleSiniestro';

export { Content };

interface Props {
  home: React.ReactNode;
}

function Content({ home }: Props) {
  return (
    <React.Suspense fallback={<Loading />}>
      <OneRouteOf>
        <Route state="notFound">{() => <NotFound />}</Route>
        <Route state="home">{() => home}</Route>
        <Authenticated>
          <Route state="siniestro" exact>
            {({ siniestro, ramo }) => (
              <Siniestro siniestro={siniestro} ramo={ramo} />
            )}
          </Route>
          <Route state="siniestro.detalle">
            {({ siniestro, ramo }) => (
              <DetalleSiniestro siniestro={siniestro} ramo={ramo} />
            )}
          </Route>
          {featureFlags.agenda && (
            <Route state="siniestro.agenda">
              {({ siniestro, ramo }) => (
                <Agenda siniestro={siniestro} ramo={ramo} />
              )}
            </Route>
          )}
          <MatchMedia onlyMobile>
            <Route state="infografia">
              {({ name }) => <Infografia name={name} />}
            </Route>
            <Route state="motivosRehuse">
              {({ name }) => <MotivosRehuse name={name} />}
            </Route>
          </MatchMedia>
        </Authenticated>
        <AnyRoute>
          <RedirectTo state="notFound" />
        </AnyRoute>
      </OneRouteOf>
    </React.Suspense>
  );
}
