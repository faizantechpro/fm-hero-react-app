/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { AdminIndexContextInterface } from '~/app/admin/providers/AdminIndexProvider';
import { AdminPrimaryLayout } from '~/layouts/Primary';
import { AdminAdminsNavigation } from '~/navigation/Secondary/Settings';
import { Text } from '~/components/Base';
import { RouteProps } from '~/components/Router';
import { ScreenOptions, useScreen } from '~/hooks/Util/Screen';

/**
 * Types/Interfaces
*/

export interface ShowAdminPropsRouteParams {
  //
}

export interface ShowAdminProps extends RouteProps<ShowAdminPropsRouteParams, AdminIndexContextInterface> {
  //
}

/**
 * Locals
*/

const options: ScreenOptions = {
  title: 'Update Admin User',
  breadcrumbs: [],
};

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function ShowAdmin(props: ShowAdminProps): JSX.Element {
  /** Hooks **/

  const screen = useScreen(props, options);

  /** Output **/

  return (
    <AdminPrimaryLayout
      title={ screen.title }
      secondaryNavigation={ AdminAdminsNavigation }
    >
      <Text>Show Admin</Text>
    </AdminPrimaryLayout>
  );
}
