/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { Router } from '~/components/Router';
import { CreateAsset, ListAsset, ShowAsset } from '~/app/user/screens/identified/Assets';
import { AssetIndexContext, AssetIndexProvider } from '~/app/user/providers/AssetIndexProvider';

/**
 * Locals
*/

const routesShowAsset = [
  {
    path: '',
    group: 'assets',
    component: ShowAsset,
  },
];

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function ShowAssetRouter(): JSX.Element {
  return (
    <Router
      routes={ routesShowAsset }
      context={ AssetIndexContext }
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
    component: CreateAsset,
  },
  {
    path: '/:id',
    group: 'assets',
    component: ShowAssetRouter,
  },
  {
    path: '',
    group: 'assets',
    component: ListAsset,
  },
];

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function AssetRouter(): JSX.Element {
  return (
    <Router
      routes={ routes }
      container={ AssetIndexProvider }
      context={ AssetIndexContext }
    />
  );
}
