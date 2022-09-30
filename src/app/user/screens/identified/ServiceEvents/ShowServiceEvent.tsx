/**
 * Global Imports
*/

import React, { ReactNode, useEffect, useContext, useState } from 'react';

/**
 * Local Imports
*/

import { UserPrimaryLayout } from '~/layouts/Primary';
import { ServiceEventIndexContextInterface } from '~/app/user/providers/ServiceEventIndexProvider';
import { Text, View } from '~/components/Base';
import { RouteProps } from '~/components/Router';
import { ScreenOptions, useScreen } from '~/hooks/Util/Screen';

/**
 * Types/Interfaces
*/

export interface ShowServiceEventRouteParams {
  //
}

export interface ShowServiceEventProps extends RouteProps<ShowServiceEventRouteParams, ServiceEventIndexContextInterface> {
  //
}

/**
 * Locals
*/

const options: ScreenOptions = {
  title: 'Service Event',
  breadcrumbs: [],
};

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function ShowServiceEvent(props: ShowServiceEventProps): JSX.Element {
  /** Hooks **/

  const screen = useScreen(props, options);

  /** Output **/

  return (
    <UserPrimaryLayout
      title={ screen.title }
    >
      <View>
        Show Service Event
      </View>
    </UserPrimaryLayout>
  );
}
