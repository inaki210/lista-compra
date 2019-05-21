import React, { MouseEvent, ReactNode, useCallback, useMemo } from 'react';

import { ContentProps, PopUp, ReferenceProps } from '../PopUp';
import {
  HelpPopUpArrow,
  HelpPopUpContent,
  HelpPopUpContentWrapper,
  HelpPopUpImage,
  HelpPopUpLink,
} from './HelpPopUp.styles';

export { HelpPopUp };

interface Props {
  children: ReactNode;
}

function HelpPopUp({ children }: Props) {
  const Content = useMemo(createContent, [children]);

  return <PopUp reference={Reference} content={Content} exitOnOutsideClick />;

  function createContent() {
    return ({
      innerRef,
      styles,
      placement,
      arrowRef,
      arrowStyles,
    }: ContentProps) => (
      <HelpPopUpContentWrapper
        ref={innerRef}
        styles={styles}
        placement={placement}
      >
        <HelpPopUpArrow
          ref={arrowRef}
          styles={arrowStyles}
          placement={placement}
        />
        <HelpPopUpContent>{children}</HelpPopUpContent>
      </HelpPopUpContentWrapper>
    );
  }
}

function Reference({ innerRef, togglePopUp }: ReferenceProps) {
  const handleClick = useCallback(onClick, [togglePopUp]);

  return (
    <HelpPopUpLink ref={innerRef} onClick={handleClick}>
      <HelpPopUpImage name="info.svg" />
    </HelpPopUpLink>
  );

  function onClick(event: MouseEvent) {
    event.stopPropagation();
    togglePopUp();
  }
}
