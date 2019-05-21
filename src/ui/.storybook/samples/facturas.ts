import { Factura } from '$core/domain/siniestros/facturas';

export { facturas };

const facturas: Factura[] = [
  {
    id: '1',
    nombre: 'Javier Vidal Lecumberri',
    fecha: new Date(2019, 3, 25),
    enlace: '/siniestros/factura/1/1',
  },
  {
    id: '2',
    nombre: 'Electricidad Gurmendi',
    fecha: new Date(2019, 3, 25),
    enlace: '/siniestros/factura/2/1',
  },
  {
    id: '3',
    nombre: 'Carpintería Azkona',
    fecha: new Date(2019, 3, 25),
    enlace: '/siniestros/factura/3/1',
  },
  {
    id: '4',
    nombre: 'Fontanería Pérez',
    fecha: new Date(2019, 3, 25),
    enlace: '/siniestros/factura/4/1',
  },
  {
    id: '5',
    nombre: 'Aznar cocinas',
    fecha: new Date(2019, 3, 25),
    enlace: '/siniestros/factura/5/1',
  },
];
