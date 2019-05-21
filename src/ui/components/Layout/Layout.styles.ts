import { styled } from '$ui/styles/styledComponents';
import { media } from '$ui/styles/utils/media';

export { LayoutWrapper };

const LayoutWrapper = styled.div`
  margin: 0 auto;
  padding: 0 10px;

  ${media.tabletAndDesktop`
    width: 740px;
  `}

  ${media.desktop`
    width: 1014px;
  `}

  ${media.largeDesktop`
    width: 1160px;
  `}
`;
