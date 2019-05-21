import { decodePayload } from '$core/infraestructure/jwt/decodePayload';
import { map, Mapping } from '$core/infraestructure/mapper';
import { Session } from './session.models';
import { Token } from './session.types';

export { getSession };

function getSession(token: Token) {
  const payload = decodePayload(token.value);
  return map(payload, mappings);
}

const mappings: Mapping<Session> = {
  object: {
    userName: 'sub',
    roles: 'roles',
  },
};
