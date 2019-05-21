import React from 'react';

import { RouteLink } from '$ui/components/Routes/RouteLink';

export { Home };

function Home() {
  return (
    <ul>
      <li>
        <RouteLink state="siniestro" params={{ siniestro: 0, ramo: 0 }}>
          Siniestro fake
        </RouteLink>
      </li>
      <li>
        <RouteLink state="siniestro" params={{ siniestro: 15726, ramo: 9 }}>
          Siniestro 9-15726
        </RouteLink>
      </li>
      <li>
        <RouteLink state="siniestro" params={{ siniestro: 745688, ramo: 8 }}>
          Siniestro 8-745688
        </RouteLink>
      </li>
      <li>
        <RouteLink state="siniestro" params={{ siniestro: 743446, ramo: 8 }}>
          Siniestro 8-743446
        </RouteLink>
      </li>
      <li>
        <RouteLink state="siniestro" params={{ siniestro: 744862, ramo: 8 }}>
          Siniestro 8-744862
        </RouteLink>
      </li>
      <li>
        <RouteLink state="siniestro" params={{ siniestro: 764217, ramo: 8 }}>
          Siniestro 8-764217
        </RouteLink>
      </li>
      <li>
        <RouteLink state="siniestro" params={{ siniestro: 677808, ramo: 8 }}>
          Siniestro 8-677808
        </RouteLink>
      </li>
    </ul>
  );
}
