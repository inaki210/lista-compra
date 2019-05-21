import React from 'react';

import { Authenticated, NotAuthenticated } from '$ui/components/Authentication';
import { Layout } from '$ui/components/Layout';
import { Content } from './_components/Content';
import { Context } from './_components/Context';
import { Home } from './Home';
import { Login } from './Login';

export { StandaloneApp };

function StandaloneApp() {
  return (
    <Context>
      <Layout>
        <Content
          home={
            <>
              <NotAuthenticated>
                <Login />
              </NotAuthenticated>
              <Authenticated>
                <Home />
              </Authenticated>
            </>
          }
        />
      </Layout>
    </Context>
  );
}
