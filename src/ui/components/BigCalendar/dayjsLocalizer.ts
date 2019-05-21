import dayjs from 'dayjs';
import { Formats } from 'react-big-calendar';
import { DateLocalizer } from 'react-big-calendar/lib/localizer';

import { format } from '$core/infraestructure/locale/format';

export { dayjsLocalizer };

const dayjsLocalizer = new DateLocalizer({
  formats: createFormats(),
  firstOfWeek,
  format,
});

function createFormats(): Formats {
  return {
    dateFormat: 'D',
    weekdayFormat: 'ddd',
    monthHeaderFormat: 'MMMMYYYY',
    dayHeaderFormat: 'L',
  };
}

function firstOfWeek() {
  return dayjs()
    .startOf('week')
    .day();
}
