import { Section } from '$ui/components/Section';
import { styled } from '$ui/styles/styledComponents';
import { media } from '$ui/styles/utils/media';

export { DetalleSectionWrapper, DetalleSectionHeader };

const DetalleSectionWrapper = Section;

const DetalleSectionHeader = styled(Section.Header)`
  margin-top: ${p => p.theme.baseSpace.sm}px;

  ${media.onlyMobile`
    font-size: ${p => p.theme.font.size.large}px;
  `}

  ${media.tabletAndDesktop`
    font-size: ${p => p.theme.font.size.h3}px;
  `}
`;
