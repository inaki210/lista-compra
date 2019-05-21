import * as styledComponents from 'styled-components';

import { Theme } from './theme';

export { styled, css, keyframes, createGlobalStyle, ThemeContext };

const {
  default: styled,
  css,
  keyframes,
  createGlobalStyle,
  ThemeContext,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export type ThemedStyledProps<Props> = styledComponents.ThemedStyledProps<
  Props,
  Theme
>;

type ThemedCssFunction<Props extends object> = {
  (
    first:
      | TemplateStringsArray
      | styledComponents.CSSObject
      | styledComponents.InterpolationFunction<ThemedStyledProps<Props>>,
    ...interpolations: Array<
      styledComponents.Interpolation<ThemedStyledProps<Props>>
    >
  ): styledComponents.FlattenInterpolation<ThemedStyledProps<Props>>;
};

export type ThemedCssParameters<Props extends object> = Parameters<
  ThemedCssFunction<Props>
>;
