import { Param0, Param1, Param2, Param3, ParamTypes } from 'type-zoo';

function a() { return; }
const b = () => { return; };

// $ExpectType {}
type A1 = Param0<typeof a>;
// $ExpectType {}
type B1 = Param0<typeof b>;
// $ExpectType {}
type A2 = ParamTypes<typeof a>;
// $ExpectType {}
type B2 = ParamTypes<typeof b>;

// $ExpectError
type A3 = A2[0];
// $ExpectError
type B3 = B2[0];

const c1 = (a: string) => { return; };
const c2 = (a: number, b: boolean) => { return; };
function c3(a: boolean[], b: object, c: any, d: "foo") { return; }
function c4(a: number, ...args: string[]) { return; }
function c5(a: boolean[], b: object, c: any, d: "foo", e: 1, ...args: any[]) { return; }

// $ExpectType string
type C1 = Param0<typeof c1>;
// $ExpectType {}
type C2 = Param1<typeof c1>;
// $ExpectType boolean
type C3 = Param1<typeof c2>;
// $ExpectType boolean[]
type C4 = Param0<typeof c3>;
// $ExpectType object
type C5 = Param1<typeof c3>;
// $ExpectType any
type C6 = Param2<typeof c3>;
// $ExpectType "foo"
type C7 = Param3<typeof c3>;
// $ExpectType [boolean[], object, any, "foo"]
type C8 = ParamTypes<typeof c3>;

// Var-args -- rest parameters!
// $ExpectType string
type C9 = Param1<typeof c4>;
// $ExpectType string
type C10 = Param2<typeof c4>;
// $ExpectType string
type C11 = Param3<typeof c4>;

// Currently this type-operator ignores rest parameters (...args:any[])
// $ExpectType [number]
type C12 = ParamTypes<typeof c4>;

// Currently this type-operator has a max limit of 4 parameter-types unpacked as a tuple
// $ExpectType never
type C13 = ParamTypes<typeof c5>;
