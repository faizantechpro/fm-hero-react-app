/**
 * Root Imports
*/

import { StorageConfig, TokenConfig } from '@config';
import { StorageDriver } from '@drivers';

/**
 * Relative Imports
*/

import { Authorization } from './Api';
import { AsyncJSON } from './JSON';

/**
 * Functions
*/

/**
 * Retrieve the token data from storage.
 *
 * @return {Promise<Authorization>}
 */
function get(): Promise<Authorization> {
  return new Promise((resolve, reject): void => {
    StorageDriver.get(StorageConfig.group.default, TokenConfig.storage.key)
      .then(AsyncJSON.parse)
      .then(resolve)
      .catch(reject);
  });
};

/**
 * Save the token data in storage.
 *
 * @param {Authorization} token
 *
 * @return {Promise<void>}
 */
function set(token: Authorization): Promise<void> {
  return StorageDriver.set(StorageConfig.group.default, TokenConfig.storage.key, token);
};

/**
 * Remove all token data from storage.
 *
 * @return {Promise<void>}
 */
function clear(): Promise<void> {
  return StorageDriver.remove(StorageConfig.group.default, TokenConfig.storage.key);
};

/**
 * Utility
*/

export const TokenStorage = {
  get,
  set,
  clear,
};
