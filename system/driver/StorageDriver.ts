/**
 * Relative Imports
*/

import { Storage } from '../util/Storage';

/**
 * Functions
*/

/**
 * Retrieve an array of all keys in storage.
 *
 * @return {Promise<Array<string>>}
 */
function keys(): Promise<Array<string>> {
  return new Promise((resolve, reject): void => {
    try {
      resolve(Object.keys(localStorage));
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Retrieve an item from storage.
 *
 * @param {string} group
 * @param {string} key
 *
 * @return {Promise<string>}
 */
function get(group: string, key: string): Promise<string> {
  return new Promise((resolve, reject): void => {
    Storage.name(group, key)
      .then(name => resolve(localStorage.getItem(name)))
      .catch(reject);
  });
}

/**
 * Save an item to storage.
 *
 * @param {string} group
 * @param {string} key
 * @param {T} unserialized
 *
 * @return {Promise<any>}
 */
function set<T>(group: string, key: string, unserialized: T): Promise<void> {
  return new Promise((resolve, reject): void => {
    Storage.entry(group, key, unserialized)
      .then(entry => localStorage.setItem(entry[0], entry[1]))
      .then(resolve)
      .catch(reject);
  });
}

/**
 * Merge data with an existing item in storage.
 *
 * @param {string} group
 * @param {string} key
 * @param {T} unserialized
 *
 * @return {Promise<void>}
 */
function merge<T>(group: string, key: string, unserialized: T): Promise<void> {
  return new Promise(async (resolve, reject): Promise<void> => {
    try {
      const current = JSON.parse(await get(group, key));
      const merged = Object.assign(current, unserialized);

      await set(group, key, merged);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Remove an item from storage.
 *
 * @param {string} group
 * @param {string} key
 *
 * @return {Promise<void>}
 */
function remove(group: string, key: string): Promise<void> {
  return new Promise((resolve, reject): void => {
    Storage.name(group, key)
      .then(name => localStorage.removeItem(name))
      .then(resolve)
      .catch(reject);
  });
}

/**
 * Remove all items from storage
 *
 * @return {Promise<void>}
 */
function clear(): Promise<void> {
  return new Promise((resolve): void => {
    localStorage.clear();
    resolve();
  });
}

/**
 * Driver
*/

export const StorageDriver = {
  keys,
  get,
  set,
  merge,
  remove,
  clear,
};
