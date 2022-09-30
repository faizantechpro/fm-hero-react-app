/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { Router } from '~/components/Router';
import { CreateSite, ListSite, ShowSite } from '~/app/user/screens/identified/Sites';
import { SiteIndexContext, SiteIndexProvider } from '~/app/user/providers/SiteIndexProvider';

/**
 * Locals
*/

const routesShowSite = [
  {
    path: '',
    group: 'sites',
    component: ShowSite,
  },
];

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function ShowSiteRouter(): JSX.Element {
  return (
    <Router
      routes={ routesShowSite }
      context={ SiteIndexContext }
    />
  );
}

/**
 * Locals
*/

const routes = [
  {
    path: '/create',
    group: 'sites',
    component: CreateSite,
  },
  {
    path: '/:id',
    group: 'sites',
    component: ShowSiteRouter,
  },
  {
    path: '',
    group: 'sites',
    component: ListSite,
  },
];

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function SiteRouter(): JSX.Element {
  return (
    <Router
      routes={ routes }
      container={ SiteIndexProvider }
      context={ SiteIndexContext }
    />
  );
}
