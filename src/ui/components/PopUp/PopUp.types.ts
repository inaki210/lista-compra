import { Placement } from 'popper.js';
import { RefHandler } from 'react-popper';
import { CSSObject } from 'styled-components';

export interface ReferenceProps {
  innerRef: RefHandler;
  togglePopUp: () => void;
}

export interface ContentProps {
  innerRef: RefHandler;
  styles: CSSObject;
  placement: Placement;
  arrowRef: RefHandler;
  arrowStyles: CSSObject;
}

export interface PopUpStyledProps {
  styles: CSSObject;
  placement?: Placement;
}
