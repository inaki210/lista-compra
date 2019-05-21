import React from 'react';

import { getRandomImage } from '$ui/.storybook/images';
import { storiesOf } from '$ui/.storybook/storiesOf';
import { MediaList } from './MediaList';

storiesOf('MediaList', module).add('default', () => (
  <MediaList>
    <MediaList.Item>
      <MediaList.Item.Image name={getRandomImage()} />
      <MediaList.Item.Content>contenido</MediaList.Item.Content>
    </MediaList.Item>
    <MediaList.Item>
      <MediaList.Item.Image name={getRandomImage()} />
      <MediaList.Item.Content>contenido</MediaList.Item.Content>
    </MediaList.Item>
  </MediaList>
));
