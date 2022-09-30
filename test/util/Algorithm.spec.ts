/**
 * Global Imports
*/

import assert from 'assert';

/**
 * Root Imports
*/

import { Algorithm } from '@util';

/**
 * Tests
*/

describe('Algorithm', function() {

/*
|--------------------------------------------------------------------------
| Algorithm.truthy()
|--------------------------------------------------------------------------
*/

describe('#truthy()', function() {
  it('returns only elements that are truthy', function() {
    assert.deepStrictEqual(
      [1, 2, 3],
      Algorithm.truthy([0, false, 1, null, [0, undefined, [2, false], undefined], false, 0.0, '', [3], null]),
    );
  });

  it('returns nothing', function() {
    assert.deepStrictEqual(
      [],
      Algorithm.truthy([null, [[false, [null], false, undefined], '', false, ['', false]]]),
    );
  });
});

/*
|--------------------------------------------------------------------------
| Algorithm.within()
|--------------------------------------------------------------------------
*/

describe('#within()', function() {
  it('returns described elements', function() {
    const data = {
      child: {
        data: {
          message: 'foo',
        }
      }
    };

    assert.deepStrictEqual(
      { message: 'foo' },
      Algorithm.within(data, 'child.data'),
    );

    assert.strictEqual(
      'foo',
      Algorithm.within(data, 'child.data.message'),
    );
  });
});

/*
|--------------------------------------------------------------------------
| Algorithm.flatten()
|--------------------------------------------------------------------------
*/

describe('#flatten()', function() {
  it('returns flattened object structure', function() {
    assert.deepStrictEqual(
      {
        'foo.bar': 1,
        'foo.baz': 2,
        'foo.child.message': 'hello world',
      },
      Algorithm.flatten({
        foo: {
          bar: 1,
          baz: 2,
          child: {
            message: 'hello world',
          },
        },
      })
    );
  });
});

/*
|--------------------------------------------------------------------------
| Algorithm.expand()
|--------------------------------------------------------------------------
*/

describe('#expand()', function() {
  it('returns described structure', function() {
    assert.deepStrictEqual(
      {
        child: {
          data: {
            message: 'foo',
          }
        },
        other: {
          name: 'John Doe',
          prices: {
            item_a: 100,
            item_b: 200,
            item_c: 300,
            item_d: 400,
          }
        }
      },
      Algorithm.expand({
        'child.data.message': 'foo',
        'other.prices.item_a': 100,
        'other.prices.item_b': 200,
        'other.name': 'John Doe',
        'other.prices.item_c': 300,
        'other.prices.item_d': 400,
      }),
    );
  });
});

/*
|--------------------------------------------------------------------------
| Algorithm.except()
|--------------------------------------------------------------------------
*/

describe('#except()', function() {
  it('returns only unfiltered elements', function() {
    const data = {
      foo: 1,
      bar: 2,
      baz: 3,
    };

    assert.deepStrictEqual(
      { baz: 3 },
      Algorithm.except(data, ['foo', 'bar']),
    );

    assert.deepStrictEqual(
      { bar: 2, baz: 3 },
      Algorithm.except(data, { foo: true }),
    );

    assert.deepStrictEqual(
      { foo: 1, bar: 2, baz: 3 },
      Algorithm.except(data, { foo: null }),
    );
  });
});

});
