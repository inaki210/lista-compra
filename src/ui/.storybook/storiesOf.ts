import { storiesOf as storiesOfOriginal } from '@storybook/react';

export { storiesOf };

const storiesOf = (name: string, module: NodeModule) => {
  const storyName = getStoryName(name, module);
  return storiesOfOriginal(storyName, module);
};

const regexp = /^\.\/src\/ui\/([^/]+)\/(.+\/)?([^/]+)\/[^/]+$/;

function getStoryName(name: string, module: NodeModule) {
  const matches = module.id.match(regexp);
  if (!matches) {
    return name;
  }
  const [, base, path = '', component] = matches;
  const storyName = `${base}/${path}${component}`;
  if (name !== component) {
    return `${storyName}.${name}`;
  }
  return storyName;
}
