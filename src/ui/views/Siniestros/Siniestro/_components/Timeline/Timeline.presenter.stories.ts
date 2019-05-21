import { noop } from '$core/infraestructure/utils/noop';
import { timeline } from '$ui/.storybook/samples/timeline';
import { TimelinePresenter } from './Timeline.presenter';

TimelinePresenter.create = view => ({
  onLoad: () => {
    view.setTimeline(timeline);
    return noop;
  },
});
