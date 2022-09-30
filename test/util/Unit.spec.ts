/**
 * Global Imports
*/

import assert from 'assert';

/**
 * Root Imports
*/

import { Unit, Distance } from '@util/Unit';

/**
 * Tests
*/

describe('Unit', function() {

/*
|--------------------------------------------------------------------------
| Unit.base()
|--------------------------------------------------------------------------
*/

describe('#base()', function() {
  it('returns 83 metres in cm', function() {
    assert.strictEqual('8300.00', Unit.base(83, Distance.Metre).toFixed(2));
  });

  it('returns 1 km in cm', function() {
    assert.strictEqual('100000.00', Unit.base(1, Distance.Kilometre).toFixed(2));
  });

  it('returns 53 km in cm', function() {
    assert.strictEqual('5300000.00', Unit.base(53, Distance.Kilometre).toFixed(2));
  });

  it('returns 939 feet in inches', function() {
    assert.strictEqual('11268.00', Unit.base(939, Distance.Feet).toFixed(2));
  });

  it('returns 55 yards in inches', function() {
    assert.strictEqual('1980.00', Unit.base(55, Distance.Yard).toFixed(2));
  });

  it('returns 1 mile in inches', function() {
    assert.strictEqual('63360.00', Unit.base(1, Distance.Mile).toFixed(2));
  });

  it('returns 24,125 miles in inches', function() {
    assert.strictEqual('1528560000.00', Unit.base(24125, Distance.Mile).toFixed(2));
  });

  it('returns 8,173 miles in inches', function() {
    assert.strictEqual('517841280.00', Unit.base(8173, Distance.Mile).toFixed(2));
  });
});

/*
|--------------------------------------------------------------------------
| Unit.metric()
|--------------------------------------------------------------------------
*/

describe('#metric()', function() {
  it('returns 87 inches in cm', function() {
    assert.strictEqual('220.98', Unit.metric(87, Distance.Inch).toFixed(2));
  });

  it('returns 155 feet in metres', function() {
    assert.strictEqual('47.244', Unit.metric(155, Distance.Feet).toFixed(3));
  });

  it('returns 873 yards in metres', function() {
    assert.strictEqual('798.2712', Unit.metric(873, Distance.Yard).toFixed(4));
  });

  it('returns 8,731 miles in km', function() {
    assert.strictEqual('14051.182', Unit.metric(8731, Distance.Mile).toFixed(3));
  });
});

/*
|--------------------------------------------------------------------------
| Unit.convert()
|--------------------------------------------------------------------------
*/

describe('#convert()', function() {
  it('returns 8371 cm in inches', function() {
    assert.strictEqual(
      '3295.6693',
      Unit.convert(8371, Distance.Centimetre, Distance.Inch).toFixed(4),
    );
  });

  it('returns 973195 cm in feet', function() {
    assert.strictEqual(
      '31928.970',
      Unit.convert(973195, Distance.Centimetre, Distance.Feet).toFixed(3),
    );
  });

  it('returns 935 metres in feet', function() {
    assert.strictEqual(
      '3067.5853',
      Unit.convert(935, Distance.Metre, Distance.Feet).toFixed(4),
    );
  });

  it('returns 838 miles in metres', function() {
    assert.strictEqual(
      '1348630.272',
      Unit.convert(838, Distance.Mile, Distance.Metre).toFixed(3),
    );
  });

  it('returns 18 yards in miles', function() {
    assert.strictEqual(
      '0.0102',
      Unit.convert(18, Distance.Yard, Distance.Mile).toFixed(4),
    );
  });
});

});
