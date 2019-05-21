export type Falsy = false | null | undefined;

// tslint:disable-next-line: no-any
export type TypedArrayBase = any[];

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
