/**
 * Global Imports
*/

import React, { ReactNode, createContext, useMemo, useState } from 'react';

/**
 * Root Imports
*/

import { SetStateHandler } from '@util/React';

/**
 * Types/Interfaces
*/

export interface AppProviderProps {
  children: ReactNode;
}

export interface AppContextInterface {
  isReady: boolean;
  setIsReady: SetStateHandler<boolean>;
}

/**
 * Contexts
*/

export const AppContext = createContext<AppContextInterface>(undefined);

/**
 * Components
 */

/**
 * @return {JSX.Element}
 */
export function AppProvider(props: AppProviderProps): JSX.Element {
  /** States **/

  const [ isReady, setIsReady ] = useState<boolean>();

  /** Memos **/

  const value = useMemo((): AppContextInterface => ({ isReady, setIsReady }), [ isReady ]);

  /** Output **/

  return (
    <AppContext.Provider value={ value }>
      { props.children }
    </AppContext.Provider>
  );
}
