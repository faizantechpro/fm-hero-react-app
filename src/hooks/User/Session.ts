/**
 * Global Imports
*/

import { useContext } from 'react';

/**
 * Root Imports
*/

import { IdentityModel } from '@models/IdentityModel';
import { UserAttributes, UserModel } from '@models/UserModel';
import { SetStateHandler } from '@util/React';

/**
 * Local Imports
*/

import { UserContext } from '~/providers/UserProvider';

/**
 * Types/Interfaces
*/

export interface SessionHook {
  user: UserModel;
  identity: IdentityModel;
  mergeUser: (values: UserAttributes) => void;
  setUser: SetStateHandler<UserModel>;
  setIdentity: SetStateHandler<IdentityModel>;
}

/**
 * Main
*/

/**
 * @return {SessionHook}
 */
export function useSession(): SessionHook {
  /** Hooks **/

  const context = useContext(UserContext);

  /** Helpers **/

  /**
   * @return {void}
   */
  const mergeUser = (values: UserAttributes): void => {
    return context.setUser((current: UserModel): UserModel => {
      return Object.assign({}, current, values);
    });
  };

  /** Output **/

  return {
    identity: context.identity,
    user: context.user,
    setIdentity: context.setIdentity,
    setUser: context.setUser,
    mergeUser,
  };
}
