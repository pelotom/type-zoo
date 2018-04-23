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

type Two = Pick2<Orig, "numbers", "one">;
const twoTest: Two = { numbers: { one: 1 } };

type Three = Pick3<Orig, "numbers", "arrays", "alpha">;
const threeTest: Three = { numbers: { arrays: { alpha: ["bet"] } } };

type Four = Pick4<Orig, "numbers", "arrays", "objects", "anne">;
const fourTest: Four = { numbers: { arrays: { objects: { anne: {} } } } };
