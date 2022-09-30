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

export interface ShowCylinderPropsRouteParams {
  //
}

export interface ShowCylinderProps extends RouteProps<ShowCylinderPropsRouteParams> {
  //
}

/**
 * Locals
*/

const options: ScreenOptions = {
  title: 'Cylinder',
  breadcrumbs: [],
};

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function ShowCylinder(props: ShowCylinderProps): JSX.Element {
  /** Hooks **/

  const screen = useScreen(props, options);

  /** Output **/

  return (
    <UserPrimaryLayout
      title={ screen.title }
    >
      <View>
        Cylinder
      </View>
    </UserPrimaryLayout>
  );
}
