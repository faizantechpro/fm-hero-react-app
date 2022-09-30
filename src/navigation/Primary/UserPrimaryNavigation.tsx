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

type BaseUserLinksProps = {
  uri: string;
};

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function BaseUserLinks(props: BaseUserLinksProps): JSX.Element {
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
        label='Dashboard'
        icon='tachometer-alt'
        active={ props.uri === '/' }
      />

      <NavigationLink
        to='/service-events'
        label='Service Events'
        icon='wrench'
        active={ props.uri.startsWith('/service-events') }
      />

      <NavigationLink
        to='/sites'
        label='Sites'
        icon='map-marked-alt'
        active={ props.uri.startsWith('/sites') }
      />

      <NavigationLink
        to='/cylinders'
        label='Cylinder Management'
        icon='warehouse'
        active={ props.uri.startsWith('/cylinders') }
      />

      <NavigationLink
        to='/assets'
        label='Asset Management'
        icon='tools'
        active={ props.uri.startsWith('/assets') }
      />

      <NavigationLink
        to='/reports'
        label='Reports'
        icon='clipboard-list'
        active={ props.uri.startsWith('/reports') }
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

const UserLinks = React.memo(BaseUserLinks);

/**
 * @return {JSX.Element}
 */
export function UserPrimaryNavigation(): JSX.Element {
  /** Hooks **/

  const screen = useScreen();

  /** Output **/

  return (
    <UserLinks uri={ screen.uri } />
  );
}
