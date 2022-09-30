/**
 * Global Imports
*/

import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

/**
 * Main
*/

/**
 * @return {void}
 */
export function usePreEffect(effect: EffectCallback): void {
  /** Refs **/

  const hasBeenCalledRef = useRef<boolean>();

  /** Side-Effects **/

  if (!hasBeenCalledRef.current) {
    hasBeenCalledRef.current = true;
    effect();
  }
}

/**
 * @return {void}
 */
export function usePostEffect(effect: EffectCallback, deps: DependencyList): void {
  /** Refs **/

  const isMountedRef = useRef<boolean>();

  /** Side-Effects **/

  useEffect((): void => {
    if (isMountedRef.current) {
      effect();
    } else {
      isMountedRef.current = true;
    }
  }, deps);
}
