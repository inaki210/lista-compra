import { Theme } from '$ui/styles/theme';

export interface MediaQueries {
  [key: string]: MediaQuery;
}

export interface MediaQuery {
  (theme: Theme): string;
}
