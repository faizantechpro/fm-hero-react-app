/**
 * Global Imports
*/

import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Local Imports
*/

import { ShowReportDashboard } from '~/app/user/screens/identified/Reports';

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function ReportRouter(): JSX.Element {
  return (
    <Switch>
      <Route component={ ShowReportDashboard } />
    </Switch>
  );
}
