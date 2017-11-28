/**
 * The type of all values; nothing is known about it a priori
 * except that it exists. The same idea as Flow's `mixed` type.
 * 
 * @see https://github.com/Microsoft/TypeScript/issues/10715
 */
export type unknown = {} | undefined | null;

/**
 * Remove the variants of the second union of string literals from
 * the first.
 * 
 * @see https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-307871458
 */
type Diff<T extends string, U extends string> = (
  & { [P in T]: P }
  & { [P in U]: never }
  & { [x: string]: never }
)[T];

/**
 * Drop keys `K` from `T`.
 * 
 * @see https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-307871458
 */
export type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

/**
 * Like `T & U`, but where there are overlapping properties using the
 * type from U only.
 * 
 * @see https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-307871458
 */
export type Overwrite<T, U> = { [P in Diff<keyof T, keyof U>]: T[P] } & U;

/**
 * `T` without the possibility of `undefined` or `null`.
 * 
 * @see https://github.com/Microsoft/TypeScript/issues/15012#issuecomment-346499713
 */
export type NonNullable<T> = T & {};

/**
 * Make all properties of `T` required and non-nullable.
 * 
 * @see https://github.com/Microsoft/TypeScript/issues/15012#issuecomment-346499713
 */
export type Required<T> = {
  [P in Purify<keyof T>]: NonNullable<T[P]>;
};
type Purify<T extends string> = { [P in T]: T; }[T];
