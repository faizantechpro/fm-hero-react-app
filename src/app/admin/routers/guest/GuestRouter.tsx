/**
 * Global Imports
*/

import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Local Imports
*/

import { Login } from '~/app/admin/screens/guest';

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function GuestRouter(): JSX.Element {
  return (
    <Switch>
      <Route component={ Login } />
    </Switch>
  );
}
