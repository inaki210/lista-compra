import { config } from '$config';
import { Ramo } from '$core/domain/siniestros';
import { log } from '$core/infraestructure/log';
import { startCall as startCallApi } from './callMeBack.api';

export { startCall, getOperatorCode };

const successResultPattern = /^ok$/i;

async function startCall(operatorCode: string, userPhone: string) {
  const result = await startCallApi(
    operatorCode,
    userPhone,
    config.callMeBack.propagate,
  );
  if (!successResultPattern.test(result)) {
    log.error('CallMeBack', 'startCall error', result);
    return false;
  }
  return true;
}

function getOperatorCode(ramo: Ramo) {
  switch (ramo) {
    case Ramo.hogar:
    case Ramo.comercio:
    case Ramo.comercio2:
    case Ramo.comercio3:
      return config.callMeBack.codigos.hogarYComercio;
    default:
      return undefined;
  }
}
