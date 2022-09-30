/**
 * Global Imports
*/

import React from 'react';

/**
 * Root Imports
*/

import { FMHeroLogoType } from '@config';

/**
 * Local Imports
*/

import { UserPrimaryLayout } from '~/layouts/Primary';
import { View } from '~/components/Base';
import { RouteProps } from '~/components/Router';
import { ScreenOptions, useScreen } from '~/hooks/Util/Screen';

/**
 * Types/Interfaces
*/

export interface ShowReportDashboardPropsRouteParams {
  //
}

export interface ShowReportDashboardProps extends RouteProps<ShowReportDashboardPropsRouteParams> {
  //
}

/**
 * Locals
*/

const options: ScreenOptions = {
  title: 'Reports',
  breadcrumbs: [],
};

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function ShowReportDashboard(props: ShowReportDashboardProps): JSX.Element {
  /** Hooks **/

  const screen = useScreen(props, options);

  /** Output **/

  return (
    <UserPrimaryLayout
      title={ screen.title }
    >
      <View>
        Reports Dashboard
      </View>
    </UserPrimaryLayout>
  );
}
