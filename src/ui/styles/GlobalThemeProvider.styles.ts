import normalizeCss from 'normalize.css';

import { createFonts } from './fonts';
import { createGlobalStyle } from './styledComponents';

export { GlobalThemeProviderScopeName, GlobalThemeProviderStyles };

const GlobalThemeProviderScopeName = 'laps-styles-scope';

const GlobalThemeProviderStyles = createGlobalStyle`
  ${p => createFonts(p.theme.font.family)}

  ${GlobalThemeProviderScopeName} {
    ${normalizeCss}

    *,
    *::before,
    *::after {
      box-sizing: initial;
      padding: 0;
      margin: 0;
      vertical-align: initial;
      list-style: none;
    }

    input[type="button"],
    input[type="submit"],
    button,
    a {
      cursor: pointer;
    }

    display: block;
    font-family: ${p => p.theme.font.family.base};
    font-weight: ${p => p.theme.font.weight.normal};
    font-size: ${p => p.theme.font.size.base}px;
    line-height: ${p => p.theme.lineHeight.base};
    color: ${p => p.theme.colors.magentaOscuro2};
  }
`;
