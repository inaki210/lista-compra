export interface ApiClientConfig<Result> {
  ignoreNotFoundError?: {
    value: Result;
  };
}
