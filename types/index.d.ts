// TypeScript Version: 2.8

/**
 * Drop keys `K` from `T`.
 *
 * @see https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-377567046
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * Like `T & U`, but where there are overlapping properties using the
 * type from U only.
 *
 * @see Old: https://github.com/pelotom/type-zoo/issues/2
 * @see Old: https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-307871458
 * @see New: https://github.com/pelotom/type-zoo/pull/14#discussion_r183527882
 */
export type Overwrite<T, U> = Omit<T, keyof T & keyof U> & U;

/**
 * Use to prevent a usage of type `T` from being inferred in other generics.
 *
 * Example:
 * declare function assertEqual<T>(actual: T, expected: NoInfer<T>): boolean;
 *
 * Type `T` will now only be inferred based on the type of the `actual` param, and
 * the `expected` param is required to be assignable to the type of `actual`.
 * This allows you to give one particular usage of type `T` full control over how the
 * compiler infers type `T`.
 *
 * @see https://github.com/Microsoft/TypeScript/issues/14829#issuecomment-322267089
 */
export type NoInfer<T> = T & { [K in keyof T]: T[K] };

/**
 * Forgets contextual knowledge of partiality of keys.
 */
export type Purify<T extends string> = { [P in T]: T; }[T];

/**
 * Make all properties of `T` required and non-nullable.
 *
 * @see https://github.com/Microsoft/TypeScript/issues/15012#issuecomment-346499713
 */
export type Required<T> = {
  [P in Purify<keyof T>]: NonNullable<T[P]>;
};

/**
 * The type of all values; nothing is known about it a priori
 * except that it exists. The same idea as Flow's `mixed` type.
 *
 * @see https://github.com/Microsoft/TypeScript/issues/10715
 */
export type unknown = {} | undefined | null;
