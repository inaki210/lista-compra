import dayjs from 'dayjs';

import { i18nextInstance } from './i18nextInstance';

export { formatter };

function formatter(
  // tslint:disable-next-line:no-any
  value: any,
  formatKey: string = 'default',
) {
  if (typeof value === 'number') {
    const format = getFormat('number', formatKey);
    return numeral(value).format(format);
  }
  if (value instanceof Date) {
    const format = getFormat('date', formatKey);
    return dayjs(value).format(format);
  }
  return `${value}`;
}

function getFormat(context: string, formatKey: string) {
  return i18nextInstance.t(`format.${context}.${formatKey}`, {
    defaultValue: formatKey,
  });
}
