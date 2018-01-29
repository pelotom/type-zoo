import { Diff } from 'type-zoo';

declare const foo: Diff<'foo' | 'bar' | 'baz', 'bar'>;

// $ExpectType "foo" | "baz"
foo;
