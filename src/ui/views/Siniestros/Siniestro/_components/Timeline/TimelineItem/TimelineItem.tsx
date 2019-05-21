import React from 'react';

import { TimelineEntry } from '$core/domain/siniestros/timeline';
import { TimelineItemWrapper } from './TimelineItem.styles';
import { TimelineItemBody } from './TimelineItemBody';
import { TimelineItemDate } from './TimelineItemDate';

export { TimelineItem };

interface Props {
  entry: TimelineEntry;
  showDate: boolean;
}

function TimelineItem({ entry, showDate }: Props) {
  return (
    <TimelineItemWrapper>
      {showDate && <TimelineItemDate date={entry.fecha} />}
      <TimelineItemBody entry={entry} />
    </TimelineItemWrapper>
  );
}
