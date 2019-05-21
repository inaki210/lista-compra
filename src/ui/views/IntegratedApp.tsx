import React from 'react';

import { Loading } from '$ui/components/Loading';
import { Content } from './_components/Content';
import { Context } from './_components/Context';

export { IntegratedApp };

function IntegratedApp() {
  return (
    <Context>
      <Content home={<Loading />} />
    </Context>
  );
}
