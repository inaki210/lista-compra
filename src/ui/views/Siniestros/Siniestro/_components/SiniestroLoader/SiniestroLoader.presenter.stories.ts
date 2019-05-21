import { noop } from '$core/infraestructure/utils/noop';
import { siniestro } from '$ui/.storybook/samples/siniestro';
import { SiniestroLoaderPresenter } from './SiniestroLoader.presenter';

SiniestroLoaderPresenter.create = view => ({
  onLoaded: () => {
    view.setSiniestro(siniestro);
    return noop;
  },
});
