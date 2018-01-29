import { Omit } from 'type-zoo';

declare const foo: Omit<{ x: boolean; y: string }, 'x'>;

// $ExpectType string
foo.y;

// $ExpectError
foo.x;
