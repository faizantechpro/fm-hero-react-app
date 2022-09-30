/**
 * Global Imports
*/

import { useContext, useEffect } from 'react';

/**
 * Root Imports
*/

import { TokenModel } from '@models/TokenModel';
import { TokenStorage } from '@util/TokenStorage';

/**
 * Local Imports
*/

import { AppContext } from '~/providers/AppProvider';
import { useAuth } from '~/hooks/User';

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function Loading(): JSX.Element {
  /** Hooks **/

  const app = useContext(AppContext);
  const auth = useAuth();

  /** Side-Effects **/

  useEffect((): void => {
    TokenStorage.get().then((token: TokenModel): void => {
      if (token) {
        checkToken(token);
      } else {
        preload();
      }
    });
  }, []);

  /** Functions **/

  /**
   * @return {void}
   */
  const preload = async (): Promise<void> => {
    app.setIsReady(true);
  };

  /**
   * @return {Promise<void>}
   */
  const checkToken = async (token: TokenModel): Promise<void> => {
    try {
      await auth.refresh(token);
    } catch (error) {
      if (error.response?.status === 401) {
        auth.logout();
      } else {
        throw error;
      }
    } finally {
      preload();
    }
  };

  /** Output **/

  return (
    null
  );
}
