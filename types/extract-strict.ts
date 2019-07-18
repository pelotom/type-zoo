import { ExtractStrict } from 'type-zoo';

type Colors = 'red' | 'green' | 'blue' | 'white';

type OnlyWhite = ExtractStrict<Colors, 'white'>;
// $ExpectError
const notWhite: OnlyWhite = 'blue';

type PrimaryColors = ExtractStrict<Colors, 'red' | 'green' | 'blue'>;
// $ExpectError
const notPrimary: PrimaryColors = 'white';

// $ExpectError
declare const notAColor: ExtractStrict<Colors, 'car'>;
// $ExpectError
declare const notAllColors: ExtractStrict<Colors, 'bus' | 'red'>;
