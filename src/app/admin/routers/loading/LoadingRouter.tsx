/**
 * Global Imports
*/

import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Local Imports
*/

import { Loading } from '~/app/admin/screens/loading/Loading';

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function LoadingRouter(): JSX.Element {
  return (
    <Switch>
      <Route path='' component={ Loading } />
    </Switch>
  );
}
