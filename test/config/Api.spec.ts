/**
 * Global Imports
*/

import assert from 'assert';
import dotenv from 'dotenv';

/**
 * Prelude
*/

dotenv.config();

/**
 * Root Imports
*/

import { ApiConfig, AppConfig, AppMode } from '@config';

/**
 * Tests
*/

describe('Api', function() {

/*
|--------------------------------------------------------------------------
| Api.config
|--------------------------------------------------------------------------
*/

describe('#config', function() {
  it('is HTTP', function() {
    assert.ok(ApiConfig.url.match(/^https?:\/\/.*$/));
  });

  it('not using plain HTTP on production', function() {
    if (AppConfig.mode === AppMode.Production) {
      assert.strictEqual(ApiConfig.url.substring(0, 5), 'https');
    }
  });
});

});
