/**
 * Global Imports
*/

import React from 'react';

/**
 * Root Imports
*/

import { SiteModel } from '@models/SiteModel';

/**
 * Local Imports
*/

import { SiteIndexContext, SiteIndexContextInterface } from '~/app/user/providers/SiteIndexProvider';
import { UserPrimaryLayout } from '~/layouts/Primary';
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

export interface ListSitePropsRouteParams {
  //
}

export interface ListSiteProps extends RouteProps<ListSitePropsRouteParams, SiteIndexContextInterface> {
  //
}

/**
 * Locals
*/

const screenOptions: ScreenOptions = {
  title: 'Manage Sites',
  breadcrumbs: [],
};

const searchOptions: SearchOptions = {
  query: null,
  attributes: [
    'name',
    'address.postal_code',
    'address.province',
  ]
};

const sitesTable: ResourceTableCols<SiteModel> = {
  'Name': {
    className: 'w-25p',
    fieldName: 'name',
  },

  'Site Code': {
    className: 'w-25p',
    fieldName: 'name',
  },

  'Status': {
    className: 'w-50p',
    fieldName: 'name',
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

  const index = useResourceIndex(SiteIndexContext, searchOptions);
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
  const handlePressExport = (): void => {
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
        onPress={ handlePressExport }
      />
    </Row>
  );
}

/**
 * @return {JSX.Element}
 */
export function ListSite(props: ListSiteProps): JSX.Element {
  /** Hooks **/

  const screen = useScreen(props, screenOptions);
  const index = useResourceIndex(SiteIndexContext);
  const paginate = usePaginate(index);

  /** Output **/

  return (
    <UserPrimaryLayout
      title={ screen.title }
      titleRow={ Header }
    >
      <ResourceTable
        linkTo='/sites'
        cols={ sitesTable }
        items={ index.searchQuery ? index.filtered : index.resources }
        offset={ paginate.offset }
        loading={ !index.resources }
      />
      <PaginateNavigation
        current={ paginate.current }
        total={ paginate.total }
        onNavigate={ paginate.setCurrent }
      />
    </UserPrimaryLayout>
  );
}
