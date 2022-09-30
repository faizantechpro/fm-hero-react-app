/**
 * Global Imports
*/

import React, { MutableRefObject, ReactNode, createContext, useMemo, useRef, useState } from 'react';

/**
 * Root Imports
*/

import { Authorization } from '@util/Api';
import { SetStateHandler } from '@util/React';

/**
 * Types/Interfaces
*/

export interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthContextInterface {
  credentials: Authorization;
  setCredentials: SetStateHandler<Authorization>;
  hasStorageRef: MutableRefObject<boolean>;
}

/**
 * Contexts
*/

export const AuthContext = createContext<AuthContextInterface>(undefined);

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function AuthProvider(props: AuthProviderProps): JSX.Element {
  /** Refs **/

  const hasStorageRef = useRef<boolean>();

  /** States **/

  const [ credentials, setCredentials ] = useState<Authorization>();

  /** Memos **/

  const value = useMemo((): AuthContextInterface => ({ credentials, setCredentials, hasStorageRef }), [ credentials ]);

  /** Output **/

  return (
    <AuthContext.Provider value={ value }>
      { props.children }
    </AuthContext.Provider>
  );
}
