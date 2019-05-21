import { compareDates } from './comparators';

export {
  toDate,
  addDays,
  getMinDate,
  getMaxDate,
  getDateRange,
  getDateRangeDate,
};

function toDate(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function addDays(date: Date, days: number) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
}

function getMinDate(date1: Date | undefined, date2: Date | undefined) {
  const { minDate } = createDateRange(date1, date2);
  return minDate;
}

function getMaxDate(date1: Date | undefined, date2: Date | undefined) {
  const { maxDate } = createDateRange(date1, date2);
  return maxDate;
}

function createDateRange(date1: Date | undefined, date2: Date | undefined) {
  if (!date1) {
    return { minDate: date2, maxDate: date2 };
  }
  if (!date2) {
    return { minDate: date1, maxDate: date1 };
  }
  if (isBefore(date1, date2)) {
    return { minDate: date1, maxDate: date2 };
  }
  return { minDate: date2, maxDate: date1 };
}

function getDateRangeDate({ minDate, maxDate }: DateRange, date: Date) {
  if (minDate && isBefore(date, minDate)) {
    return minDate;
  }
  if (maxDate && isBefore(maxDate, date)) {
    return maxDate;
  }
  return date;
}

function isBefore(date1: Date, date2: Date) {
  return compareDates(date1, date2) < 0;
}

function getDateRange(dates: (Date | DateRange)[]) {
  const dateRange: DateRange = {};
  dates.forEach(date => {
    const { minDate, maxDate } =
      date instanceof Date ? { minDate: date, maxDate: date } : date;
    dateRange.minDate = getMinDate(dateRange.minDate, minDate);
    dateRange.maxDate = getMaxDate(dateRange.maxDate, maxDate);
  });
  return dateRange;
}

export interface DateRange {
  minDate?: Date;
  maxDate?: Date;
}
