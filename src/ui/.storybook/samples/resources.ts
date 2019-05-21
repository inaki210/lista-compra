import { select } from '@storybook/addon-knobs';

export { createSelectFolder };

const context = require.context('../../../locale/resources', true, /\.es\.ts$/);

const resources = context
  .keys()
  .map(key => key.replace(/(^\.\/)|(\.es\.ts$)/g, ''));

function createSelectFolder(folder: string, name: string) {
  const folderResources = resources
    .filter(resource => resource.startsWith(`${folder}/`))
    .map(resource => resource.substr(folder.length + 1));
  return () => select(name, folderResources, folderResources[0]);
}
