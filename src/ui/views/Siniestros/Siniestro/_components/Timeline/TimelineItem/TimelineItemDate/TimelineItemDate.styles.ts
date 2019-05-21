import { styled } from '$ui/styles/styledComponents';
import { media } from '$ui/styles/utils/media';

export { TimelineItemDateWrapper, TimelineItemDateDay, TimelineItemDateMonth };

const TimelineItemDateWrapper = styled.div`
  text-align: center;

  ${media.onlyMobile`
    margin-bottom: ${p => p.theme.baseSpace.sm}px;

    font-weight: ${p => p.theme.font.weight.semibold};
    text-transform: uppercase;

    background-color: ${p => p.theme.colors.beigeClaro};
  `}

  ${media.tabletAndDesktop`
    flex-shrink: 0;
    width: ${p => p.theme.baseSpace.base}px;
    margin-right: ${p => p.theme.baseSpace.sm}px;
  `}
`;

const TimelineItemDateDay = styled.div`
  font-weight: ${p => p.theme.font.weight.semibold};
  font-size: 20px;
  letter-spacing: 0.3px;
`;

const TimelineItemDateMonth = styled.div`
  font-size: ${p => p.theme.font.size.xsmall}px;
  letter-spacing: 0.33px;
  text-transform: capitalize;
`;
