import dayjs from 'dayjs';

export { parseDate, parseNumber, parseBoolean };

function parseDate(date: string) {
  return dayjs(date).toDate();
}

function parseNumber(value: string | number) {
  if (typeof value === 'string') {
    return parseInt(value, 10);
  }
  return value;
}

function parseBoolean(value: string | boolean) {
  if (typeof value === 'string') {
    return value.toUpperCase() === 'S';
  }
  return value;
}
