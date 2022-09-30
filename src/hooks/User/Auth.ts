/**
 * Global Imports
*/

import { useContext, useEffect, useRef } from 'react';

/**
 * Root Imports
*/

import { Token as TokenServices } from '@services/api';
import { Token } from '@util/Token';
import { TokenStorage } from '@util/TokenStorage';
import { Api, Authorization, ResourceIdentity } from '@util/Api';
import { IdentityModel } from '@models/IdentityModel';
import { UserModel } from '@models/UserModel';

/**
 * Local Imports
*/

import { AuthContext } from '~/providers/AuthProvider';
import { UserContext } from '~/providers/UserProvider';

/**
 * Types/Interfaces
*/

export interface AuthLoginOptions {
  remember?: boolean;
}

export interface AuthLogin {
  user: UserModel;
  identity: IdentityModel;
  token: Authorization;
}

export interface AuthHook {
  refresh: (token: Authorization) => Promise<void>;
  login: (auth: AuthLogin, options?: AuthLoginOptions) => Promise<void>;
  logout: () => Promise<void>;
}

/**
 * Main
*/

/**
 * @return {AuthHook}
 */
export function useAuth(): AuthHook {
  /** Refs **/

  const loginResolveRef = useRef<()=>void>();
  const logoutResolveRef = useRef<()=>void>();

  /** Contexts **/

  const { setIdentity, setUser } = useContext(UserContext);
  const { hasStorageRef, credentials, setCredentials } = useContext(AuthContext);

  /** Side-Effects **/

  useEffect((): void => {
    if (credentials) {
      if (loginResolveRef.current) {
        handleResolveLogin();
      }
    } else {
      if (logoutResolveRef.current) {
        handleResolveLogout();
      }
      hasStorageRef.current = false;
    }
  }, [ credentials ]);

  /** Event Handlers **/

  /**
   * @return {void}
   */
  const handleResolveLogin = (): void => {
    loginResolveRef.current();
    loginResolveRef.current = null;
  };

  /**
   * @return {void}
   */
  const handleResolveLogout = (): void => {
    logoutResolveRef.current();
    logoutResolveRef.current = null;
  };

  /** Helpers **/

  /**
   * @param {number} id
   * @param {Authorization} token
   *
   * @return {Promise<void>}
   */
  const refresh = async (token: Authorization): Promise<void> => {
    const which: ResourceIdentity = { id: Token.primaryKey(token) };
    const response: AuthLogin = await TokenServices.refresh(which, null, token);

    await login(response, { remember: true });
  };

  /**
   * @param {AuthLogin} auth
   * @param {AuthLoginOptions} options
   *
   * @return {Promise<void>}
   */
  const login = (auth: AuthLogin, options?: AuthLoginOptions): Promise<void> => {
    return new Promise(async (resolve, reject): Promise<void> => {
      Api.setDefaultAuth(auth.token);

      loginResolveRef.current = (): void => resolve();
      hasStorageRef.current = !!options?.remember;

      if (hasStorageRef.current) {
        try {
          await TokenStorage.set(auth.token);
        } catch (error) {
          return reject(error);
        }
      }

      setUser(auth.user);
      setIdentity(auth.identity);
      setCredentials(auth.token);
    });
  };

  /**
   * @return {Promise<void>}
   */
  const logout = (): Promise<void> => {
    return new Promise(async (resolve, reject): Promise<void> => {
      logoutResolveRef.current = (): void => resolve();

      if (hasStorageRef.current) {
        try {
          await TokenStorage.clear();
        } catch (error) {
          return reject(error);
        }
      }

      setUser(null);
      setIdentity(null);
      setCredentials(null);
    });
  };

  /** Output **/

  return {
    refresh, login, logout
  };
}
