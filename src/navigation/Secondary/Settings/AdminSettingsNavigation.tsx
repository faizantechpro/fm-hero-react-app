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

export interface AdminSettingsNavigationProps extends TailwindProps {
  //
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function AdminSettingsNavigation(props: AdminSettingsNavigationProps): JSX.Element {
  return (
    <Row style={ props.style } className={ props.className }>
      <SecondaryNavigationLink
        to='/settings/email'
        alternate='/settings'
        label='Email Address'
      />
      <SecondaryNavigationLink
        to='/settings/password'
        label='Password'
        className='ml-4'
      />
    </Row>
  );
}
