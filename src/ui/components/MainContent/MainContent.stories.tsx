import { boolean } from '@storybook/addon-knobs';
import React from 'react';

import { storiesOf } from '$ui/.storybook/storiesOf';
import { styled } from '$ui/styles/styledComponents';
import { MainContent as MainContentOriginal } from './MainContent';

storiesOf('MainContent', module).add('default', () => (
  <MainContent>
    <MainContent.Body>contenido</MainContent.Body>
    {boolean('Mostrar aside', true) && (
      <MainContent.Aside>aside</MainContent.Aside>
    )}
  </MainContent>
));

const MainContent = Object.assign(
  styled(MainContentOriginal)`
    border: 1px solid black;
    padding: 5px;
  `,
  {
    Body: styled(MainContentOriginal.Body)`
      border: 1px solid blue;
    `,
    Aside: styled(MainContentOriginal.Aside)`
      border: 1px solid red;
    `,
  },
);
