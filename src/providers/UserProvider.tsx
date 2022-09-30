/**
 * Global Imports
*/

import React, { ReactNode, createContext, useMemo, useState } from 'react';

/**
 * Root Imports
*/

import { IdentityModel } from '@models/IdentityModel';
import { UserModel } from '@models/UserModel';
import { SetStateHandler } from '@util/React';

/**
 * Types/Interfaces
*/

export interface UserProviderProps {
  children: ReactNode;
}

export interface UserContextInterface {
  user: UserModel;
  identity: IdentityModel;
  setUser: SetStateHandler<UserModel>;
  setIdentity: SetStateHandler<IdentityModel>;
}

/**
 * Contexts
*/

export const UserContext = createContext<UserContextInterface>(undefined);

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function UserProvider(props: UserProviderProps): JSX.Element {
  /** States **/

  const [ user, setUser ] = useState<UserModel>();
  const [ identity, setIdentity ] = useState<IdentityModel>();

  /** Memos **/

  const value = useMemo((): UserContextInterface => ({ user, setUser, identity, setIdentity }), [ user, identity ]);

  /** Output **/

  return (
    <UserContext.Provider value={ value }>
      { props.children }
    </UserContext.Provider>
  );
}
