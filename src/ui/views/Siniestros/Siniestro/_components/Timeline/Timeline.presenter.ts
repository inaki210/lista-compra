import { dispatch } from '$core/domain/dispatch';
import { SiniestroParams } from '$core/domain/siniestros';
import {
  marcarLeido,
  Timeline,
  TimelineEntry,
  timelineResource,
} from '$core/domain/siniestros/timeline';

export { TimelinePresenter };

const tiempoEsperaParaMarcarLeido = 3000;

interface View {
  setTimeline(timeline: Timeline): void;
}

const TimelinePresenter = {
  create(view: View) {
    let marcarLeidosTimeoutId: NodeJS.Timeout | null = null;

    return { onLoad };

    function onLoad(params: SiniestroParams) {
      const unregister = loadTimeline(params, timeline =>
        setTimeline(params, timeline),
      );
      return () => {
        unregister();
        cancelarMarcarLeidos();
      };
    }

    function setTimeline(params: SiniestroParams, timeline: Timeline) {
      cancelarMarcarLeidos();
      view.setTimeline(timeline);
      marcarLeidosTimeoutId = setTimeout(
        () => marcarLeidos(params, timeline),
        tiempoEsperaParaMarcarLeido,
      );
    }

    function cancelarMarcarLeidos() {
      if (marcarLeidosTimeoutId) {
        clearTimeout(marcarLeidosTimeoutId);
        marcarLeidosTimeoutId = null;
      }
    }
  },
};

function loadTimeline(
  params: SiniestroParams,
  setTimeline: (timeline: Timeline) => void,
) {
  const unregister = timelineResource.register(setTimeline);
  dispatch(() => timelineResource.load(params));
  return unregister;
}

function marcarLeidos(params: SiniestroParams, timeline: Timeline) {
  timeline.filter(entry => !entry.leido).forEach(dispatchMarcarLeido);

  function dispatchMarcarLeido(entry: TimelineEntry) {
    dispatch(() => marcarLeido(params, entry.id));
  }
}
