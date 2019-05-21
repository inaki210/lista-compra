import { css } from '../styledComponents';
import { Font, Fonts } from './fonts.types';
import { fontsFamilies } from './fontsFamilies';

export { createFonts };

function createFonts(fonts: Fonts) {
  return css`
    ${Object.keys(fonts).map(name => createFontsGroup(fonts[name]))}
  `;
}

function createFontsGroup(names: string) {
  return css`
    ${names
      .trim()
      .split(/\s*,\s*/)
      .map(createFontFamily)}
  `;
}

function createFontFamily(family: string) {
  const fonts = fontsFamilies[family];
  return (
    fonts &&
    css`
      ${fonts.map(font => createWebFont(family, font))}
    `
  );
}

function createWebFont(family: string, font: Font) {
  const [eot, ttf, svg, woff, woff2] = webFontUrls(font.name);
  return css`
    @font-face {
      font-family: '${family}';
      src: url('${eot}');
      src: url('${eot}?#iefix') format('embedded-opentype'),
        url('${woff2}') format('woff2'),
        url('${woff}') format('woff'),
        url('${ttf}') format('truetype'),
        url('${svg}#${font.name}regular') format('svg');
      font-weight: ${font.weight || 'normal'};
      font-style: ${font.style || 'normal'};
    }
  `;
}

function webFontUrls(fontName: string) {
  return ['eot', 'ttf', 'svg', 'woff', 'woff2'].map(extension =>
    fontsContext(`./${fontName}-webfont.${extension}`),
  );
}

const fontsContext = require.context('.', false, /\.(eot|ttf|woff2?|svg)$/);
