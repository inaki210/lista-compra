import { handleRequest } from './apiClient.handleRequest';
import { apiClientInstance } from './apiClient.instance';
import { ApiClientConfig } from './apiClient.types';

export { get, post, getFile };

interface GetProps<Result> extends ApiClientConfig<Result> {
  path: string;
}

function get<Result>({ path, ...config }: GetProps<Result>) {
  return handleRequest(config, () => apiClientInstance.get<Result>(path));
}

interface PostProps<Result, Params> extends GetProps<Result> {
  params?: Params;
}

async function post<Result, Params = {}>({
  path,
  params,
  ...config
}: PostProps<Result, Params>) {
  return handleRequest(config, () =>
    apiClientInstance.post<Result>(path, params),
  );
}

async function getFile({ path, ...config }: GetProps<Blob>) {
  return handleRequest(config, () =>
    apiClientInstance.get<Blob>(path, {
      responseType: 'blob',
    }),
  );
}
