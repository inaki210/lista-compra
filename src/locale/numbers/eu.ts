import * as numeral from 'numeral';

numeral.register('locale', 'eu', {
  delimiters: {
    thousands: '.',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'k',
    million: 'mm',
    billion: 'b',
    trillion: 't',
  },
  ordinal: (_value: number) => '.',
  currency: {
    symbol: '€',
  },
});
