/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { Router } from '~/components/Router';
import { AdminIndexContext, AdminIndexProvider } from '~/app/admin/providers';
import {
  CreateAdmin,
  ListAdmin,
  ShowAdmin } from '~/app/admin/screens/identified/Admins';

/**
 * Locals
*/

const routesShowAdmin = [
  {
    path: '',
    group: 'admins',
    component: ShowAdmin,
  },
];

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function ShowAdminRouter(): JSX.Element {
  return (
    <Router routes={ routesShowAdmin } />
  );
}

/**
 * Locals
*/

const routes = [
  {
    path: '/create',
    group: 'admins',
    component: CreateAdmin,
  },
  {
    path: '/pages/:page',
    group: 'admins',
    component: ListAdmin,
  },
  {
    path: '/:id',
    group: 'admins',
    component: ShowAdminRouter,
  },
  {
    path: '',
    group: 'admins',
    component: ListAdmin,
  },
];

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function AdminRouter(): JSX.Element {
  return (
    <Router
      container={ AdminIndexProvider }
      context={ AdminIndexContext }
      routes={ routes }
    />
  );
}
