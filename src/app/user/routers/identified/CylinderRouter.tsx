/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { Router } from '~/components/Router';
import { CreateCylinder, ListCylinder, ShowCylinder } from '~/app/user/screens/identified/Cylinders';
import { CylinderIndexContext, CylinderIndexProvider } from '~/app/user/providers/CylinderIndexProvider';

/**
 * Locals
*/

const routesShow = [
  {
    path: '',
    group: 'assets',
    component: ShowCylinder,
  },
];

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function ShowCylinderRouter(): JSX.Element {
  return (
    <Router
      routes={ routesShow }
      context={ CylinderIndexContext }
    />
  );
}

/**
 * Locals
*/

const routes = [
  {
    path: '/create',
    group: 'assets',
    component: CreateCylinder,
  },
  {
    path: '/:id',
    group: 'assets',
    component: ShowCylinderRouter,
  },
  {
    path: '',
    group: 'assets',
    component: ListCylinder,
  },
];

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function CylinderRouter(): JSX.Element {
  return (
    <Router
      routes={ routes }
      container={ CylinderIndexProvider }
      context={ CylinderIndexContext }
    />
  );
}
