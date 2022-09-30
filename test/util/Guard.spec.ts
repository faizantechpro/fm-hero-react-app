/**
 * Global Imports
*/

import assert from 'assert';

/**
 * Root Imports
*/

import { Guard } from '@util';

/**
 * Tests
*/

describe('Guard', function() {

/*
|--------------------------------------------------------------------------
| isFloat()
|--------------------------------------------------------------------------
*/

describe('#isFloat()', function() {
  it('returns correct result', function() {
    assert.ok(Guard.isFloat(3.14));
    assert.ok(Guard.isFloat(1.23456789));
    assert.ok(Guard.isFloat(10.1));
    assert.ok(!Guard.isFloat(3));
    assert.ok(!Guard.isFloat(3.0));
    assert.ok(!Guard.isFloat(42));
  });
});

/*
|--------------------------------------------------------------------------
| isInteger()
|--------------------------------------------------------------------------
*/

describe('#isInteger()', function() {
  it('returns correct result', function() {
    assert.ok(Guard.isInteger(3));
    assert.ok(Guard.isInteger(1));
    assert.ok(Guard.isInteger(10.0));
    assert.ok(!Guard.isInteger(3.14));
    assert.ok(!Guard.isInteger(87.7));
  });
});

/*
|--------------------------------------------------------------------------
| isPositive()
|--------------------------------------------------------------------------
*/

describe('#isPositive()', function() {
  it('returns correct result', function() {
    assert.ok(Guard.isPositive(3));
    assert.ok(Guard.isPositive(882153));
    assert.ok(Guard.isPositive(469));
    assert.ok(!Guard.isPositive(0));
    assert.ok(!Guard.isPositive(-469));
    assert.ok(!Guard.isPositive(-31623));
  });
});

/*
|--------------------------------------------------------------------------
| isNegative()
|--------------------------------------------------------------------------
*/

describe('#isNegative()', function() {
  it('returns correct result', function() {
    assert.ok(Guard.isNegative(-58));
    assert.ok(Guard.isNegative(-1));
    assert.ok(!Guard.isNegative(0));
    assert.ok(!Guard.isNegative(1));
    assert.ok(!Guard.isNegative(6932));
  });
});

/*
|--------------------------------------------------------------------------
| isTruthy()
|--------------------------------------------------------------------------
*/

describe('#isTruthy()', function() {
  it('returns correct result', function() {
    assert.ok(Guard.isTruthy(true));
    assert.ok(Guard.isTruthy(1));
    assert.ok(Guard.isTruthy(3.14));
    assert.ok(Guard.isTruthy(42));
    assert.ok(Guard.isTruthy('hello'));
    assert.ok(Guard.isTruthy({}));
    assert.ok(!Guard.isTruthy(null));
    assert.ok(!Guard.isTruthy(undefined));
    assert.ok(!Guard.isTruthy(false));
    assert.ok(!Guard.isTruthy(0));
    assert.ok(!Guard.isTruthy(''));
    assert.ok(!Guard.isTruthy([]));
  });
});

/*
|--------------------------------------------------------------------------
| isFalsey()
|--------------------------------------------------------------------------
*/

describe('#isFalsey()', function() {
  it('returns correct result', function() {
    assert.ok(Guard.isFalsey(null));
    assert.ok(Guard.isFalsey(undefined));
    assert.ok(Guard.isFalsey(false));
    assert.ok(Guard.isFalsey(0));
    assert.ok(Guard.isFalsey(''));
    assert.ok(Guard.isFalsey([]));
    assert.ok(!Guard.isFalsey(1));
    assert.ok(!Guard.isFalsey(3.14));
    assert.ok(!Guard.isFalsey(42));
    assert.ok(!Guard.isFalsey('hello'));
    assert.ok(!Guard.isFalsey({}));
  });
});

/*
|--------------------------------------------------------------------------
| isSet()
|--------------------------------------------------------------------------
*/

describe('#isSet()', function() {
  it('returns correct result', function() {
    assert.ok(Guard.isSet(1));
    assert.ok(Guard.isSet(3.14));
    assert.ok(Guard.isSet(true));
    assert.ok(Guard.isSet(false));
    assert.ok(Guard.isSet(0));
    assert.ok(Guard.isSet(''));
    assert.ok(Guard.isSet('hello'));
    assert.ok(Guard.isSet([]));
    assert.ok(!Guard.isSet(null));
    assert.ok(!Guard.isSet(undefined));
  });
});

/*
|--------------------------------------------------------------------------
| isDate()
|--------------------------------------------------------------------------
*/

describe('#isDate()', function() {
  it('returns correct result', function() {
    assert.ok(Guard.isDate(new Date));
    assert.ok(!Guard.isDate(3.14));
    assert.ok(!Guard.isDate('2020-01-01'));
  });
});

});
