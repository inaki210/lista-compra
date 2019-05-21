import { dispatch } from '$core/domain/dispatch';
import { SiniestroParams } from '$core/domain/siniestros';
import {
  Factura,
  facturasResource,
  getFactura,
} from '$core/domain/siniestros/facturas';
import { downloadFile } from '$core/infraestructure/downloadFile';
import { format } from '$core/infraestructure/locale/format';

export { FacturasPresenter };

interface View {
  setFacturas(facturas: Factura[]): void;
}

const FacturasPresenter = {
  create(view: View) {
    return { onLoad, onFacturaClick };

    function onLoad(params: SiniestroParams) {
      const unregister = facturasResource.register(view.setFacturas);
      dispatch(() => facturasResource.load(params));
      return unregister;
    }

    function onFacturaClick(factura: Factura) {
      dispatch(async () => {
        const content = await getFactura(factura);
        downloadFile(content, `${factura.nombre}-${format(factura.fecha)}.pdf`);
      });
    }
  },
};
