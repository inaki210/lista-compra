import { Image } from '$ui/components/Image';
import { ModalLink } from '$ui/components/ModalLink';
import { styled } from '$ui/styles/styledComponents';
import { media } from '$ui/styles/utils/media';

export {
  TimelineInfoWrapper,
  TimelineInfoImage,
  TimelineInfoContent,
  TimelineInfoModalLink,
};

const TimelineInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${p => p.theme.baseSpace.base}px;

  font-size: ${p => p.theme.font.size.xsmall};

  ${media.tabletAndDesktop`
    justify-content: center;
    margin-left: ${p => p.theme.baseSpace.md + p.theme.baseSpace.xxsm}px;
  `}
`;

const TimelineInfoImage = styled(Image)`
  width: 24px;
  height: 24px;
`;

const TimelineInfoContent = styled.div`
  margin-left: 10px;
`;

const TimelineInfoModalLink = styled(ModalLink)`
  font-weight: ${p => p.theme.font.weight.semibold};
`;
