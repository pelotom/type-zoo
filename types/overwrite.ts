import { Overwrite } from 'type-zoo';

declare const foo: Overwrite<{ x: boolean; y: string }, { x: number }>;

// $ExpectType string
foo.y;

// $ExpectType number
foo.x;

// $ExpectError
type E = Overwrite<{ x: boolean; y: string }, { z: number }>;
