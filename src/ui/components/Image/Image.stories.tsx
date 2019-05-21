import React from 'react';

import { getRandomImage } from '$ui/.storybook/images';
import { storiesOf } from '$ui/.storybook/storiesOf';
import { Image } from './Image';

storiesOf('Image', module).add('default', () => (
  <Image name={getRandomImage()} />
));
