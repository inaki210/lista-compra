import dayjs from 'dayjs';
import React from 'react';

import { storiesOf } from '$ui/.storybook/storiesOf';
import { BigCalendar } from './BigCalendar';

storiesOf('BigCalendar', module).add('default', () => (
  <BigCalendar events={events} />
));

const indexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const events = [
  {
    title: 'Evento completado',
    description: 'detalle evento completado',
    start: dayjs()
      .subtract(5, 'day')
      .toDate(),
    end: dayjs()
      .subtract(1, 'day')
      .toDate(),
  },
  ...indexes.map(index => ({
    title: `Evento ${index}`,
    description: `detalle evento ${index}`,
    start: dayjs()
      .add(index, 'day')
      .toDate(),
    end: dayjs()
      .add(index + 4, 'day')
      .toDate(),
  })),
];
