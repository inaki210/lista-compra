import dayjs from 'dayjs';

import { Agenda } from '$core/domain/siniestros/siniestro';

export { agenda };

const agenda: Agenda = [
  {
    id: '1',
    nombre: 'Pintor Aranaberri',
    fechaInicio: dayjs()
      .subtract(2, 'day')
      .toDate(),
    fechaFin: dayjs()
      .subtract(1, 'day')
      .toDate(),
  },
  {
    id: '2',
    nombre: 'Electricista Albéniz',
    fechaInicio: dayjs()
      .subtract(1, 'day')
      .toDate(),
    fechaFin: dayjs()
      .add(3, 'day')
      .toDate(),
  },
  {
    id: '3',
    nombre: 'Carpintero Luján',
    fechaInicio: dayjs()
      .add(1, 'day')
      .toDate(),
    fechaFin: dayjs()
      .add(5, 'day')
      .toDate(),
  },
];
