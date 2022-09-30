/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { View } from '~/components/Base';
import { ConfirmLogout } from '~/components/FMHero/Auth';
import { NavigationButton, NavigationLink } from '~/components/FMHero/Navigation';
import { useScreen } from '~/hooks/Util';
import { useAuth } from '~/hooks/User';
import { useConfirm } from '~/hooks/Pick';

/**
 * Types/Interfaces
*/

type BaseAdminLinksProps = {
  uri: string;
};

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function BaseAdminLinks(props: BaseAdminLinksProps): JSX.Element {
  /** Hooks **/

  const auth = useAuth();
  const confirm = useConfirm();

  /** Event Handlers **/

  /**
   * @return {void}
   */
  const handlePressLogout = (): void => {
    confirm.show({
      render: ConfirmLogout,
      onConfirm: auth.logout,
    });
  };

  /** Output **/

  return (
    <View className='flex flex-col'>
      <NavigationLink
        to='/'
        label='Analytics'
        icon='chart-bar'
        active={ props.uri === '/' }
      />

      <NavigationLink
        to='/data'
        label='Data Management'
        icon='wrench'
        active={ props.uri.startsWith('/data') }
      />

      <NavigationLink
        to='/users'
        label='Manage Users'
        icon='users'
        active={ props.uri.startsWith('/users') }
      />

      <NavigationLink
        to='/admins'
        label='Manage Admins'
        icon='user-lock'
        active={ props.uri.startsWith('/admins') }
      />

      <NavigationLink
        to='/settings'
        label='Settings'
        icon='cogs'
        active={ props.uri.startsWith('/settings') }
      />

      <NavigationButton
        label='Logout'
        icon='sign-out-alt'
        active={ false }
        onPress={ handlePressLogout }
      />
    </View>
  );
}

const AdminLinks = React.memo(BaseAdminLinks);

/**
 * @return {JSX.Element}
 */
export function AdminPrimaryNavigation(): JSX.Element {
  /** Hooks **/

  const screen = useScreen();

  /** Output **/

  return (
    <AdminLinks uri={ screen.uri } />
  );
}
