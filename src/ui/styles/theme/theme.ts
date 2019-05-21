import { darken, lighten, rgba } from 'polished';

export { theme };
export type Theme = typeof theme;

const baseSpace = 26;

const theme = {
  breakpoints: {
    mediumMobile: 426,
    largeMobile: 520,
    phablet: 625,
    tablet: 768,
    mediumDesktop: 992,
    desktop: 1024,
    largeDesktop: 1200,
  },

  colors: {
    background: 'white',

    magenta: '#a50050',
    magentaOscuro: '#7b0b56',
    magentaOscuro2: '#48194d',
    magentaClaro: '#db99b8',
    magentaClaro2: rgba('#a50050', 0.07),

    berenjena: '#51284f',

    verde: '#84bd00',
    verdeClaro: lighten(0.05, '#84bd00'),
    verdeClaro2: '#daebb0',
    verdeOscuro: '#669200',

    gris: '#999999',
    grisClaro: '#cccccc',
    grisClaro2: '#fefefe',
    grisClaro3: '#eeeeee',
    grisOscuro: '#666666',
    grisOscuro2: '#555555',

    beige: '#eae7e0',
    beigeClaro: '#f5f5f1',
    beigeOscuro: '#e3e1d7',
    beigeOscuro2: '#c1bdb3',
    beigeOscuro3: '#cdc6b5',

    rojo: '#e10000',
    rojoClaro: darken(0.45, '#fbc6be'),
    rojoClaro2: '#fbc6be',
    rojoClaro3: '#f6e5eb',

    amarillo: '#fff9dc',
    amarilloClaro: lighten(0.05, '#fff9dc'),
    amarilloOscuro: '#cf9d00',
    amarilloOscuro2: darken(0.05, '#fff9dc'),
  },

  font: {
    family: {
      base: 'laps-newjune, Arial, sans-serif',
      otro: 'otra-fuente',
    },
    size: {
      h1: 30,
      h2: 24,
      h3: 17,
      large: 15,
      base: 13,
      xsmall: 12,
      xxsmall: 10,
    },
    weight: {
      normal: 400,
      semibold: 600,
      bold: 'bold',
    },
  },

  lineHeight: {
    base: 20 / 14,
  },

  baseSpace: {
    xxsm: baseSpace / 6,
    xsm: baseSpace / 3,
    sm: baseSpace / 2,
    base: baseSpace,
    md: baseSpace * 1.5,
    lg: baseSpace * 2,
    xlg: baseSpace * 3,
  },
};
