import { CSSObject } from 'styled-components';

import { styled } from '$ui/styles/styledComponents';
import { Align } from './alignDecorator.types';

export { AlignDecoratorWrapper };

interface Props {
  horizontalAlign: Align;
  verticalAlign: Align;
}

const AlignDecoratorWrapper = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: ${p => p.horizontalAlign};
  align-items: ${p => p.verticalAlign};
`;

interface ContentProps {
  styles: CSSObject;
}

const PopUpContent = styled.div<ContentProps>`
  ${p => p.styles}

  border: 1px solid red;
`;
