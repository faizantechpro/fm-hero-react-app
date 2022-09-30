/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { UserPrimaryLayout } from '~/layouts/Primary';
import { Text } from '~/components/Base';
import { ScreenOptions, useScreen } from '~/hooks/Util/Screen';

/**
 * Locals
*/

const options: ScreenOptions = {
  title: 'Forbidden',
  breadcrumbs: null,
};

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function Forbidden(): JSX.Element {
  /** Hooks **/

  const screen = useScreen(undefined, options);

  /** Output **/

  return (
    <UserPrimaryLayout title={ screen.title }>
      <Text>Forbidden</Text>
    </UserPrimaryLayout>
  );
}
