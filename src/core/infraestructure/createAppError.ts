export { createAppError, isAppError };

function createAppError<Params>(
  context: string,
  name: string,
  params?: Params,
): AppError<Params> {
  return { context, name, params };
}

// tslint:disable-next-line:no-any
function isAppError(error: any): error is AppError<any> {
  return !!error.context && !!error.name;
}

export interface AppError<Params> {
  readonly context: string;
  readonly name: string;
  readonly params?: Params;
}
