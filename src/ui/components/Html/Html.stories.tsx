import { action } from '@storybook/addon-actions';
import React from 'react';

import { storiesOf } from '$ui/.storybook/storiesOf';
import { Link } from '../Link';
import { Html } from './Html';

storiesOf('Html', module)
  .add('default', () => <Html html="contenido que incluye <span>html</span>" />)
  .add('generate react', () => (
    <Html
      html="
        contenido que incluye
        <a>
          <strong>html</strong>
          reemplazado por
          <strong>componentes react</strong>
        </a>
      "
      onReplace={({ tag, children }) =>
        tag === 'a' && <Link onClick={action('onClick')}>{children()}</Link>
      }
    />
  ));
