/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { UserPrimaryLayout } from '~/layouts/Primary';
import { Text } from '~/components/Base';
import { RouteProps } from '~/components/Router';
import { ScreenOptions, useScreen } from '~/hooks/Util/Screen';

/**
 * Types/Interfaces
*/

export interface NotFoundParams {
  //
}

export interface NotFoundProps extends RouteProps<NotFoundParams> {
  //
}

/**
 * Locals
*/

const options: ScreenOptions = {
  title: 'Not Found',
  breadcrumbs: [],
};

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function NotFound(props: NotFoundProps): JSX.Element {
  /** Hooks **/

  const screen = useScreen(props, options);

  /** Output **/

  return (
    <UserPrimaryLayout title={ screen.title }>
      <Text className='mt-2'>
        The requested page could not be found.
      </Text>
    </UserPrimaryLayout>
  );
}
