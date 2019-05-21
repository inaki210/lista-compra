import { styled } from '$ui/styles/styledComponents';
import { media } from '$ui/styles/utils/media';

export { MainContentWrapper, MainContentBody, MainContentAside };

const MainContentWrapper = styled.div`
  ${media.desktop`
    display: flex;
  `}
`;

const MainContentBody = styled.div`
  ${media.desktop`
    flex-grow: 1;
  `}
`;

const asideDesktopWidth = 290;
const asideLargeDesktopWidth = 370;

const MainContentAside = styled.div`
  ${media.onlyMobile`
    margin-top: ${p => p.theme.baseSpace.md}px;
  `}

  ${media.desktop`
    flex-shrink: 0;
    margin-left: ${p => p.theme.baseSpace.base}px;
    width: ${asideDesktopWidth}px;
  `}

  ${media.largeDesktop`
    margin-left: ${p => p.theme.baseSpace.base + p.theme.baseSpace.md}px;
    width: ${asideLargeDesktopWidth}px;
  `}
`;
