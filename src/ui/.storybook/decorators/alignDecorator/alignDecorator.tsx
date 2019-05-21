import { radios } from '@storybook/addon-knobs';
import { RenderFunction } from '@storybook/react';
import React from 'react';

import { AlignDecoratorWrapper } from './alignDecorator.styles';
import { Align } from './alignDecorator.types';

export { alignDecorator };

function alignDecorator(story: RenderFunction) {
  const horizontalAlign = getAlign('horizontal align');
  const verticalAlign = getAlign('vertical align');
  return (
    <AlignDecoratorWrapper
      horizontalAlign={horizontalAlign}
      verticalAlign={verticalAlign}
    >
      {story()}
    </AlignDecoratorWrapper>
  );
}

function getAlign(title: string): Align {
  return radios(
    title,
    { start: 'flex-start', center: 'center', end: 'flex-end' },
    'flex-start',
  );
}
