import {
  css,
  ThemedCssParameters,
  ThemedStyledProps,
} from '$ui/styles/styledComponents';
import { createQueries } from './createQueries';
import { MediaQuery } from './queries.models';

export { media };

const media = createQueries(create);

function create(createQuery: MediaQuery) {
  return <Props extends object>(...args: ThemedCssParameters<Props>) =>
    createPropsMedia<Props>(createQuery, ...args);
}

function createPropsMedia<Props extends object>(
  createQuery: MediaQuery,
  ...args: ThemedCssParameters<Props>
) {
  return (props: ThemedStyledProps<Props>) => {
    const query = createQuery(props.theme);
    return createMedia<Props>(query, ...args);
  };
}

function createMedia<Props extends object>(
  query: string,
  ...args: ThemedCssParameters<Props>
) {
  return css`
    @media ${query} {
      ${css(...args)}
    }
  `;
}
