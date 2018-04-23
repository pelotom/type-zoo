// TypeScript Version: 2.6

/**
 * Remove the variants of the second union of string literals from
 * the first.
 *
 * @see https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-307871458
 */
export type Diff<T extends string, U extends string> = (
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
 * Find the overlapping variants between two string unions.
 */
export type Overlap<T extends string, U extends string> = Diff<T, Diff<T, U>>;

/**
 * Like `T & U`, but where there are overlapping properties using the
 * type from U only.
 *
 * @see https://github.com/pelotom/type-zoo/issues/2
 * @see https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-307871458
 */
export type Overwrite<T, U> = Omit<T, Overlap<keyof T, keyof U>> & U;

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
 * `T` without the possibility of `undefined` or `null`.
 *
 * @see https://github.com/Microsoft/TypeScript/issues/15012#issuecomment-346499713
 */
export type NonNullable<T> = T & {};

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

/**
 * Picks 2 levels deep into a nested object!
 *
 * @see https://gist.github.com/staltz/368866ea6b8a167fbdac58cddf79c1bf
 */
export type Pick2<T, K1 extends keyof T, K2 extends keyof T[K1]> = {
  [P1 in K1]: {
    [P2 in K2]: (T[K1])[P2];
  };
};

/**
 * Picks 3 levels deep into a nested object!
 *
 * @see https://gist.github.com/staltz/368866ea6b8a167fbdac58cddf79c1bf
 */
export type Pick3<
  T,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof T[K1][K2]
  > = {
  [P1 in K1]: {
    [P2 in K2]: {
      [P3 in K3]: ((T[K1])[K2])[P3];
    };
  };
};

/**
 * Picks 4 levels deep into a nested object!
 */
export type Pick4<
  T,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof T[K1][K2],
  K4 extends keyof T[K1][K2][K3]
  > = {
  [P1 in K1]: {
    [P2 in K2]: {
      [P3 in K3]: {
        [P4 in K4]: (((T[K1])[K2])[K3])[P4];
      };
    };
  };
};
