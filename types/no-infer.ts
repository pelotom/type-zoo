import { NoInfer } from 'type-zoo';

declare const foo: NoInfer<number>;

// $ExpectType number
foo;

// Example taken from https://github.com/Microsoft/TypeScript/issues/14829#issue-216577598

class Animal { move() {} }
class Dog extends Animal { woof() {} }

function doSomething<T>(value: T, getDefault: () => NoInfer<T>) { }
// $ExpectError
doSomething(new Dog(), () => new Animal());
