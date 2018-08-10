// TODO uncomment these tests after https://github.com/Microsoft/definitelytyped-header-parser/pull/15
// will be deployed.
// // $ExpectType string
type S = string;
// import { FuncArgs } from 'type-zoo';

// function a() {
//   return;
// }
// const b = () => {
//   return;
// };

// // $ExpectType []
// type A1 = FuncArgs<typeof a>;
// // $ExpectType []
// type B1 = FuncArgs<typeof b>;

// const c1 = (a: string) => {
//   return;
// };
// const c2 = (a: number, b: boolean) => {
//   return;
// };
// function c3(a: boolean[], b: object, c: any, d: 'foo') {
//   return;
// }
// function c4(a: number, ...args: string[]) {
//   return;
// }
// function c5(a: boolean[], b: object, c: any, d: 'foo', e: 1, ...args: any[]) {
//   return;
// }

// // $ExpectType [string]
// type C1 = FuncArgs<typeof c1>;
// // $ExpectType [number, boolean]
// type C2 = FuncArgs<typeof c2>;
// // $ExpectType [boolean[], object, any, "foo"]
// type C3 = FuncArgs<typeof c3>;

// // Var-args -- rest parameters!
// // $ExpectType [number, ...string[]]
// type C4 = FuncArgs<typeof c4>;

// // No limitations for args count
// // $ExpectType [boolean[], object, any, "foo", 1, ...any[]]
// type C5 = FuncArgs<typeof c5>;

// interface D {}

// // $ExpectError
// type D1 = FuncArgs<D>;
