import { config } from '$config';
import {
  clearAuthorization,
  setAuthorization,
} from '$core/infraestructure/apiClient/authorizationInterceptor';
import { createAppError } from '$core/infraestructure/createAppError';
import { createEvents } from '$core/infraestructure/utils/events';
import { login as apiLogin, userProfile } from './session.api';
import { Params, Token, User } from './session.types';
import { getSession } from './session.utils';

export {
  loadAuthentication,
  isAuthenticated,
  currentUser,
  login,
  authenticate,
  logout,
  onAuthenticationChanged,
};

let user: User | null = null;
const events = createEvents();
const onAuthenticated = 'onAuthenticated';
const sessionTokenKey = 'session_token';

function loadAuthentication() {
  if (config.isIntegrated) {
    return;
  }
  const token = loadToken();
  if (token) {
    authenticate(token);
  } else {
    logout();
  }
}

function isAuthenticated() {
  return !!user;
}

function currentUser() {
  if (!user) {
    throw createAppError('SessionStore', 'not authenticated');
  }
  return user;
}

async function login(origen: string, params: Params) {
  const token = await apiLogin(origen, params);
  return authenticate(token);
}

async function authenticate(token: Token) {
  if (!config.isIntegrated) {
    saveToken(token);
  }
  setAuthorization(token.type, token.value);
  const session = getSession(token);
  const profile = await userProfile(session.userName);
  user = { ...session, ...profile };
  events.emit(onAuthenticated);
}

function logout() {
  clearAuthorization();
  if (!config.isIntegrated) {
    clearToken();
  }
  user = null;
  events.emit(onAuthenticated);
}

function onAuthenticationChanged(callback: () => void) {
  return events.on(onAuthenticated, callback);
}

function loadToken(): Token | null {
  const value = sessionStorage.getItem(sessionTokenKey);
  return value && JSON.parse(value);
}

function saveToken(token: Token) {
  const value = JSON.stringify(token);
  sessionStorage.setItem(sessionTokenKey, value);
}

function clearToken() {
  sessionStorage.removeItem(sessionTokenKey);
}
