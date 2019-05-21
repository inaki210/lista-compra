import { styled } from '$ui/styles/styledComponents';
import { media } from '$ui/styles/utils/media';

export { InformacionHeader, InformacionBody };

const InformacionHeader = styled.div`
  background-color: ${p => p.theme.colors.beige};

  ${media.onlyMobile`
    padding: ${p => p.theme.baseSpace.base}px ${p => p.theme.baseSpace.sm}px;
  `}
  ${media.tabletAndDesktop`
    padding: ${p => p.theme.baseSpace.md}px;
  `}
`;

const InformacionBody = styled.div`
  ${media.onlyMobile`
    margin: ${p => p.theme.baseSpace.base}px ${p => p.theme.baseSpace.sm}px;
  `}
  ${media.tabletAndDesktop`
    margin: ${p => p.theme.baseSpace.md}px;
  `}
`;
