import { Pick2, Pick3, Pick4 } from 'type-zoo';

interface Orig {
    a: string;
    b: string;
    c: string;
    numbers: {
        one: number;
        two: number;
        three: number;
        arrays: {
            alpha: string[];
            beta: number[];
            gamma: object[];
            objects: {
                anne: object;
                bob: object;
                carola: object;
                functions: {
                    data: () => object;
                    void: () => void;
                };
            };
        };
    };
}

type One = Pick<Orig, "a">;
const oneTest: One = { a: "a" };
// $ExpectError
oneTest.b;
// $ExpectError
oneTest.c;
// $ExpectError
oneTest.numbers;

type Two = Pick2<Orig, "numbers", "one">;
const twoTest: Two = { numbers: { one: 1 } };
// $ExpectError
twoTest.b;
// $ExpectError
twoTest.c;
// $ExpectError
twoTest.numbers.two;
// $ExpectError
twoTest.numbers.three;
// $ExpectError
twoTest.numbers.arrays;

type Three = Pick3<Orig, "numbers", "arrays", "alpha">;
const threeTest: Three = { numbers: { arrays: { alpha: ["bet"] } } };
// $ExpectError
threeTest.b;
// $ExpectError
threeTest.c;
// $ExpectError
threeTest.numbers.two;
// $ExpectError
threeTest.numbers.three;
// $ExpectError
threeTest.numbers.arrays.beta;
// $ExpectError
threeTest.numbers.arrays.gamma;
// $ExpectError
threeTest.numbers.arrays.objects;

type Four = Pick4<Orig, "numbers", "arrays", "objects", "anne">;
const fourTest: Four = { numbers: { arrays: { objects: { anne: {} } } } };
// $ExpectError
fourTest.b;
// $ExpectError
fourTest.c;
// $ExpectError
fourTest.numbers.two;
// $ExpectError
fourTest.numbers.three;
// $ExpectError
fourTest.numbers.arrays.beta;
// $ExpectError
fourTest.numbers.arrays.gamma;
// $ExpectError
fourTest.numbers.arrays.objects.bob;
// $ExpectError
fourTest.numbers.arrays.objects.carola;
// $ExpectError
fourTest.numbers.arrays.objects.functions;
