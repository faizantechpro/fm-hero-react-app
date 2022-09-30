/**
 * Global Imports
*/

import assert from 'assert';

/**
 * Root Imports
*/

import { Geo } from '@util/Geo';
import { Distance } from '@util/Unit';

/**
 * Tests
*/

describe('Geo', function() {

/*
|--------------------------------------------------------------------------
| Geo.distance()
|--------------------------------------------------------------------------
*/

describe('#distance()', function() {
  it('returns correct distance in miles', function() {
    const expected = '201.657';
    const first = { lat: 40.689202777778, lng: -74.044219444444 };
    const second = { lat: 38.889069444444, lng: -77.034502777778 };

    assert.strictEqual(
      Geo.distance(first, second, Distance.Mile).toFixed(3), expected
    );
  });

  it('returns correct distance in kilometres', function() {
    const expected = '1040';
    const first = { lat: 43.582654, lng: -70.3258 };
    const second = { lat: 52.323, lng: -75.324523 };

    assert.strictEqual(
      Geo.distance(first, second, Distance.Kilometre).toFixed(0), expected
    );
  });
});

});
