import dayjs from 'dayjs';
import React, { useCallback, useMemo } from 'react';
import { ToolbarProps } from 'react-big-calendar';

import { DateRange } from '$core/infraestructure/utils/date';
import {
  BigCalendarToolbarLink,
  BigCalendarToolbarLinkImage,
  BigCalendarToolbarTitle,
  BigCalendarToolbarWrapper,
} from './BigCalendarToolbar.styles';

export { BigCalendarToolbar };

interface Props extends ToolbarProps, DateRange {}

function BigCalendarToolbar({
  label,
  onNavigate,
  date,
  minDate,
  maxDate,
}: Props) {
  const prevLinkDisabled = useMemo(createPrevLinkDisabled, [date, minDate]);
  const nextLinkDisabled = useMemo(createNextLinkDisabled, [date, maxDate]);
  const handleNativateToPrev = useCallback(onNavigateToPrev, [onNavigate]);
  const handleNativateToNext = useCallback(onNavigateToNext, [onNavigate]);

  return (
    <BigCalendarToolbarWrapper>
      <BigCalendarToolbarLink
        onClick={handleNativateToPrev}
        disabled={prevLinkDisabled}
      >
        <BigCalendarToolbarLinkImage name="flecha-izquierda.svg" />
      </BigCalendarToolbarLink>
      <BigCalendarToolbarTitle>{label}</BigCalendarToolbarTitle>
      <BigCalendarToolbarLink
        onClick={handleNativateToNext}
        disabled={nextLinkDisabled}
      >
        <BigCalendarToolbarLinkImage name="flecha-derecha.svg" />
      </BigCalendarToolbarLink>
    </BigCalendarToolbarWrapper>
  );

  function createPrevLinkDisabled() {
    return minDate && !dayjs(minDate).isBefore(date, 'month');
  }

  function createNextLinkDisabled() {
    return maxDate && !dayjs(maxDate).isAfter(date, 'month');
  }

  function onNavigateToPrev() {
    onNavigate('PREV');
  }

  function onNavigateToNext() {
    onNavigate('NEXT');
  }
}
