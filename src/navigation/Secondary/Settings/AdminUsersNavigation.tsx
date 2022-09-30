/**
 * Global Imports
*/

import React from 'react';

/**
 * Props Imports
*/

import { TailwindProps } from '@util/Tailwind';

/**
 * Local Imports
*/

import { SecondaryNavigationLink } from '~/components/FMHero/Navigation';
import { Row } from '~/components/Grid';

/**
 * Types/Interfaces
*/

export interface AdminUsersNavigationProps extends TailwindProps {
  //
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function AdminUsersNavigation(props: AdminUsersNavigationProps): JSX.Element {
  return (
    <Row style={ props.style } className={ props.className }>
      <SecondaryNavigationLink
        to='/users/technicians'
        alternate='/users'
        label='Users / Technicians'
      />
      <SecondaryNavigationLink
        to='/users/contractors'
        label='Contractors / Equipment Owners'
        className='ml-4'
      />
    </Row>
  );
}
