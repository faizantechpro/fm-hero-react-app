/**
 * Global Imports
*/

import React from 'react';

/**
 * Root Imports
*/

import { UserModel } from '@models/UserModel';

/**
 * Local Imports
*/

import { UserIndexContext, UserIndexContextInterface } from '~/app/admin/providers/UserIndexProvider';
import { AdminPrimaryLayout } from '~/layouts/Primary';
import { AdminUsersNavigation } from '~/navigation/Secondary/Settings';
import { ResourceTable, ResourceTableCols } from '~/components/FMHero/Table';
import { PaginateNavigation } from '~/components/FMHero/Paginate';
import { RouteProps } from '~/components/Router';
import { ColorButton } from '~/components/FMHero/Button';
import { Row } from '~/components/Grid';
import { ScreenOptions, useScreen } from '~/hooks/Util/Screen';
import { useResourceIndex } from '~/hooks/Util/ResourceIndex';
import { useDebounce, usePaginate } from '~/hooks/Util';
import { Input } from '~/components/Form';
import { SearchOptions } from '~/providers/ResourceIndexProvider';

/**
 * Types/Interfaces
*/

export interface ListUserPropsRouteParams {
  //
}

export interface ListUserProps extends RouteProps<ListUserPropsRouteParams, UserIndexContextInterface> {
  //
}

/**
 * Locals
*/

const screenOptions: ScreenOptions = {
  title: 'Manage Users',
  breadcrumbs: [],
};

const searchOptions: SearchOptions = {
  query: null,
  attributes: [
    'full_name',
    'email',
    'company.name',
    'address.postal_code',
    'address.province',
  ]
};

const usersTable: ResourceTableCols<UserModel> = {
  'Name': {
    className: 'w-25p',
    fieldName: 'full_name',
  },

  'Email Address': {
    className: 'w-25p',
    fieldName: 'email',
  },

  'Mobile #': {
    className: 'w-50p',
    fieldName: 'primary_phone_number',
  },
};

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function Header(): JSX.Element {
  /** Hooks **/

  const index = useResourceIndex(UserIndexContext, searchOptions);
  const debounce = useDebounce();

  /** Event Handlers **/

  /**
   * @return {void}
   */
  const handleChangeSearch = (value: string): void => {
    debounce.call((): void => index.setSearchQuery(value), 225);
  };

  /**
   * @return {void}
   */
  const handlePress = (): void => {
    //
  };

  /** Output **/

  return (
    <Row>
      <Input
        name='search'
        placeholder='Search…'
        className='mr-4 px-4 py-3 border-fmhero-gray-600'
        form={ null }
        initialValue={ index.searchQuery || '' }
        onChangeValue={ handleChangeSearch }
      />
      <ColorButton
        label='Export'
        color='bg-fmhero-blue-600'
        onPress={ handlePress }
      />
    </Row>
  );
}

/**
 * @return {JSX.Element}
 */
export function ListUser(props: ListUserProps): JSX.Element {
  /** Hooks **/

  const screen = useScreen(props, screenOptions);
  const index = useResourceIndex(UserIndexContext);
  const paginate = usePaginate(index);

  /** Output **/

  return (
    <AdminPrimaryLayout
      title={ screen.title }
      titleRow={ Header }
      secondaryNavigation={ AdminUsersNavigation }
    >
      <ResourceTable
        linkTo='/users'
        cols={ usersTable }
        items={ index.searchQuery ? index.filtered : index.resources }
        offset={ paginate.offset }
        loading={ !index.resources }
      />
      <PaginateNavigation
        current={ paginate.current }
        total={ paginate.total }
        onNavigate={ paginate.setCurrent }
      />
    </AdminPrimaryLayout>
  );
}
