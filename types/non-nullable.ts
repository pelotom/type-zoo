import { NonNullable } from 'type-zoo';

declare const foo: NonNullable<number | undefined>;

const n: number = foo;
