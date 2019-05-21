import { FontStyleProperty, FontWeightProperty } from 'csstype';

export interface FontsFamilies {
  [name: string]: Font[];
}

export interface Font {
  name: string;
  weight?: FontWeightProperty;
  style?: FontStyleProperty;
}

export interface Fonts {
  [name: string]: string;
}
