import { get, post } from '$core/infraestructure/apiClient';
import { map, Mapping } from '$core/infraestructure/mapper';
import { Profile } from './session.models';
import { Params, Token } from './session.types';

export { login, userProfile };

async function login(origen: string, params: Params) {
  const token = await post({
    path: `auth/${origen}/login`,
    params,
  });
  return map(token, tokenMappings);
}

const tokenMappings: Mapping<Token> = {
  object: {
    type: 'tokenType',
    value: 'accessToken',
  },
};

async function userProfile(userName: string) {
  const profile = await get({
    path: `auth/users/${userName}/profile`,
  });
  return map(profile, profileMappings);
}

const profileMappings: Mapping<Profile> = {
  object: {
    name: 'name',
    lastName: 'lastname',
    nif: 'nif',
    mobile: 'mobile',
    locale: {
      name: 'language',
      transform: language => {
        switch (language) {
          case 'eu':
            return 'eu';
          default:
            return 'es';
        }
      },
    },
  },
};
