import { ActionParams } from './Action.models';

export { getParams };

const paramsPrefix = 'param-';

function getParams(attrs: ActionParams) {
  const params = {};
  Object.keys(attrs)
    .filter(key => key.startsWith(paramsPrefix))
    .forEach(key => {
      const name = key.substr(paramsPrefix.length);
      params[name] = attrs[key];
    });
  return params;
}
