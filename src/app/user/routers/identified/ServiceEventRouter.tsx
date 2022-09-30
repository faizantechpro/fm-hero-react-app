/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { Router } from '~/components/Router';
import { CreateServiceEvent, ListServiceEvent, ShowServiceEvent } from '~/app/user/screens/identified/ServiceEvents';
import { ServiceEventIndexContext, ServiceEventIndexProvider } from '~/app/user/providers/ServiceEventIndexProvider';

/**
 * Locals
*/

const routesShowServiceEvent = [
  {
    path: '',
    group: 'service-events',
    component: ShowServiceEvent,
  },
];

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function ShowServiceEventRouter(): JSX.Element {
  return (
    <Router
      routes={ routesShowServiceEvent }
      context={ ServiceEventIndexContext }
    />
  );
}

/**
 * Locals
*/

const routes = [
  {
    path: '/create',
    group: 'service-events',
    component: CreateServiceEvent,
  },
  {
    path: '/:id',
    group: 'service-events',
    component: ShowServiceEventRouter,
  },
  {
    path: '',
    group: 'service-events',
    component: ListServiceEvent,
  },
];

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function ServiceEventRouter(): JSX.Element {
  return (
    <Router
      routes={ routes }
      container={ ServiceEventIndexProvider }
      context={ ServiceEventIndexContext }
    />
  );
}
