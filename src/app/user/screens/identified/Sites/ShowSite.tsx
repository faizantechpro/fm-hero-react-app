/**
 * Global Imports
*/

import React, { ReactNode, useEffect, useContext, useState } from 'react';

/**
 * Local Imports
*/

import { UserPrimaryLayout } from '~/layouts/Primary';
import { SiteIndexContextInterface } from '~/app/user/providers/SiteIndexProvider';
import { Text, View } from '~/components/Base';
import { RouteProps } from '~/components/Router';
import { ScreenOptions, useScreen } from '~/hooks/Util/Screen';

/**
 * Types/Interfaces
*/

export interface ShowSiteRouteParams {
  //
}

export interface ShowSiteProps extends RouteProps<ShowSiteRouteParams, SiteIndexContextInterface> {
  //
}

/**
 * Locals
*/

const options: ScreenOptions = {
  title: 'Site',
  breadcrumbs: [],
};

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function ShowSite(props: ShowSiteProps): JSX.Element {
  /** Hooks **/

  const screen = useScreen(props, options);

  /** Output **/

  return (
    <UserPrimaryLayout
      title={ screen.title }
    >
      <View>
        Show Site
      </View>
    </UserPrimaryLayout>
  );
}
