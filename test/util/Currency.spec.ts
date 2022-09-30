/**
 * Global Imports
*/

import assert from 'assert';

/**
 * Root Imports
*/

import { Currency } from '@util';

/**
 * Tests
*/

describe('Currency', function() {

/*
|--------------------------------------------------------------------------
| Currency.cents()
|--------------------------------------------------------------------------
*/

describe('#cents()', function() {
  const known: Record<string, number> = {
    '$83.59': 8359,
    '$0.52': 52,
    '$93,175.86': 9317586,
    '$185,493,175.86': 18549317586,
  };

  for (const key in known) {
    it(`returns ${ key } in cents`, function() {
      assert.strictEqual(known[key], Currency.cents(key));
    });
  }
});

/*
|--------------------------------------------------------------------------
| Currency.localeString()
|--------------------------------------------------------------------------
*/

describe('#localeString()', function() {
  const known: Record<number, string> = {
    46125: '$461.25',
    3: '$0.03',
    23598725: '$235,987.25',
    8723098423662: '$87,230,984,236.62',
  };

  for (const key in known) {
    it(`returns ${ key } cents as correctly formatted string`, function() {
      assert.strictEqual(known[key], Currency.localeString(parseInt(key)));
    });
  }
});

});
