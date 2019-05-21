import { createPassthroughNavigator } from './createPassthroughNavigator';
import { Events } from './passthroughNavigator.events';

export { passthroughNavigatorServer, passthroughNavigatorClient };

const passthroughNavigatorServer = createPassthroughNavigator(
  Events.onServerStateChangedEvent,
  Events.onClientStateChangedEvent,
);
const passthroughNavigatorClient = createPassthroughNavigator(
  Events.onClientStateChangedEvent,
  Events.onServerStateChangedEvent,
);
