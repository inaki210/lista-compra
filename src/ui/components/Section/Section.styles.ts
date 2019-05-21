import { styled } from '$ui/styles/styledComponents';
import { media } from '$ui/styles/utils/media';

export { SectionHeader };

const SectionHeader = styled.header`
  margin-bottom: ${p => p.theme.baseSpace.xsm}px;

  color: ${p => p.theme.colors.magentaOscuro};
  text-transform: uppercase;

  ${media.onlyMobile`
    font-size: ${p => p.theme.font.size.h3}px;
  `}

  ${media.tabletAndDesktop`
    font-size: ${p => p.theme.font.size.h2}px;
  `}
`;
