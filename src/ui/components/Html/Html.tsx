import parseHtml, {
  DomElement,
  HTMLReactParserOptions,
} from 'html-react-parser';
import parseDom from 'html-react-parser/lib/dom-to-react';
import React, { useMemo } from 'react';

import { Link } from '$ui/components/Link';
import { Paragraph } from '$ui/components/Paragraph';
import { Strong } from '$ui/components/Strong';
import { Replace, ReplaceProps, ReplaceResult } from './Html.types';

export { Html };

interface Props {
  html: string;
  onReplace?: Replace;
}

function Html({ html, onReplace }: Props) {
  const parseOptions = useMemo(createParseOptions, [onReplace]);
  return <>{parseHtml(html, parseOptions)}</>;

  function createParseOptions() {
    const replace: Replace = onReplace || (() => false);
    const options: HTMLReactParserOptions = {
      replace: node => replaceNode(node, options, replace),
    };
    return options;
  }
}

function replaceNode(
  { type, name, attribs, children }: DomElement,
  options: HTMLReactParserOptions,
  replace: Replace,
) {
  if (type !== 'tag' || !name) {
    return false;
  }
  const renderProps = {
    tag: name,
    attrs: attribs || {},
    children: () => children && parseDom(children, options),
  };
  return replace(renderProps) || replaceDefaults(renderProps);
}

function replaceDefaults({
  tag,
  attrs,
  children,
}: ReplaceProps): ReplaceResult {
  switch (tag) {
    case 'a':
      return <Link {...attrs}>{children()}</Link>;
    case 'p':
      return <Paragraph {...attrs}>{children()}</Paragraph>;
    case 'b':
    case 'strong':
      return <Strong {...attrs}>{children()}</Strong>;
    default:
      return false;
  }
}
