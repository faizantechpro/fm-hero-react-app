/**
 * Global Imports
*/

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Local Imports
*/

import { Text } from '~/components/Base';
import { Icon, IconName } from '~/components/Icon';

/**
 * Types/Interfaces
*/

export type NavigationLinkProps = {
  icon: IconName;
  label: string;
  to: string;
  active: boolean;
};

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function NavigationLink(props: NavigationLinkProps): JSX.Element {
  /** Helpers **/

  const color = props.active ? 'text-fmhero-blue-200' : 'text-fmhero-gray-800';
  const hover = props.active ? '' : 'hover:bg-fmhero-white-400 ';

  /** Output **/

  return (
    <Link to={ props.to } className={ hover + 'flex flex-row items-center px-6 py-4 ' + color }>
      <Icon
        name={ props.icon }
        className='mr-4'
      />
      <Text>
        { props.label }
      </Text>
    </Link>
  );
}
