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

/**
 * Creates a recursively readonly type
 *
 * https://github.com/Microsoft/TypeScript/pull/21316
 */
// tslint:disable-next-line: semicolon strict-export-declare-modifiers
export type DeepReadonly<T> = T extends any[] ? DeepReadonlyArray<T[number]> : T extends object ? DeepReadonlyObject<T> : T;

export interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}

export type DeepReadonlyObject<T> = {
  // tslint:disable-next-line: semicolon strict-export-declare-modifiers ban-types
  readonly [P in { [K in keyof T]: T[K] extends Function ? never : K; }[keyof T]]: DeepReadonly<T[P]>;
};
