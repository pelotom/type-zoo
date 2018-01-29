import { Required } from 'type-zoo';

declare const foo: Required<{ x: number, y?: boolean }>;

const n: number = foo.x;
const b: boolean = foo.y;
