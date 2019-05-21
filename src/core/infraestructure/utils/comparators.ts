import { toDate } from './date';

export { compareNumbers, compareDateTimes, compareDates, compareStrings };

function compareNumbers(number1: number, number2: number) {
  return number1 - number2;
}

function compareDateTimes(date1: Date, date2: Date) {
  return compareNumbers(date1.getTime(), date2.getTime());
}

function compareDates(date1: Date, date2: Date) {
  return compareDateTimes(toDate(date1), toDate(date2));
}

function compareStrings(string1: string, string2: string) {
  if (string1 > string2) {
    return 1;
  }
  if (string1 < string2) {
    return -1;
  }
  return 0;
}
