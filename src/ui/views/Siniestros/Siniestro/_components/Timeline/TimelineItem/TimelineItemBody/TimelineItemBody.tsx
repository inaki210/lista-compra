import React, { useCallback } from 'react';

import { TimelineEntry } from '$core/domain/siniestros/timeline';
import { format } from '$core/infraestructure/locale/format';
import { Html, ReplaceProps } from '$ui/components/Html';
import {
  Action,
  getParams,
} from '$ui/views/Siniestros/Siniestro/_components/Action';
import {
  TimelineItemBodyLink,
  TimelineItemBodyTime,
  TimelineItemBodyWrapper,
} from './TimelineItemBody.styles';

export { TimelineItemBody };

interface Props {
  className?: string;
  entry: TimelineEntry;
}

function TimelineItemBody({ className, entry }: Props) {
  const handleReplace = useCallback(onReplace, [entry]);
  return (
    <TimelineItemBodyWrapper
      className={className}
      entryType={entry.tipo}
      showDestacado={!entry.leido}
    >
      <Html html={entry.mensaje} onReplace={handleReplace} />
      <TimelineItemBodyTime>{format(entry.fecha, 'LT')}</TimelineItemBodyTime>
    </TimelineItemBodyWrapper>
  );

  function onReplace({ tag, attrs, children }: ReplaceProps) {
    switch (tag) {
      case 'a':
        return (
          <TimelineItemBodyLink entryType={entry.tipo} {...attrs}>
            {children()}
          </TimelineItemBodyLink>
        );
      case 'action':
        const params = getParams(attrs);
        return (
          <Action name={attrs.name} params={params}>
            {handleAction => (
              <TimelineItemBodyLink
                entryType={entry.tipo}
                onClick={handleAction}
              >
                {children()}
              </TimelineItemBodyLink>
            )}
          </Action>
        );
      default:
        return false;
    }
  }
}
