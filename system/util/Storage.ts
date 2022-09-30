/**
 * Root Imports
*/

import { StorageConfig } from '@config';

/**
 * Relative Imports
*/

import { AsyncJSON } from './JSON';

/**
 * Types/Interfaces
*/

export type StorageEntry = {
  [0]: string;
  [1]: string;
};

/**
 * Functions
*/

/**
 * Retrieve the fully qualified name to be used for a key in storage.
 *
 * @param {string} group
 * @param {string} key
 *
 * @return {Promise<string>}
 */
function name(group: string, key: string): Promise<string> {
  return new Promise((resolve): void => {
    resolve(
      StorageConfig.name.prefix
      + StorageConfig.slug
      + StorageConfig.name.delimeter
      + group
      + StorageConfig.name.delimeter
      + key
      + StorageConfig.name.suffix
    );
  });
}

/**
 * Retrieve a key and value pair to be saved in storage. The returned array will
 * contain two Promise<string> elements. The first promise resolves to the name
 * of the entry. The second resolves to the stringified JSON to be written.
 *
 * @param {string} group
 * @param {string} key
 * @param {T} unserialized
 *
 * @return {Promise<StorageEntry>}
 */
function entry<T>(group: string, key: string, unserialized: T): Promise<StorageEntry> {
  return new Promise((resolve, reject): void => {
    const promises: StorageEntry | Array<Promise<string>> = [
      name(group, key),
      AsyncJSON.stringify(unserialized),
    ];

    Promise.all(promises)
      .then(result => resolve(result as unknown as StorageEntry))
      .catch(reject);
  });
}

/**
 * Utility
*/

export const Storage = {
  name,
  entry,
};
