/**
 * Global Imports
*/

import { FunctionComponent, createElement, useContext, useEffect, useMemo, useState } from 'react';

/**
 * Local Imports
*/

import { AppContext } from '~/providers/AppProvider';
import { useSession } from '~/hooks/User';

/**
 * Types/Interfaces
*/

export type UserGuardType = 'loading' | 'identified' | 'unidentified' | 'guest';
export type UserGuardProps = Record<UserGuardType, FunctionComponent>;

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function UserGuard(props: UserGuardProps) : JSX.Element {
  /** Hooks **/

  const app = useContext(AppContext);
  const session = useSession();

  /** States **/

  const [ router, setRouter ] = useState<UserGuardType>();

  /** Side-Effects **/

  useEffect((): void => {
    if (app.isReady) {
      handleChange();
    }
  }, [ app.isReady, session.user ]);

  /** Event Handlers **/

  /**
   * @return {void}
   */
  const handleChange = (): void => {
    setRouter((): UserGuardType => {
      if (session.user) {
        if (session.user.is_identified) {
          return 'identified';
        } else {
          return 'unidentified';
        }
      }

      return 'guest';
    });
  };

  /** Output **/

  return useMemo((): JSX.Element => createElement(props[router || 'loading']), [ router ]);
}
