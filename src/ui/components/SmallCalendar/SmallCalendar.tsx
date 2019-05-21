import React, { useCallback, useMemo } from 'react';
import { CalendarTileProperties } from 'react-calendar';
import ReactCalendar from 'react-calendar/dist/entry.nostyle';

import { format } from '$core/infraestructure/locale/format';
import { t } from '$core/infraestructure/locale/t';
import { compareDates } from '$core/infraestructure/utils/comparators';
import {
  getDateRange,
  getDateRangeDate,
} from '$core/infraestructure/utils/date';
import { Html } from '../Html';
import { SmallCalendarWrapper } from './SmallCalendar.styles';

export { SmallCalendar };

interface Props {
  className?: string;
  selectedDates: Date[];
}

function SmallCalendar({ className, selectedDates }: Props) {
  const { minDate, maxDate, currentDate } = useMemo(getDates, [selectedDates]);
  const tileClassName = useCallback(getTileClassName, [selectedDates]);

  return (
    <SmallCalendarWrapper className={className}>
      <ReactCalendar
        formatMonth={formatMonth}
        formatShortWeekday={formatShortWeekday}
        navigationLabel={navigationLabel}
        showFixedNumberOfWeeks
        minDetail="month"
        tileDisabled={tileDisabled}
        tileClassName={tileClassName}
        value={currentDate}
        minDate={minDate}
        maxDate={maxDate}
      />
    </SmallCalendarWrapper>
  );

  function getDates() {
    const dateRange = getDateRange(selectedDates);
    const today = new Date();
    return {
      ...dateRange,
      currentDate: getDateRangeDate(dateRange, today),
    };
  }

  function getTileClassName({ date }: CalendarTileProperties) {
    const isSelectedDate = selectedDates.some(
      selectedDate => compareDates(selectedDate, date) === 0,
    );
    return isSelectedDate ? 'react-calendar__tile--selected' : null;
  }
}

function formatMonth(_locale: string, date: Date) {
  return format(date, 'MMMM');
}

function formatShortWeekday(_locale: string, date: Date) {
  return format(date, 'ddd');
}

function navigationLabel({ date }: NavigationLabelProps) {
  return <Html html={t('components.smallCalendar.label', { date })} />;
}
interface NavigationLabelProps {
  date: Date;
}

function tileDisabled() {
  return true;
}
