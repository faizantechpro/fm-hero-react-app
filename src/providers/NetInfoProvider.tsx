/**
 * Global Imports
*/

import React, { ReactNode, createContext, useEffect, useMemo, useState } from 'react';

/**
 * Root Imports
*/

import { SetStateHandler } from '@util/React';

/**
 * Types/Interfaces
*/

export enum NetInfoStatus {
  Offline,
  MaybeOnline,
  Online,
}

export interface NetInfoProviderProps {
  children: ReactNode;
}

export interface NetInfoContextInterface {
  status: NetInfoStatus;
  setStatus: SetStateHandler<NetInfoStatus>;
}

/**
 * Contexts
*/

export const NetInfoContext = createContext<NetInfoContextInterface>(undefined);

/**
 * Provider
*/

/**
 * @return {JSX.Element}
 */
export function NetInfoProvider(props: NetInfoProviderProps): JSX.Element {
  /** States **/

  const [ status, setStatus ] = useState<NetInfoStatus>();

  /** Memos **/

  const value = useMemo((): NetInfoContextInterface => ({ status, setStatus }), [ status ]);

  /** Side-Effects **/

  useEffect((): void => {
    window.addEventListener('offline', () => setStatus(_ => NetInfoStatus.Offline));
    window.addEventListener('online', () => setStatus(_ => NetInfoStatus.MaybeOnline));
  }, []);

  useEffect((): void => {
    if (status === NetInfoStatus.MaybeOnline) {
      //
    }
  }, [ status ]);

  /** Output **/

  return (
    <NetInfoContext.Provider value={ value }>
      { props.children }
    </NetInfoContext.Provider>
  );
}
