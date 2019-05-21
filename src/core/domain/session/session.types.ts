import { Profile, Session } from './session.models';

export interface Params {
  [name: string]: string;
}

export interface Token {
  type: string;
  value: string;
}

export interface User extends Session, Profile {}
