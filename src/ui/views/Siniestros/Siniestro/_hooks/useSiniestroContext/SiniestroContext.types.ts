import { SiniestroParams } from '$core/domain/siniestros';
import { Siniestro } from '$core/domain/siniestros/siniestro';

export interface SiniestroContextValue {
  params: SiniestroParams;
  siniestro: Siniestro;
}
