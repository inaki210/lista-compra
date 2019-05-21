import { Locale } from '$locale/locales';

export interface Session {
  userName: string;
  roles: string[];
}

export interface Profile {
  name: string;
  lastName: string;
  nif: string;
  mobile: string;
  locale: Locale;
}
