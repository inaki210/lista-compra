import { dispatch } from '$core/domain/dispatch';
import { SiniestroParams } from '$core/domain/siniestros';
import {
  Siniestro,
  siniestroResource,
} from '$core/domain/siniestros/siniestro';

export { SiniestroLoaderPresenter };

interface View {
  setSiniestro(siniestro: Siniestro): void;
}

const SiniestroLoaderPresenter = {
  create(view: View) {
    return { onLoaded };

    function onLoaded(params: SiniestroParams) {
      const unregisterSiniestro = siniestroResource.register(view.setSiniestro);
      dispatch(() => siniestroResource.load(params));
      return unregisterSiniestro;
    }
  },
};
