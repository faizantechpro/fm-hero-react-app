/**
 * Global Imports
*/

import React from 'react';

/**
 * Root Imports
*/

import { CylinderModel } from '@models/CylinderModel';

/**
 * Local Imports
*/

import { UserPrimaryLayout } from '~/layouts/Primary';
import { CylinderIndexContext, CylinderIndexContextInterface } from '~/app/user/providers/CylinderIndexProvider';
import { Input } from '~/components/Form';
import { ResourceTable, ResourceTableCols } from '~/components/FMHero/Table';
import { PaginateNavigation } from '~/components/FMHero/Paginate';
import { ColorButton } from '~/components/FMHero/Button';
import { Row } from '~/components/Grid';
import { RouteProps } from '~/components/Router';
import { SearchOptions } from '~/providers/ResourceIndexProvider';
import { useResourceIndex } from '~/hooks/Util/ResourceIndex';
import { ScreenOptions, useScreen } from '~/hooks/Util/Screen';
import { useDebounce, usePaginate } from '~/hooks/Util';

/**
 * Types/Interfaces
*/

export interface ListCylinderPropsRouteParams {
  //
}

export interface ListCylinderProps extends RouteProps<ListCylinderPropsRouteParams, CylinderIndexContextInterface> {
  //
}

/**
 * Locals
*/

const screenOptions: ScreenOptions = {
  title: 'Manage Cylinders',
  breadcrumbs: [],
};

const searchOptions: SearchOptions = {
  query: null,
  attributes: [
    //
  ]
};

const tableCols: ResourceTableCols<CylinderModel> = {
  'Serial No.': {
    className: 'w-25p',
    fieldName: 'serial_number',
  },

  'Tag No.': {
    className: 'w-25p',
    fieldName: 'tag_number',
  },

  'Type': {
    className: 'w-50p',
    fieldName: 'type',
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

  const index = useResourceIndex(CylinderIndexContext, searchOptions);
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
export function ListCylinder(props: ListCylinderProps): JSX.Element {
  /** Hooks **/

  const screen = useScreen(props, screenOptions);
  const index = useResourceIndex(CylinderIndexContext);
  const paginate = usePaginate(index);

  /** Output **/

  return (
    <UserPrimaryLayout
      title={ screen.title }
      titleRow={ Header }
    >
      <ResourceTable
        linkTo='/cylinders'
        cols={ tableCols }
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
