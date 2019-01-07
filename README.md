# Type Zoo [![Build Status](https://travis-ci.org/pelotom/type-zoo.svg?branch=master)](https://travis-ci.org/pelotom/type-zoo)

TypeScript ships with some handy user-definable type operators: `Partial`, `Readonly`, `Pick` and `Record`. However many other useful operators have been demonstrated in GitHub issue comments and elsewhere. This repository is intended to collect all this folklore in one place, so you can stop copying and pasting these solutions into project after project.

PRs more than welcome! Please note that this library is intended to be fully static, i.e. it has no runtime component, only a type definition file. The idea is that these could all potentially make their way into `lib.d.ts` at some point.

## Installation

```
yarn add type-zoo
```

## API

---

### `NoInfer<T>`

Use to prevent a usage of type `T` from being inferred in other generics.

Example:

```ts
declare function assertEqual<T>(actual: T, expected: NoInfer<T>): boolean;
```

Type `T` will now only be inferred based on the type of the `actual` param, and
the `expected` param is required to be assignable to the type of `actual`.
This allows you to give one particular usage of type `T` full control over how the
compiler infers type `T`.

See: https://github.com/Microsoft/TypeScript/issues/14829#issuecomment-322267089

---

### `Omit<T, K extends keyof any>`

Drop keys `K` from `T` if they are present.

See: https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-377567046

---

### `OmitStrict<T, K extends keyof T>`

Drop keys `K` from `T`, where `K` must exist in `T`.

See: https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-377567046

---

### `Overwrite<T, U>`

Like `T & U`, but where there are overlapping properties using the type from `U` only.

See: https://github.com/pelotom/type-zoo/pull/14#discussion_r183527882

---

### `Param#<T extends Function>` and `ParamTypes<T extends Function>`

These helpers extract the Parameter-types from Functions.

See: https://github.com/pelotom/type-zoo/issues/22

---

### `Pick#<T, K1 in keyof T, K2 in ...>`

Like `Pick<>` but for `#` of nested levels!

See https://gist.github.com/staltz/368866ea6b8a167fbdac58cddf79c1bf

---

### `Public#<T>`

Get only the public members of a type or class. When applied to a class T with private members, Public<T> can be implemented.

See https://github.com/Microsoft/TypeScript/issues/18499#issuecomment-429272545

## Related Projects

[`typelevel-ts`](https://github.com/gcanti/typelevel-ts) and [`typical`](https://github.com/tycho01/typical) are two projects with similar goals to this one. The main difference is that those libraries are more focused on advanced type-level computation, whereas Type Zoo is meant to capture more basic type operators which have been proposed as candidates for inclusion in `lib.d.ts`, or even as first-class language primitives. The idea is that these types will hopefully make their way into the language proper, at which point you can simply stop importing them from `type-zoo` and be on your merry way.
