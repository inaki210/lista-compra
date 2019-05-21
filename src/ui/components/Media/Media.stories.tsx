import React from 'react';

import { getRandomImage } from '$ui/.storybook/images';
import { storiesOf } from '$ui/.storybook/storiesOf';
import { Media } from './Media';

storiesOf('Media', module)
  .add('default', () => (
    <Media>
      <Media.Image name={getRandomImage()} />
      <Media.Content>contenido</Media.Content>
    </Media>
  ))
  .add('imagen a la derecha', () => (
    <Media>
      <Media.Content>contenido</Media.Content>
      <Media.Image name={getRandomImage()} />
    </Media>
  ));
