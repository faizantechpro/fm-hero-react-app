/**
 * Global Imports
*/

import React, { Context, Fragment, FunctionComponent, ReactNode } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

/**
 * Types/Interfaces
*/

interface RouteListProps {
  routes: Array<any>;
  path: string;
}

export interface RouteLocation {
  pathname: string;
  key: string;
  search: string;
}

export interface RouteMatch {
  isExact: boolean;
  path: string;
  url: string;
  params?: Record<string, string>;
}

export interface RouteProps<RouteParams, ContextInterface = {}> {
  path: string;
  group: string;
  location: RouteLocation;
  match: RouteMatch;
  context?: Context<ContextInterface>;
  params?: RouteParams;
}

export type RouteComponent<RouteParams, ContextInterface> = FunctionComponent<RouteProps<RouteParams, ContextInterface>>;

export interface RouteOptions<RouteParams, ContextInterface> {
  path: string;
  group: string;
  component: RouteComponent<RouteParams, ContextInterface>;
}

export interface RouterContainerProps {
  children: ReactNode;
}

export interface RouterProps<RouteParams, ContextInterface> {
  routes: Array<RouteOptions<RouteParams, ContextInterface>>;
  container: FunctionComponent<RouterContainerProps>;
  context?: Context<ContextInterface>;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function BaseRouteList<RouteParams, ContextInterface>(props: RouteListProps): JSX.Element {
  return (
    <Switch>
      {
        props.routes.map((route: RouteOptions<RouteParams, ContextInterface>, index: number): JSX.Element => (
          <Route
            key={ index }
            component={ route.component }
            path={ props.path + (route.path ?? '') }
          />
        ))
      }
    </Switch>
  );
}

const RouteList = React.memo(BaseRouteList);

/**
 * @return {JSX.Element}
 */
export function Router<RouteParams = unknown, ContextInterface = {}>(props: RouterProps<RouteParams, ContextInterface>): JSX.Element {
  /** Hooks **/

  const match = useRouteMatch();

  /** Output **/

  return (
    <props.container>
      <RouteList
        routes={ props.routes }
        path={ match.path }
      />
    </props.container>
  );
}

Router.defaultProps = {
  container: Fragment,
};
