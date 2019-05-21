import { get } from '$core/infraestructure/locale/localeClient';
import { Infografia } from './infografias.types';

export { getInfografia };

function getInfografia(name: string) {
  return get<Infografia>(`infografias/${name}`, t => ({
    titulo: t('titulo'),
    descripcion: t('descripcion'),
    proceso: t('proceso', { returnObjects: true }),
  }));
}
