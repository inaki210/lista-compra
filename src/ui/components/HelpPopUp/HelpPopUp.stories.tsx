import React from 'react';

import { alignDecorator } from '$ui/.storybook/decorators/alignDecorator';
import { storiesOf } from '$ui/.storybook/storiesOf';
import { HelpPopUp } from './HelpPopUp';

storiesOf('HelpPopUp', module)
  .addDecorator(alignDecorator)
  .add('HelpPopUp', () => (
    <p>
      texto <HelpPopUp>help content con mas texto</HelpPopUp> texto
    </p>
  ));
