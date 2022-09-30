/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import {
  PaginateNavigationProps,
  PaginateNavigation as BasePaginateNavigation } from '~/components/Paginate';

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function PaginateNavigation(props: PaginateNavigationProps): JSX.Element {
  return (
    <BasePaginateNavigation
      style={ props.style }
      className={ props.className }
      current={ props.current }
      total={ props.total }
      onNavigate={ props.onNavigate }
      separatorClassName='w-14 text-center'
      textActiveClassName='w-14 text-center text-fmhero-blue-200'
      textInactiveClassName='w-14 cursor-pointer text-center text-fmhero-gray-800'
    />
  );
}

PaginateNavigation.defaultProps = {
  className: 'mt-10',
};
