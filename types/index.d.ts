// TypeScript Version: 2.8

/**
 * Drop keys `K` from `T` if they are present.
 *
 * @see https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-377567046
 */
export type Omit<T, K extends keyof any> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;

/**
 * Drop keys `K` from `T`, where `K` must exist in `T`.
 *
 * @see https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-377567046
 */
export type OmitStrict<T, K extends keyof T> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;

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
export type Purify<T extends string> = { [P in T]: T }[T];

/**
 * Get the public interface of a type. This is useful for working with classes that have private members.
 *
 * export class Foo {
 *   private priv: string;
 *
 *   bar(): number {
 *     // ...
 *   }
 * }
 *
 * export type IFoo = Public<Foo>;
 *
 * // Can mock or fake
 * const fakeFoo: IFoo = {
 *   bar(): { return 1;}
 * }
 */
export type Public<T> = { [P in keyof T]: T[P] };

/**
 * Selects the type of the 0th parameter in a function-type
 */
export type Param0<Func> = Func extends (a: infer T, ...args: any[]) => any ? T : never;
/**
 * Selects the type of the 1st parameter in a function-type
 */
export type Param1<Func> = Func extends (a: any, b: infer T, ...args: any[]) => any ? T : never;
/**
 * Selects the type of the 2nd parameter in a function-type
 */
export type Param2<Func> = Func extends (a: any, b: any, c: infer T, ...args: any[]) => any
  ? T
  : never;
/**
 * Selects the type of the 3rd parameter in a function-type
 */
export type Param3<Func> = Func extends (a: any, b: any, c: any, d: infer T, ...args: any[]) => any
  ? T
  : never;
/**
 * Selects the types of all the parameters in a function-type.
 * Warnings:
 *  - This is probably less performant if you're only looking up a single param! {@see Param0-Param# }
 *  - This omits rest parameters (...args:any[])
 */
export type ParamTypes<F extends Function> = F extends () => any // tslint:disable-line
  ? {}
  : F extends (p0: infer P0) => any
    ? [P0]
    : F extends (p0: infer P0, p1: infer P1) => any
      ? [P0, P1]
      : F extends (p0: infer P0, p1: infer P1, p2: infer P2) => any
        ? [P0, P1, P2]
        : F extends (p0: infer P0, p1: infer P1, p2: infer P2, p3: infer P3) => any
          ? [P0, P1, P2, P3]
          : // ... -- extend this at your own risk, this could be bad for compilation performance!
            never;

/**
 * Picks 2 levels deep into a nested object!
 *
 * @see https://gist.github.com/staltz/368866ea6b8a167fbdac58cddf79c1bf
 */
export type Pick2<T, K1 extends keyof T, K2 extends keyof T[K1]> = {
  [P1 in K1]: { [P2 in K2]: (T[K1])[P2] }
};

/**
 * Picks 3 levels deep into a nested object!
 *
 * @see https://gist.github.com/staltz/368866ea6b8a167fbdac58cddf79c1bf
 */
export type Pick3<T, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2]> = {
  [P1 in K1]: { [P2 in K2]: { [P3 in K3]: ((T[K1])[K2])[P3] } }
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
> = { [P1 in K1]: { [P2 in K2]: { [P3 in K3]: { [P4 in K4]: (((T[K1])[K2])[K3])[P4] } } } };
