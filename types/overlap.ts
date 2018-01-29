import { Overlap } from 'type-zoo';

declare const foo: Overlap<'foo' | 'bar', 'bar' | 'baz'>;

// $ExpectType "bar"
foo;
