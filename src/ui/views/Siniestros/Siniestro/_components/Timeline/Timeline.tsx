import React, { useEffect, useMemo, useState } from 'react';

import {
  Etiqueta,
  Timeline as TimelineEntity,
  TimelineEntry,
} from '$core/domain/siniestros/timeline';
import { hasItems, hasNoItems } from '$core/infraestructure/utils/array';
import { compareDateTimes } from '$core/infraestructure/utils/comparators';
import { toDate } from '$core/infraestructure/utils/date';
import { usePresenter } from '$ui/hooks/usePresenter';
import {
  useSiniestroContext,
} from '$ui/views/Siniestros/Siniestro/_hooks/useSiniestroContext';
import { CompromisosModal } from '../CompromisosModal';
import { VentajasProfesionalesModal } from '../VentajasProfesionalesModal';
import { TimelinePresenter } from './Timeline.presenter';
import { TimelineItemWrapper, TimelineWrapper } from './Timeline.styles';
import { TimelineInfo } from './TimelineInfo';
import { TimelineItem } from './TimelineItem';

export { Timeline };

function Timeline() {
  const { params } = useSiniestroContext();
  const [timeline, setTimeline] = useState<TimelineEntity>();
  const presenter = usePresenter(TimelinePresenter.create, { setTimeline });
  useEffect(loadPresenter, [presenter, params]);
  const timelineData = useMemo(getTimelineData, [timeline]);

  return (
    <>
      {hasItems(timelineData) && (
        <TimelineWrapper>
          {timelineData.map(({ entry, show }) => (
            <TimelineItemWrapper key={entry.id} groupStart={show.date}>
              <TimelineItem entry={entry} showDate={show.date} />
              {show.infoCompromisos() && (
                <TimelineInfo
                  messageKey="timeline.info.compromisos"
                  modal={CompromisosModal}
                />
              )}
              {show.infoVentajas() && (
                <TimelineInfo
                  messageKey="timeline.info.ventajas"
                  modal={VentajasProfesionalesModal}
                />
              )}
            </TimelineItemWrapper>
          ))}
        </TimelineWrapper>
      )}
    </>
  );

  function loadPresenter() {
    return presenter.onLoad(params);
  }

  function getTimelineData() {
    return generateTimeline(timeline);
  }
}

function generateTimeline(timeline: TimelineEntity | undefined) {
  if (hasNoItems(timeline)) {
    return null;
  }
  const context: Context = {
    ventajasIndex: 0,
  };
  return timeline
    .sort((entry1, entry2) => compareDateTimes(entry2.fecha, entry1.fecha))
    .map((entry, index) => {
      updateContext(context, entry, index);
      return {
        entry,
        show: createShow(context, entry, index),
      };
    });
}

function updateContext(context: Context, entry: TimelineEntry, index: number) {
  switch (entry.etiqueta) {
    case Etiqueta.peritacion:
    case Etiqueta.reparacion:
      context.compromisosIndex = index;
      break;
    default:
      break;
  }
  context.ventajasIndex = index;
}

function createShow(context: Context, entry: TimelineEntry, index: number) {
  return {
    date: showDate(context, entry.fecha),
    infoCompromisos: showInfoCompromisos(context, entry.etiqueta, index),
    infoVentajas: showInfoVentajas(context, index),
  };
}

function showDate(context: Context, current: Date) {
  const date = toDate(current);
  const lastDate = getValue(context, 'date', date);
  return !lastDate || compareDateTimes(lastDate, date) !== 0;
}

function showInfoCompromisos(
  context: Context,
  etiqueta: Etiqueta | undefined,
  index: number,
) {
  return () => {
    switch (etiqueta) {
      case Etiqueta.peritacion:
      case Etiqueta.reparacion:
        return context.compromisosIndex === index;
      default:
        return false;
    }
  };
}

function showInfoVentajas(context: Context, index: number) {
  return () => context.ventajasIndex === index;
}

function getValue<Key extends keyof Context>(
  context: Context,
  field: Key,
  nextValue: Context[Key],
) {
  const value = context[field];
  context[field] = nextValue;
  return value;
}

interface Context {
  date?: Date;
  compromisosIndex?: number;
  ventajasIndex: number;
}
