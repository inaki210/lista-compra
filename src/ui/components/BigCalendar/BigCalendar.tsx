import dayjs from 'dayjs';
import React, { ReactNode, useMemo } from 'react';
import ReactBigCalendar, {
  EventProps,
  EventWrapperProps,
  Messages,
  ToolbarProps,
} from 'react-big-calendar';

import { t } from '$core/infraestructure/locale/t';
import { compareDates } from '$core/infraestructure/utils/comparators';
import {
  DateRange,
  getDateRange,
  getDateRangeDate,
} from '$core/infraestructure/utils/date';
import { noop } from '$core/infraestructure/utils/noop';
import {
  BigCalendarEventDescription,
  BigCalendarEventWrapper,
  BigCalendarWrapper,
} from './BigCalendar.styles';
import { BigCalendarToolbar } from './BigCalendarToolbar';
import { dayjsLocalizer } from './dayjsLocalizer';

export { BigCalendar };

interface Props {
  className?: string;
  events: Event[];
}

interface Event {
  title: string;
  description?: string;
  start: Date;
  end: Date;
}

interface EventData extends Event {
  completed: boolean;
  index: number;
}

function BigCalendar({ className, events }: Props) {
  const { minDate, maxDate, currentDate, eventsData } = useMemo(getData, [
    events,
  ]);
  const components = useMemo(createComponents, [minDate, maxDate]);

  return (
    <BigCalendarWrapper className={className}>
      <ReactBigCalendar
        localizer={dayjsLocalizer}
        messages={messages}
        events={eventsData}
        view="month"
        views={['month']}
        onView={noop}
        allDayAccessor={allDayAccessor}
        tooltipAccessor={tooltipAccessor}
        startAccessor={startAccessor}
        endAccessor={endAccessor}
        components={components}
        drilldownView={null}
        selected={null}
        onSelectEvent={noop}
        selectable="ignoreEvents"
        defaultDate={currentDate}
        popup
      />
    </BigCalendarWrapper>
  );

  function getData() {
    const rangos: DateRange[] = [];
    const eventsData: EventData[] = [];
    const today = new Date();
    let completedIndex = 0;
    let pendingIndex = 0;
    events.forEach(event => {
      rangos.push({ minDate: event.start, maxDate: event.end });
      const completed = compareDates(event.end, today) < 0;
      eventsData.push({
        ...event,
        completed,
        index: completed ? completedIndex++ : pendingIndex++,
      });
    });
    const dateRange = getDateRange(rangos);
    return {
      ...dateRange,
      currentDate: getDateRangeDate(dateRange, today),
      eventsData,
    };
  }

  function createComponents() {
    return {
      toolbar,
      event,
      eventWrapper,
    };

    function toolbar(props: ToolbarProps) {
      return (
        <BigCalendarToolbar {...props} minDate={minDate} maxDate={maxDate} />
      );
    }
  }
}

function allDayAccessor() {
  return true;
}

function tooltipAccessor(event: Event) {
  if (event.description) {
    return `${event.title}: ${event.description}`;
  }
  return event.title;
}

function startAccessor(event: Event) {
  return dayjs(event.start)
    .startOf('day')
    .toDate();
}

function endAccessor(event: Event) {
  return dayjs(event.end)
    .endOf('day')
    .toDate();
}

function event({ event }: EventProps<EventData>) {
  return (
    <>
      {event.title}
      {event.description && (
        <>
          {': '}
          <BigCalendarEventDescription>
            {event.description}
          </BigCalendarEventDescription>
        </>
      )}
    </>
  );
}

function eventWrapper({
  event,
  children,
}: EventWrapperProps<EventData> & { children?: ReactNode }) {
  return (
    <BigCalendarEventWrapper index={event.index} completed={event.completed}>
      {children}
    </BigCalendarEventWrapper>
  );
}

const messages: Messages = {
  showMore,
};

function showMore(count: number) {
  return t('components.bigCalendar.showMore', { count });
}
