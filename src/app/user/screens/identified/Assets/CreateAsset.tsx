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

export interface CreateAssetPropsRouteParams {
  //
}

export interface CreateAssetProps extends RouteProps<CreateAssetPropsRouteParams> {
  //
}

/**
 * Locals
*/

const options: ScreenOptions = {
  title: 'Create Asset',
  breadcrumbs: [],
};

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function CreateAsset(props: CreateAssetProps): JSX.Element {
  /** Hooks **/

  const screen = useScreen(props, options);

  /** Output **/

  return (
    <UserPrimaryLayout
      title={ screen.title }
    >
      <View>
        Create Asset
      </View>
    </UserPrimaryLayout>
  );
}
