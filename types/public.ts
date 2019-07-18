import { Public } from 'type-zoo';

class Foo {
  private readonly n = 1;

  bar(): string {
    return 'abc';
  }
}

type IFoo = Public<Foo>;

const m: IFoo = {
  bar(): string {
    return 'def';
  },
};
