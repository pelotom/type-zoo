import { Omit, OmitStrict } from 'type-zoo';

declare const omitExistingField: Omit<{ x: boolean; y: string }, 'x'>;

// $ExpectType string
omitExistingField.y;

// $ExpectError
omitExistingField.x;

declare const omitNonexistentField: Omit<{ x: boolean }, 'y'>;

// $ExpectType boolean
omitNonexistentField.x;

// $ExpectError
omitNonexistentField.y;

// $ExpectError
declare const omitNonexistentFieldStrict: OmitStrict<{ x: boolean }, 'y'>;

declare const omitExistingFieldStrict: OmitStrict<{ x: boolean; y: string }, 'x'>;

// $ExpectType string
omitExistingField.y;

// $ExpectError
omitExistingField.x;
