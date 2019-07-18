import { ExcludeStrict } from 'type-zoo';

type Colors = 'red' | 'green' | 'blue' | 'white';

type PrimaryColors = ExcludeStrict<Colors, 'white'>;
// $ExpectError
const notPrimary: PrimaryColors = 'white';

type RG = ExcludeStrict<Colors, 'white' | 'blue'>;
// $ExpectError
const blue: RG = 'blue';

// $ExpectError
declare const notAColor: ExcludeStrict<Colors, 'car'>;
// $ExpectError
declare const notAllColors: ExcludeStrict<Colors, 'bus' | 'red'>;
