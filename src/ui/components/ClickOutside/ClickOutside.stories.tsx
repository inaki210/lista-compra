import { action } from '@storybook/addon-actions';
import * as React from 'react';

import { storiesOf } from '$ui/.storybook/storiesOf';
import { ClickOutside } from './';

storiesOf('ClickOutside', module)
  .add('default', () => (
    <ClickOutside onClickOutside={action('onClickOutside')}>
      <button onClick={action('button onClick')}>click me</button>
    </ClickOutside>
  ))
  .add('isExcluded', () => (
    <>
      <button id="excludedButton" onClick={action('excluded button onClick')}>
        excluded click me
      </button>{' '}
      <button onClick={action('not excluded button onClick')}>
        not excluded click me
      </button>{' '}
      <ClickOutside
        onClickOutside={action('onClickOutside')}
        isExcluded={element => element.id === 'excludedButton'}
      >
        <button onClick={action('button onClick')}>click me</button>
      </ClickOutside>
    </>
  ));
