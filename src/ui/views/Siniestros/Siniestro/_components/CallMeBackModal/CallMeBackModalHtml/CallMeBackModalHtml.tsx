import React from 'react';

import { Html, ReplaceProps } from '$ui/components/Html';
import { CallMeBackModalHtmlTelefono } from './CallMeBackModalHtml.styles';

export { CallMeBackModalHtml };

interface Props {
  html: string;
}

function CallMeBackModalHtml({ html }: Props) {
  return <Html html={html} onReplace={onReplace} />;
}

function onReplace({ tag, attrs, children }: ReplaceProps) {
  switch (tag) {
    case 'a':
      return (
        <CallMeBackModalHtmlTelefono {...attrs}>
          {children()}
        </CallMeBackModalHtmlTelefono>
      );
    default:
      return false;
  }
}
