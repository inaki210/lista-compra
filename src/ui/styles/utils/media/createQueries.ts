import { queries } from './queries';
import { MediaQuery } from './queries.models';

export { createQueries };
export type Queries<Result> = { [key in keyof typeof queries]: Result };

function createQueries<Result>(create: (mediaQuery: MediaQuery) => Result) {
  return Object.keys(queries).reduce(
    (mq, query) => {
      mq[query] = create(queries[query]);
      return mq;
    },
    {} as Queries<Result>,
  );
}
