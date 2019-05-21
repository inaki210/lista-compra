import { action } from '@storybook/addon-actions';
import React from 'react';

import { getRandomImage } from '$ui/.storybook/images';
import { storiesOf } from '$ui/.storybook/storiesOf';
import { MediaListModal } from './MediaListModal';

storiesOf('MediaListModal', module).add('default', () => (
  <MediaListModal header="Cabecera" onClose={action('onClose')}>
    <MediaListModal.Item>
      <MediaListModal.Item.Image name={getRandomImage()} />
      <MediaListModal.Item.Content>contenido</MediaListModal.Item.Content>
    </MediaListModal.Item>
    <MediaListModal.Item>
      <MediaListModal.Item.Image name={getRandomImage()} />
      <MediaListModal.Item.Content>contenido</MediaListModal.Item.Content>
    </MediaListModal.Item>
  </MediaListModal>
));
