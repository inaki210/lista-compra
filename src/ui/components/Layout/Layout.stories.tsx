import React from 'react';

import { storiesOf } from '$ui/.storybook/storiesOf';
import { styled } from '$ui/styles/styledComponents';
import { Layout as LayoutOriginal } from './Layout';

storiesOf('Layout', module).add('default', () => <Layout>contenido</Layout>);

const Layout = styled(LayoutOriginal)`
  border: 1px solid black;
`;
