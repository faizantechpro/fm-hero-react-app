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
import { ColorButton } from '~/components/FMHero/Button';
import { RouteProps } from '~/components/Router';
import { ScreenOptions, useScreen } from '~/hooks/Util/Screen';
import { StatBox } from '~/components/FMHero/Analytics';
import { useSession } from '~/hooks/User';

/**
 * Types/Interfaces
*/

export interface ShowDashboardPropsRouteParams {
  //
}

export interface ShowDashboardProps extends RouteProps<ShowDashboardPropsRouteParams> {
  //
}

/**
 * Locals
*/

const options: ScreenOptions = {
  title: 'Dashboard',
  breadcrumbs: [],
};

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function Header(): JSX.Element {
  /** Event Handlers **/

  /**
   * @return {void}
   */
  const handlePressExport = (): void => {
    //
  };

  /** Output **/

  return (
    <ColorButton
      label='Export'
      color='bg-fmhero-green-400'
      onPress={ handlePressExport }
    />
  );
}

/**
 * @return {JSX.Element}
 */
export function ShowDashboard(props: ShowDashboardProps): JSX.Element {
  /** Hooks **/

  const screen = useScreen(props, options);
  const session = useSession();

  /** Output **/

  return (
    <UserPrimaryLayout
      title={ 'Welcome back, ' + session.user?.first_name }
      titleRow={ Header }
    >
      <View>
        dashboard
      </View>
    </UserPrimaryLayout>
  );
}
