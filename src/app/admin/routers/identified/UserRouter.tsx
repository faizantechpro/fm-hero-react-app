/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { Router } from '~/components/Router';
import { UserIndexContext, UserIndexProvider } from '~/app/admin/providers/UserIndexProvider';
import { CreateUser, ListUser, ShowUser } from '~/app/admin/screens/identified/Users';

/**
 * Locals
*/

const routesShowUser = [
  {
    path: '',
    group: 'users',
    component: ShowUser,
  },
];

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function ShowUserRouter(): JSX.Element {
  return (
    <Router
      routes={ routesShowUser }
      context={ UserIndexContext }
    />
  );
}

/**
 * Locals
*/

const routes = [
  {
    path: '/create',
    group: 'users',
    component: CreateUser,
  },
  {
    path: '/technicians',
    group: 'users',
    component: ListUser,
  },
  {
    path: '/contractors',
    group: 'users',
    component: ListUser,
  },
  {
    path: '/:id',
    group: 'users',
    component: ShowUserRouter,
  },
  {
    path: '',
    group: 'users',
    component: ListUser,
  },
];

/**
 * @return {JSX.Element}
 */
export function UserRouter(): JSX.Element {
  return (
    <Router
      routes={ routes }
      container={ UserIndexProvider }
      context={ UserIndexContext }
    />
  );
}
