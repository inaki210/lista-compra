import { styled } from '$ui/styles/styledComponents';
import { PopUpStyledProps } from './PopUp.types';

export { PopUpContent };

const PopUpContent = styled.div<PopUpStyledProps>`
  ${p => p.styles}

  border: 1px solid red;
`;
