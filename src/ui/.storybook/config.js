import { configure, addParameters, addDecorator } from '@storybook/react';
import { parameters } from './parameters';
import { appDecorator } from './decorators/appDecorator';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

addParameters(parameters);
addDecorator(appDecorator);
addDecorator(withKnobs);
addDecorator(withA11y);
configure(loadStories, module);

function loadStories() {
  require('./wellcomeStory');
  const stories = require.context('../', true, /\.stories\.tsx?$/);
  stories.keys().forEach(stories);
}
