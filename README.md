# Type Zoo

TypeScript ships with some handy user-definable type operators: `Partial`, `Readonly`, `Pick` and `Record`. However many other useful operators have been demonstrated in GitHub issue comments and elsewhere. This repository is intended to collect all this folklore in one place, so you can stop copying and pasting these solutions into project after project.

PRs more than welcome! Please note that this library is intended to be fully static, i.e. it has no runtime component, only a type definition file. The idea is that these could all potentially make their way into `lib.d.ts` at some point.

## Installation

```
yarn add type-zoo
```

## API

### `unknown`

A more principled `any`. Anything can be assigned to `unknown` but nothing can be done with an `unknown` value without further inspection (type guards/predicates). The same idea as [Flow's `mixed` type](https://flow.org/en/docs/types/mixed/).

See: https://github.com/Microsoft/TypeScript/issues/10715

---

### `Diff<T extends string, U extends string>`

Remove the variants of the second union of string literals from the first.

See: https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-307871458

---

### `Overlap<T extends string, U extends string>`

Find the overlapping variants between two string unions.

---

### `Omit<T, K extends keyof T>`

Drop keys `K` from `T`.

See: https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-307871458

---

### `Overwrite<T, U>`

Like `T & U`, but where there are overlapping properties using the type from `U` only.

See: https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-307871458

---

### `NonNullable<T>`

`T` without the possibility of `undefined` or `null`.

See: https://github.com/Microsoft/TypeScript/issues/15012#issuecomment-346499713

---

### `Required<T>`

The opposite of `Partial`. Make all properties of `T` required and non-nullable.

See: https://github.com/Microsoft/TypeScript/issues/15012#issuecomment-346499713

---

## Related Projects

[`typelevel-ts`](https://github.com/gcanti/typelevel-ts) and [`typical`](https://github.com/tycho01/typical) are two projects with similar goals to this one. The main difference is that those libraries are more focused on advanced type-level computation, whereas Type Zoo is meant to capture more basic type operators which have been proposed as candidates for inclusion in `lib.d.ts`, or even as first-class language primitives. The idea is that these types will hopefully make their way into the language proper, at which point you can simply stop importing them from `type-zoo` and be on your merry way.
