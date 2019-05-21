import { action } from '@storybook/addon-actions';

import { noop } from '$core/infraestructure/utils/noop';
import { facturas } from '$ui/.storybook/samples/facturas';
import { FacturasPresenter } from './Facturas.presenter';

FacturasPresenter.create = view => ({
  onLoad: () => {
    view.setFacturas(facturas);
    return noop;
  },
  onFacturaClick: action('onFacturaClick'),
});
