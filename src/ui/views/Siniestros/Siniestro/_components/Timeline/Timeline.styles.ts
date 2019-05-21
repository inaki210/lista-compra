import { css, styled } from '$ui/styles/styledComponents';
import { media } from '$ui/styles/utils/media';

export { TimelineWrapper, TimelineItemWrapper };

const TimelineWrapper = styled.ul`
  margin-bottom: ${p => p.theme.baseSpace.base}px;
`;

interface TimelineItemWrapperProps {
  groupStart: boolean;
}

const TimelineItemWrapper = styled.li.attrs({})<TimelineItemWrapperProps>`
  ${p =>
    p.groupStart
      ? css`
          margin-top: ${p.theme.baseSpace.base}px;
        `
      : css`
          padding-top: ${p.theme.baseSpace.base}px;
        `}

  ${media.tabletAndDesktop`
    margin-left: ${p => p.theme.baseSpace.lg}px;
    margin-right: ${p => p.theme.baseSpace.xlg}px;
    padding-left: ${p => p.theme.baseSpace.sm - p.theme.baseSpace.xxsm}px;

    border-left: solid ${p =>
      p.theme.baseSpace.sm + p.theme.baseSpace.xxsm}px ${p =>
    p.theme.colors.beigeClaro};
  `}
`;
