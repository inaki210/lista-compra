import { Theme } from '$ui/styles/theme';
import { createQueries } from './createQueries';
import { MediaQuery } from './queries.models';

export { matchMedia };

const matchMedia = createQueries(create);

function create(createQuery: MediaQuery) {
  return (theme: Theme) => {
    const query = createQuery(theme);
    return window.matchMedia(query);
  };
}
