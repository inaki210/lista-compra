import { create } from '@storybook/theming';

import { theme } from '$ui/styles/theme';

export { parameters };

const parameters = {
  options: {
    name: 'Mezu Front',
    theme: create({
      base: 'light',
      brandTitle: 'Mezu Front',
    }),
  },
  backgrounds: [{ name: 'aside', value: theme.colors.beigeClaro }],
};
