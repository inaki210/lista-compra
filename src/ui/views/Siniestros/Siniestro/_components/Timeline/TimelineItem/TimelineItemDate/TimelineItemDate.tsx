import React from 'react';

import { format } from '$core/infraestructure/locale/format';
import { MatchMedia } from '$ui/components/MatchMedia';
import {
  TimelineItemDateDay,
  TimelineItemDateMonth,
  TimelineItemDateWrapper,
} from './TimelineItemDate.styles';

export { TimelineItemDate };

interface Props {
  className?: string;
  date: Date;
}

function TimelineItemDate({ className, date }: Props) {
  return (
    <TimelineItemDateWrapper className={className}>
      <MatchMedia onlyMobile>
        {format(date, 'D')} {format(date, 'MMM')}
      </MatchMedia>
      <MatchMedia tabletAndDesktop>
        <TimelineItemDateDay>{format(date, 'D')}</TimelineItemDateDay>
        <TimelineItemDateMonth>{format(date, 'MMM')}</TimelineItemDateMonth>
      </MatchMedia>
    </TimelineItemDateWrapper>
  );
}
