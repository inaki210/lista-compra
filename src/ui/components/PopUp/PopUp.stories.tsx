import { select } from '@storybook/addon-knobs';
import { Placement } from 'popper.js';
import React from 'react';

import { alignDecorator } from '$ui/.storybook/decorators/alignDecorator';
import { storiesOf } from '$ui/.storybook/storiesOf';
import { Button } from '../forms/Button';
import { PopUp } from './PopUp';
import { PopUpContent } from './PopUp.stories.styles';
import { ContentProps, ReferenceProps } from './PopUp.types';

storiesOf('PopUp', module)
  .addDecorator(alignDecorator)
  .add('default', () => <PopUp reference={Reference} content={Content} />)
  .add('placement', () => (
    <PopUp reference={Reference} content={Content} placement={getPlacement()} />
  ))
  .add('exitOnOutsideClick', () => (
    <PopUp reference={Reference} content={Content} exitOnOutsideClick />
  ));

function Reference({ innerRef, togglePopUp }: ReferenceProps) {
  return (
    <Button ref={innerRef} onClick={togglePopUp}>
      referencia popup
    </Button>
  );
}

function Content({ innerRef, styles }: ContentProps) {
  return (
    <PopUpContent ref={innerRef} styles={styles}>
      contenido
    </PopUpContent>
  );
}

function getPlacement() {
  return select('placement', placements, 'bottom');
}

const placements: Placement[] = [
  'auto-start',
  'auto',
  'auto-end',
  'top-start',
  'top',
  'top-end',
  'right-start',
  'right',
  'right-end',
  'bottom-end',
  'bottom',
  'bottom-start',
  'left-end',
  'left',
  'left-start',
];
