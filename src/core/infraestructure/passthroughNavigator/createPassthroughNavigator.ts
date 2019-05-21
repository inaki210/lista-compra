import { ExternalNavigator } from '$core/infraestructure/navigator';
import { Events, events } from './passthroughNavigator.events';

export { createPassthroughNavigator };

function createPassthroughNavigator(
  goToStateEvent: Events,
  onStateChangedEvend: Events,
): ExternalNavigator {
  return {
    goToState: (state, params) => events.emit(goToStateEvent, state, params),
    onStateChanged: callback => events.on(onStateChangedEvend, callback),
  };
}
