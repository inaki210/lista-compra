import { createResource } from '$core/domain/createResource';
import { getTimelineApi, marcarLeidoApi } from './timeline.api';

export { timelineResource, marcarLeidoApi as marcarLeido };

const timelineResource = createResource(getTimelineApi);
