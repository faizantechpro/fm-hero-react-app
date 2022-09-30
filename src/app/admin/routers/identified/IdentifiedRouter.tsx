/**
 * Global Imports
*/

import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Local Imports
*/

import { NotFound } from '~/app/admin/screens/identified/Error';

/**
 * Relative Imports
*/

import { AdminRouter } from './AdminRouter';
import { AnalyticsRouter } from './AnalyticsRouter';
import { DataManagementRouter } from './DataManagementRouter';
import { SettingsRouter } from './SettingsRouter';
import { UserRouter } from './UserRouter';

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function IdentifiedRouter(): JSX.Element {
  return (
    <Switch>
      <Route path='/' exact component={ AnalyticsRouter } />
      <Route path='/data' component={ DataManagementRouter } />
      <Route path='/users' component={ UserRouter } />
      <Route path='/admins' component={ AdminRouter } />
      <Route path='/settings' component={ SettingsRouter } />
      <Route component={ NotFound } />
    </Switch>
  );
}
