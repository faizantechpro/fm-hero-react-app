/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { Router, RouteOptions } from '~/components/Router';
import { ShowAnalytics } from '~/app/admin/screens/identified/Analytics';

/**
 * Locals
*/

const routes: Array<RouteOptions<{}, {}>> = [
  {
    path: '',
    group: 'analytics',
    component: ShowAnalytics,
  },
];

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function AnalyticsRouter(): JSX.Element {
  return (
    <Router routes={ routes } />
  );
}
