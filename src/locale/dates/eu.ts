import dayjs from 'dayjs';

const locale = {
  name: 'eu',
  weekdays: [
    'igandea',
    'astelehena',
    'asteartea',
    'asteazkena',
    'osteguna',
    'ostirala',
    'larunbata',
  ],
  weekdaysShort: ['ig.', 'al.', 'ar.', 'az.', 'og.', 'ol.', 'lr.'],
  weekdaysMin: ['ig', 'al', 'ar', 'az', 'og', 'ol', 'lr'],
  weekStart: 1,
  months: [
    'urtarrila',
    'otsaila',
    'martxoa',
    'apirila',
    'maiatza',
    'ekaina',
    'uztaila',
    'abuztua',
    'iraila',
    'urria',
    'azaroa',
    'abendua',
  ],
  monthsShort: [
    'urt.',
    'ots.',
    'mar.',
    'api.',
    'mai.',
    'eka.',
    'uzt.',
    'abu.',
    'ira.',
    'urr.',
    'aza.',
    'abe.',
  ],
  relativeTime: {
    future: '%s barru',
    past: 'duela %s',
    s: 'segundo batzuk',
    m: 'minutu bat',
    mm: '%d minutu',
    h: 'ordu bat',
    hh: '%d ordu',
    d: 'egun bat',
    dd: '%d egun',
    M: 'hilabete bat',
    MM: '%d hilabete',
    y: 'urte bat',
    yy: '%d urte',
  },
  ordinal: (n: number) => `${n}.`,
};

dayjs.locale(locale, undefined, true);
