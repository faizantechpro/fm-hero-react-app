/**
 * Types/Interfaces
*/

export type Callback<In=unknown, Out=void> = (...args: Array<In>) => Out | Promise<Out>;

/**
 * Functions
*/

/**
 * Delays execution of callback.
 *
 * @param {Callback<In, Out>} callback
 * @param {number} delay
 *
 * @return {Callback<In, void>}
 */
function delayed<In=unknown, Out=void>(callback: Callback<In, Out>, delay?: number): Callback<In, void> {
  return (...args: Array<In>): void => {
    if (delay) {
      setTimeout((): Out | Promise<Out> => callback(...args), delay);
    } else {
      requestAnimationFrame((): Out | Promise<Out> => callback(...args));
    }
  };
}

/**
 * Higher-order function that will wrap the passed function in a Promise.
 *
 * @param {Function} callback
 *
 * @return {Callback<In, Promise<Out>>}
 */
function promised<In=unknown, Out=void>(callback: Callback<In, Out>): Callback<In, Promise<Out>> {
  return (...args: Array<In>): Promise<Out> => {
    return new Promise((resolve, reject): void => {
      try {
        resolve(callback(...args));
      } catch (error) {
        reject(error);
      }
    })
  };
}

/**
 * Utility
*/

export const Functional = {
  delayed,
  promised,
};
