/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { Router, RouteOptions } from '~/components/Router';
import { ShowDataManagement } from '~/app/admin/screens/identified/DataManagement';

/**
 * Locals
*/

const routes: Array<RouteOptions<{}, {}>> = [
  {
    path: '',
    group: 'data-management',
    component: ShowDataManagement,
  },
];

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function DataManagementRouter(): JSX.Element {
  return (
    <Router routes={ routes } />
  );
}
