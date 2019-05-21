import { HTMLReactParserOptions } from 'html-react-parser';
import { ReactNode } from 'react';

export interface Replace {
  (props: ReplaceProps): ReplaceResult;
}

export type ReplaceResult = ReturnType<HTMLReactParserOptions['replace']>;

export interface ReplaceProps {
  tag: string;
  attrs: HtmlAttributes;
  children: () => ReactNode;
}

export interface HtmlAttributes {
  [name: string]: string;
}
