/**
 * Global Imports
*/

import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Local Imports
*/

import { Login, Register, Welcome } from '~/app/user/screens/guest';

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function GuestRouter(): JSX.Element {
  return (
    <Switch>
      <Route path='/(signin|login)' component={ Login } />
      <Route path='/(signup|register)' component={ Register } />
      <Route path='' component={ Welcome } />
    </Switch>
  );
}
