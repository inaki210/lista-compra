import { radios } from '@storybook/addon-knobs';
import { RenderFunction } from '@storybook/react';
import React from 'react';

import { setLocale } from '$core/infraestructure/locale/setLocale';
import { locales } from '$locale/locales';
import { Context } from '$ui/views/_components/Context';

export { appDecorator };

const appDecorator = (story: RenderFunction) => {
  const locale = radios('idioma', locales, locales[0]);
  setLocale(locale);
  return <Context>{story()}</Context>;
};
