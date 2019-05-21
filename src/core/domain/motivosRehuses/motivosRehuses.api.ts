import { get } from '$core/infraestructure/locale/localeClient';
import { MotivosRehuse } from './motivosRehuses.types';

export { getMotivosRehuse };

function getMotivosRehuse(name: string) {
  return get<MotivosRehuse>(`motivosRehuses/${name}`, t => ({
    titulo: t('titulo'),
    descripcion: t('descripcion'),
  }));
}
