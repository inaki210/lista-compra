import { Image as ImageComponent } from '$ui/components/Image';
import { Section } from '$ui/components/Section';
import { styled } from '$ui/styles/styledComponents';
import { media } from '$ui/styles/utils/media';

export {
  CallMeBackLayoutWrapper,
  CallMeBackLayoutImage,
  CallMeBackLayoutSection,
  CallMeBackLayoutSectionHeader,
};

const CallMeBackLayoutWrapper = styled.div`
  display: flex;
`;

const CallMeBackLayoutImage = styled(ImageComponent)`
  flex-shrink: 0;
  width: 62px;
  height: 62px;
  margin: 25px 18px 0 0;
`;

const CallMeBackLayoutSection = styled(Section)`
  flex-grow: 1;
`;

const CallMeBackLayoutSectionHeader = styled(Section.Header)`
  font-weight: ${p => p.theme.font.weight.semibold};

  ${media.all`
    font-size: ${p => p.theme.font.size.h3}px;
  `}
`;
