import React, { createElement } from 'react';

import {
  GlobalThemeProviderScopeName,
  GlobalThemeProviderStyles,
} from './GlobalThemeProvider.styles';
import { ThemeContext } from './styledComponents';
import { theme } from './theme';

export { GlobalThemeProvider };

interface Props {
  children: React.ReactNode;
}

function GlobalThemeProvider({ children }: Props) {
  return (
    <ThemeContext.Provider value={theme}>
      <GlobalThemeProviderStyles />
      {createElement(GlobalThemeProviderScopeName, undefined, children)}
    </ThemeContext.Provider>
  );
}
