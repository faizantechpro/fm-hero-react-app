/**
 * Global Imports
*/

import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Local Imports
*/

import { NotFound, ShowDashboard } from '~/app/user/screens/identified';

/**
 * Relative Imports
*/

import { AssetRouter } from './AssetRouter';
import { CylinderRouter } from './CylinderRouter';
import { ReportRouter } from './ReportRouter';
import { ServiceEventRouter } from './ServiceEventRouter';
import { SiteRouter } from './SiteRouter';

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function IdentifiedRouter(): JSX.Element {
  return (
    <Switch>
      <Route path='/' exact component={ ShowDashboard } />
      <Route path='/assets' component={ AssetRouter } />
      <Route path='/cylinders' component={ CylinderRouter } />
      <Route path='/reports' component={ ReportRouter } />
      <Route path='/service-events' component={ ServiceEventRouter } />
      <Route path='/sites' component={ SiteRouter } />
      <Route component={ NotFound } />
    </Switch>
  );
}
