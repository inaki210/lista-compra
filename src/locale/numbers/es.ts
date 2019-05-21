import * as numeral from 'numeral';

numeral.register('locale', 'es', {
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
  ordinal: (value: number) => {
    switch (value % 10) {
      case 1:
      case 3:
        return 'er';
      case 2:
        return 'do';
      case 7:
      case 0:
        return 'mo';
      case 8:
        return 'vo';
      case 9:
        return 'no';
      default:
        return 'to';
    }
  },
  currency: {
    symbol: '€',
  },
});
