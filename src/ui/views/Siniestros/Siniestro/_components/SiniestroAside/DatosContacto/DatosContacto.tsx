import React from 'react';

import { t } from '$core/infraestructure/locale/t';
import { hasItems } from '$core/infraestructure/utils/array';
import {
  useSiniestroContext,
} from '$ui/views/Siniestros/Siniestro/_hooks/useSiniestroContext';
import { DatosContactoTitle } from './DatosContacto.styles';
import { GrupoContactos } from './GrupoContactos';

export { DatosContacto };

function DatosContacto() {
  const { siniestro } = useSiniestroContext();
  const { tramitadores = [], peritos = [], reparadores = [] } = siniestro;
  const mostrarTramitadores = hasItems(tramitadores);
  const mostrarPeritos = hasItems(peritos);
  const mostrarReparadores = hasItems(reparadores);
  const mostrarContacto =
    mostrarTramitadores || mostrarPeritos || mostrarReparadores;

  if (!mostrarContacto) {
    return null;
  }

  return (
    <>
      <DatosContactoTitle>
        {t('siniestros.datosContacto.titulo')}
      </DatosContactoTitle>
      {mostrarTramitadores && (
        <GrupoContactos
          titulo={t('siniestros.datosContacto.tuTramitadorEs', {
            count: tramitadores.length,
          })}
          contacto={tramitadores}
        />
      )}
      {mostrarPeritos && (
        <GrupoContactos
          titulo={t('siniestros.datosContacto.tuPeritoEs', {
            count: peritos.length,
          })}
          contacto={peritos}
        />
      )}
      {mostrarReparadores && (
        <GrupoContactos
          titulo={t('siniestros.datosContacto.tuReparadorEs', {
            count: reparadores.length,
          })}
          contacto={reparadores}
        />
      )}
    </>
  );
}
