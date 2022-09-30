/**
 * Global Imports
*/

import { useRef } from 'react';

/**
 * Root Imports
*/

import { Callback } from '@util/Functional';

/**
 * Types/Interfaces
*/

export interface DebounceHook {
  call: <In, Out>(func: Callback<In, Out>, delay: number, ...args: Array<In>) => void;
  cancel: () => void;
}

/**
 * Main
*/

/**
 * @return {DebounceHook}
 */
export function useDebounce(): DebounceHook {
  /** Refs **/

  const timeoutRef = useRef<number | NodeJS.Timeout>();

  /** Functions **/

  /**
   * Calls the given callback after the specified delay. If a subsequent call
   * is made before this delay then the timeout will reset.
   *
   * @param {Callback<In, Out>} func The callback to be debounced.
   * @param {number} delay The delay between calls.
   * @param {...Array<In>} args Arguments to be passed to callback after timeout.
   *
   * @return {void}
   */
  const call = <In=unknown, Out=void>(func: Callback<In, Out>, delay: number, ...args: Array<In>): void => {
    clearTimeout(timeoutRef.current as number);
    timeoutRef.current = setTimeout(func, delay, args);
  };

  /**
   * Cancel an existing debounce call. If one does not exist this does nothing.
   *
   * @return {void}
   */
  const cancel = (): void => {
    clearTimeout(timeoutRef.current as number);
    timeoutRef.current = null;
  };

  /** Output **/

  return {
    call,
    cancel,
  };
}
