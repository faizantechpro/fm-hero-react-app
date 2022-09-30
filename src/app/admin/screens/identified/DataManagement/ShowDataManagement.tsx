/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { AdminPrimaryLayout } from '~/layouts/Primary';
import { Text } from '~/components/Base';
import { RouteProps } from '~/components/Router';
import { ScreenOptions, useScreen } from '~/hooks/Util/Screen';

/**
 * Types/Interfaces
*/

export interface ShowDataManagementPropsRouteParams {
  //
}

export interface ShowDataManagementProps extends RouteProps<ShowDataManagementPropsRouteParams> {
  //
}

/**
 * Locals
*/

const options: ScreenOptions = {
  title: 'Data Management',
  breadcrumbs: [],
};

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function ShowDataManagement(props: ShowDataManagementProps): JSX.Element {
  /** Hooks **/

  const screen = useScreen(props, options);

  /** Output **/

  return (
    <AdminPrimaryLayout title={ screen.title }>
      <Text>Data Management</Text>
    </AdminPrimaryLayout>
  );
}
