/**
 * Functions
*/

/**
 * Wraps built-in JSON.parse() function with a Promise.
 *
 * @param {string} serialized
 *
 * @return {Promise<T>}
 */
function parse<T=object>(serialized: string): Promise<T> {
  return new Promise((resolve, reject): void => {
    try {
      resolve(JSON.parse(serialized));
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Wraps built-in JSON.stringify() function with a Promise.
 *
 * @param {T} unserialized
 *
 * @return {Promise<string>}
 */
function stringify<T=object>(unserialized: T): Promise<string> {
  return new Promise((resolve, reject): void => {
    try {
      resolve(JSON.stringify(unserialized));
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Utility
*/

export const AsyncJSON = {
  parse,
  stringify,
};
