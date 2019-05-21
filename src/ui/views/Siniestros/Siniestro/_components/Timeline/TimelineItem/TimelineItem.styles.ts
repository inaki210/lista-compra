import { styled } from '$ui/styles/styledComponents';
import { media } from '$ui/styles/utils/media';

export { TimelineItemWrapper };

const TimelineItemWrapper = styled.div`
  ${media.tabletAndDesktop`
    display: flex;
    align-items: center;
  `}
`;
