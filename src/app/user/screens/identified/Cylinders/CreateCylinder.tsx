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

export interface CreateCylinderPropsRouteParams {
  //
}

export interface CreateCylinderProps extends RouteProps<CreateCylinderPropsRouteParams> {
  //
}

/**
 * Locals
*/

const options: ScreenOptions = {
  title: 'Create Cylinder',
  breadcrumbs: [],
};

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function CreateCylinder(props: CreateCylinderProps): JSX.Element {
  /** Hooks **/

  const screen = useScreen(props, options);

  /** Output **/

  return (
    <UserPrimaryLayout
      title={ screen.title }
    >
      <View>
        Create Cylinder
      </View>
    </UserPrimaryLayout>
  );
}
