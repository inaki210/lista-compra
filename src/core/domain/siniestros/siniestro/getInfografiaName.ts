import { Ramo, TipoSiniestro } from '$core/domain/siniestros';
import { Siniestro } from './siniestro.types';

export { getInfografiaName };

function getInfografiaName(ramo: Ramo, siniestro: Siniestro) {
  switch (ramo) {
    case Ramo.hogar:
      return getInfografiaHogar(siniestro);
    case Ramo.comercio:
    case Ramo.comercio2:
    case Ramo.comercio3:
      return getInfografiaComercio(siniestro);
    default:
      return undefined;
  }
}

function getInfografiaHogar(siniestro: Siniestro) {
  switch (siniestro.tipoSiniestro) {
    case TipoSiniestro.siniestrosComunitariosSinDañosEnViviendaAsegurada:
      return 'hogar-comunidad';
    case TipoSiniestro.dañosPorAguaHogar:
      return 'hogar-agua';
    case TipoSiniestro.incendioOExplosion:
      return 'hogar-incendio-explosion';
    case TipoSiniestro.roboEnViviendaAsegurada:
      return 'hogar-robo';
    case TipoSiniestro.roturaEnCristales:
      return 'hogar-cristales';
    case TipoSiniestro.dañosElectricosPorSobretensionORayo:
      return siniestro.urgencia ? 'hogar-electricidad-urgencia' : undefined;
    case TipoSiniestro.actosVandalicos:
      return 'hogar-actos-vandalicos';
    case TipoSiniestro.nieveVientoGranizoHumo:
      return 'hogar-atmosfericos';
    case TipoSiniestro.extravioSustraccionLlavesOAperturaNoUrgenteDePuerta:
      return siniestro.urgencia
        ? 'hogar-cerrajeria-urgencia'
        : 'hogar-cerrajeria';
    case TipoSiniestro.deterioroDeAlimentosEnCamarasFrigorificas:
      return 'hogar-deterioro-alimentos';
    case TipoSiniestro.otrosDañosAccidentales:
      return 'hogar-danos-accidentales';
    case TipoSiniestro.atracoFueraDeVivienda:
      return 'hogar-atraco';
    case TipoSiniestro.servicioManitas:
      return 'hogar-manitas';
    case TipoSiniestro.asistenciaHogar:
      return 'hogar-asistencia';
    case TipoSiniestro.averiaDeElectrodomesticosODañosElectricos:
      return siniestro.incluyePiezas
        ? 'hogar-electrodomesticos-con'
        : 'hogar-electrodomesticos-sin';
    default:
      return undefined;
  }
}

function getInfografiaComercio(siniestro: Siniestro) {
  switch (siniestro.tipoSiniestro) {
    case TipoSiniestro.roboEnComercioAsegurado:
    case TipoSiniestro.expoliacionDeFondosDuranteSuTrasladoAEntidadBancaria:
    case TipoSiniestro.desperfectosPorRoboContinenteSinRoboContenido:
    case TipoSiniestro.desperfectosPorRoboContinenteYRoboContenido:
    case TipoSiniestro.roboContenido:
    case TipoSiniestro.expoliacionDeFondos:
      return 'comercio-robo';
    case TipoSiniestro.roturaDeRotulos:
      return 'comercio-cristales';
    case TipoSiniestro.nieveVientoOPedrisco:
    case TipoSiniestro.agentesAtmosfericos:
      return 'comercio-atmosfericos';
    case TipoSiniestro.deterioroDeBienesRefrigerados:
      return 'comercio-deterioro-congelados';
    case TipoSiniestro.roturaOAveriaDeMaquinariaOEquiposEletronicos:
    case TipoSiniestro.roturaEquiposElecctronicos:
      return 'comercio-rotura-equipos';
    case TipoSiniestro.dañosPorAguaComercio:
      return 'comercio-agua';
    case TipoSiniestro.sustitucionDeCerraduras:
      return 'comercio-cerrajeria';
    case TipoSiniestro.roturaDeMaquinaria:
      return 'comercio-danos-maquinaria';
    default:
      return undefined;
  }
}
