import { DeepReadonly } from "type-zoo";

interface FooType {
  bar: string;
  baz: string[];
  bam: Array<{ bap: string[] }>;
  bab: {
    bab: {
      bab: string;
    };
  };
}

declare const foo: DeepReadonly<FooType>;

// $ExpectError
foo.bar = "foo";

// $ExpectError
foo.baz = ["hi"];

// $ExpectError
foo.baz.push("baz");

// $ExpectError
foo.bam = [];

// $ExpectError
foo.bam.push({ bap: [] });

// $ExpectError
foo.bab.bab.bab = "hi";

// $ExpectType DeepReadonlyArray<string>
foo.baz;

// $ExpectType DeepReadonlyObject<{ bab: { bab: string; }; }>
foo.bab;

// $ExpectType DeepReadonlyObject<{ bab: string; }>
foo.bab.bab;
