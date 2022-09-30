/**
 * Global Imports
*/

import React from 'react';

/**
 * Root Imports
*/

import { ServiceEventModel } from '@models/ServiceEventModel';

/**
 * Local Imports
*/

import { ServiceEventIndexContext, ServiceEventIndexContextInterface } from '~/app/user/providers/ServiceEventIndexProvider';
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

export interface ListServiceEventPropsRouteParams {
  //
}

export interface ListServiceEventProps extends RouteProps<ListServiceEventPropsRouteParams, ServiceEventIndexContextInterface> {
  //
}

/**
 * Locals
*/

const screenOptions: ScreenOptions = {
  title: 'Manage Service Events',
  breadcrumbs: [],
};

const searchOptions: SearchOptions = {
  query: null,
  attributes: [
    'event_description',
  ]
};

const serviceEventsTable: ResourceTableCols<ServiceEventModel> = {
  'Name': {
    className: 'w-25p',
    fieldName: 'event_description',
  },

  'Foo': {
    className: 'w-25p',
    fieldName: 'event_description',
  },

  'Bar': {
    className: 'w-50p',
    fieldName: 'event_description',
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

  const index = useResourceIndex(ServiceEventIndexContext, searchOptions);
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
export function ListServiceEvent(props: ListServiceEventProps): JSX.Element {
  /** Hooks **/

  const screen = useScreen(props, screenOptions);
  const index = useResourceIndex(ServiceEventIndexContext);
  const paginate = usePaginate(index);

  /** Output **/

  return (
    <UserPrimaryLayout
      title={ screen.title }
      titleRow={ Header }
    >
      <ResourceTable
        linkTo='/service-events'
        cols={ serviceEventsTable }
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
