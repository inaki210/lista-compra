import { StateParams } from '$core/infraestructure/navigator';
import { createEvents } from '$core/infraestructure/utils/events';

export { events };

const events = createEvents<Events, [string, StateParams?]>();

export enum Events {
  onServerStateChangedEvent = 'onServerStateChangedEvent',
  onClientStateChangedEvent = 'onClientStateChangedEvent',
}
