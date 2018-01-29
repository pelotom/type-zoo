import { Overwrite } from 'type-zoo';

declare const foo: Overwrite<{ x: boolean; y: string }, { x: number }>;

// $ExpectType string
foo.y;

// $ExpectType number
foo.x;
