import dayjs from 'dayjs';
import React from 'react';

import { storiesOf } from '$ui/.storybook/storiesOf';
import { SmallCalendar } from './SmallCalendar';

storiesOf('SmallCalendar', module).add('default', () => (
  <SmallCalendar selectedDates={selectedDates} />
));

const selectedDates = [
  dayjs()
    .subtract(4, 'day')
    .toDate(),
  dayjs()
    .subtract(3, 'day')
    .toDate(),
  dayjs()
    .subtract(2, 'day')
    .toDate(),
  dayjs().toDate(),
  dayjs()
    .add(1, 'day')
    .toDate(),
  dayjs()
    .add(2, 'day')
    .toDate(),
  dayjs()
    .add(3, 'day')
    .toDate(),
  dayjs()
    .add(4, 'day')
    .toDate(),
  dayjs()
    .add(5, 'day')
    .toDate(),
];
