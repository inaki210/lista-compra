import { action } from '@storybook/addon-actions';
import { button } from '@storybook/addon-knobs';
import { forceReRender } from '@storybook/react';
import React from 'react';

import { config } from '$config';
import { storiesOf } from '$ui/.storybook/storiesOf';
import { CallMeBackModal } from './CallMeBackModal';

let id = 0;

storiesOf('CallMeBackModal', module).add('default', () => {
  button('reset', () => {
    id++;
    forceReRender();
  });
  return (
    <CallMeBackModal
      key={id}
      operatorCode={config.callMeBack.codigos.hogarYComercio}
      onClose={action('onClose')}
    />
  );
});
