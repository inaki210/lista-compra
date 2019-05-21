import { rgba } from 'polished';

import { styled } from '$ui/styles/styledComponents';
import { media } from '$ui/styles/utils/media';
import { ModalSize } from './Modal.models';

export { ModalBackdrop, ModalContainer, ModalDialog, ModalBody };

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  z-index: 1000;
  overflow: auto;
  background-color: ${rgba('black', 0.5)};
`;

const ModalContainer = styled.div`
  min-height: 100%;

  overflow: hidden;

  ${media.tabletAndDesktop`
    display: flex;
    align-items: center;
  `}
`;

interface DialogProps {
  modalSize: ModalSize;
}

const ModalWidths = {
  [ModalSize.default]: 598,
  [ModalSize.large]: 900,
  [ModalSize.small]: 300,
};

const ModalDialog = styled.div.attrs({})<DialogProps>`
  background-color: ${p => p.theme.colors.background};

  ${media.onlyMobile`
    margin: 10px;
  `}

  ${media.tabletAndDesktop`
    width: ${p => ModalWidths[p.modalSize]}px;
    margin: 30px auto;
  `}
`;

const ModalBody = styled.div`
  ${media.onlyMobile`
    padding: 20px;
  `}

  ${media.tabletAndDesktop`
    padding: 30px;
  `}
`;
