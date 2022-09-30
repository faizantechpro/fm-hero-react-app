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

export interface AdminAdminsNavigationProps extends TailwindProps {
  //
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function AdminAdminsNavigation(props: AdminAdminsNavigationProps): JSX.Element {
  return (
    <Row style={ props.style } className={ props.className }>
      <SecondaryNavigationLink
        to='/admins'
        label='Admins Users'
      />
      <SecondaryNavigationLink
        to='/admins/audit-log'
        label='Audit Log'
        className='ml-4'
      />
    </Row>
  );
}
