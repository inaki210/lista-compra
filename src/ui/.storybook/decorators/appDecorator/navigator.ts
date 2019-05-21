import { action } from '@storybook/addon-actions';

import { noop } from '$core/infraestructure/utils/noop';
import { configureNavigator } from '$ui/navigator/navigator';

configureNavigator(() => ({
  goToState: action('navigator.goToState'),
  goToUrl: action('navigator.goToUrl'),
  goBack: action('navigation.goBack'),
  isActive: stateName => {
    action('navigator.isActive')(stateName);
    return false;
  },
  isCurrent: stateName => {
    action('navigator.isCurrent')(stateName);
    return false;
  },
  onStateChanged: callback => {
    action('navigator.onStateChanged')(callback);
    return noop;
  },
  current: () => {
    return { name: 'home', params: {} };
  },
}));
