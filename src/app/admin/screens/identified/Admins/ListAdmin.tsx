/**
 * Global Imports
*/

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Root Imports
*/

import { UserModel } from '@models/UserModel';

/**
 * Local Imports
*/

import { AdminIndexContext, AdminIndexContextInterface } from '~/app/admin/providers/AdminIndexProvider';
import { AdminPrimaryLayout } from '~/layouts/Primary';
import { AdminAdminsNavigation } from '~/navigation/Secondary/Settings';
import { ResourceTable, ResourceTableCols } from '~/components/FMHero/Table';
import { PaginateNavigation } from '~/components/FMHero/Paginate';
import { RouteProps } from '~/components/Router';
import { ScreenOptions, useScreen } from '~/hooks/Util/Screen';
import { useResourceIndex } from '~/hooks/Util/ResourceIndex';
import { usePaginate } from '~/hooks/Util';

/**
 * Types/Interfaces
*/

export interface ListAdminPropsRouteParams {
  //
}

export interface ListAdminProps extends RouteProps<ListAdminPropsRouteParams, AdminIndexContextInterface> {
  //
}

/**
 * Locals
*/

const options: ScreenOptions = {
  title: 'Admins',
  breadcrumbs: [],
};

const usersTable: ResourceTableCols<UserModel> = {
  'Admin Name': {
    className: 'w-25p',
    fieldName: 'full_name',
  },

  'Email Address': {
    className: 'w-25p',
    fieldName: 'email',
  },

  'Role': {
    className: 'w-50p',
    fieldName: 'first_name',
  },
};

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function Header(): JSX.Element {
  return (
    <Link to='/admins/create' className='btn btn-83 text-white bg-fmhero-blue-600'>
      Add Admin User
    </Link>
  );
}

/**
 * @return {JSX.Element}
 */
export function ListAdmin(props: ListAdminProps): JSX.Element {
  /** Hooks **/

  const screen = useScreen(props, options);
  const index = useResourceIndex(AdminIndexContext);
  const paginate = usePaginate(index);

  /** Output **/

  return (
    <AdminPrimaryLayout
      title={ screen.title }
      titleRow={ Header }
      secondaryNavigation={ AdminAdminsNavigation }
    >
      <ResourceTable
        linkTo='/admins'
        cols={ usersTable }
        items={ index.resources }
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
