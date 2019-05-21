import { Image as ImageComponent } from '$ui/components/Image';
import { css, styled } from '$ui/styles/styledComponents';
import { media } from '$ui/styles/utils/media';

export { ModalCloseWrapper, ModalCloseButton, ModalCloseImage };

const ModalCloseWrapper = styled.div`
  position: relative;
`;

const mobileSize = 10;
const desktopSize = 12;

const buttonSize = css`
  ${media.onlyMobile`
    width: ${mobileSize}px;
    height: ${mobileSize}px;
  `}
  ${media.tabletAndDesktop`
    width: ${desktopSize}px;
    height: ${desktopSize}px;
  `}
`;

const ModalCloseButton = styled.button`
  ${buttonSize}
  position: absolute;
  ${media.onlyMobile`
    top: ${mobileSize}px;
    right: ${mobileSize}px;
  `}
  ${media.tabletAndDesktop`
    top: ${desktopSize * 1.5}px;
    right: ${desktopSize * 1.5}px;
  `}

  border: 0;
  padding: 0;
  background: transparent;
`;

const ModalCloseImage = styled(ImageComponent)`
  ${buttonSize}
`;
