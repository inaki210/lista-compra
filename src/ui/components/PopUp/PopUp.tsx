import { Placement } from 'popper.js';
import React, {
  ComponentType,
  SyntheticEvent,
  useCallback,
  useState,
} from 'react';
import { Manager, Popper, Reference } from 'react-popper';
import { CSSObject } from 'styled-components';

import { ClickOutside } from '$ui/components/ClickOutside';
import { useCreatePortal } from '$ui/hooks/useCreatePortal';
import { ContentProps, ReferenceProps } from './PopUp.types';

export { PopUp };

interface Props {
  reference: ComponentType<ReferenceProps>;
  content: ComponentType<ContentProps>;
  placement?: Placement;
  exitOnOutsideClick?: boolean;
}

function PopUp({
  reference: ReferenceComponent,
  content: ContentComponent,
  placement,
  exitOnOutsideClick,
}: Props) {
  const [popperVisible, setPopperVisible] = useState(false);
  const handleTogglePopper = useCallback(onTogglePopper, [setPopperVisible]);
  const createPortal = useCreatePortal();
  const handleHideOutside = useCallback(onHidePopper, [setPopperVisible]);
  const [referenceRef, setReferenceRef] = useState<HTMLElement | null>(null);
  const isExcluded = useCallback(getIsExcluded, [referenceRef]);

  return (
    <Manager>
      <Reference innerRef={setReferenceRef}>
        {({ ref }) => (
          <ReferenceComponent innerRef={ref} togglePopUp={handleTogglePopper} />
        )}
      </Reference>
      {popperVisible &&
        /**
         * Se pinta fuera del la jerarquía del DOM actual para evitar problemas
         * con estilos
         */
        createPortal(
          <ClickOutside
            onClickOutside={handleHideOutside}
            disableOnClickOutside={!exitOnOutsideClick}
            isExcluded={isExcluded}
          >
            <div onClick={stopEventPropagation}>
              <Popper placement={placement}>
                {({ ref, style, placement, arrowProps }) => (
                  <ContentComponent
                    innerRef={ref}
                    styles={style as CSSObject}
                    placement={placement}
                    arrowRef={arrowProps.ref}
                    arrowStyles={arrowProps.style as CSSObject}
                  />
                )}
              </Popper>
            </div>
          </ClickOutside>,
        )}
    </Manager>
  );

  function onHidePopper() {
    setPopperVisible(false);
  }

  function onTogglePopper() {
    setPopperVisible(visible => !visible);
  }

  function getIsExcluded(element: HTMLElement) {
    return !!referenceRef && referenceRef.contains(element);
  }
}

function stopEventPropagation(event: SyntheticEvent) {
  event.stopPropagation();
}
