/**
 * Global Imports
*/

import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * Local Imports
*/

import { UserGuestLayout, UserGuestLayoutMode } from '~/layouts/Guest';
import { UserContext } from '~/providers/UserProvider';

/**
 * Types/Interfaces
*/

export interface WelcomeProps {
  //
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function Welcome(props: WelcomeProps): JSX.Element {
  /** Contexts **/

  const context = useContext(UserContext);

  /** Side-Effects **/

  useEffect((): void => {
    //
  }, []);

  /** Output **/

  return (
    <UserGuestLayout mode={ UserGuestLayoutMode.Welcome }>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
    </UserGuestLayout>
  );
}
