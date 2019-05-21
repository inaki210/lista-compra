import { i18next } from './i18next';

export { format };

// tslint:disable-next-line:no-any
function format(value: any, formatKey?: string) {
  return i18next.format(value, formatKey);
}
