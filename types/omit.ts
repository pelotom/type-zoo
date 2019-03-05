import { Omit, OmitStrict } from 'type-zoo';

declare const omitExistingField: Omit<{ x: boolean; y: string }, 'x'>;

// $ExpectError
omitExistingField.x;

// $ExpectType string
omitExistingField.y;

declare const omitNonexistentField: Omit<{ x: boolean }, 'y'>;

// $ExpectType boolean
omitNonexistentField.x;

// $ExpectError
omitNonexistentField.y;

declare const omitExistingFieldStrict: OmitStrict<{ x: boolean; y: string }, 'x'>;

// $ExpectError
omitExistingFieldStrict.x;

// $ExpectType string
omitExistingFieldStrict.y;

// $ExpectError
declare const omitNonexistentFieldStrict: OmitStrict<{ x: boolean }, 'y'>;
