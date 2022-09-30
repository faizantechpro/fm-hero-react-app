/**
 * Global Imports
*/

import { useEffect, useRef } from 'react';

/**
 * Main
*/

/**
 * @return {boolean}
 */
export function useIsMounted(): boolean {
  /** Refs **/

  const isMountedeRef = useRef<boolean>();

  /** Side-Effects **/

  useEffect((): void => {
    isMountedeRef.current = true;
  }, []);

  /** Output **/

  return isMountedeRef.current;
}
