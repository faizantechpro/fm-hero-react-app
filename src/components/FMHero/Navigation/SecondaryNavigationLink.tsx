/**
 * Global Imports
*/

import React, { createElement, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

/**
 * Root Imports
*/

import { Css } from '@util';
import { TailwindProps } from '@util/Tailwind';

/**
 * Local Imports
*/

import { Text } from '~/components/Base';
import { Icon, IconName } from '~/components/Icon';
import { useScreen } from '~/hooks/Util';

/**
 * Types/Interfaces
*/

export interface SecondaryNavigationLinkProps extends TailwindProps {
  icon?: IconName;
  label: string | FunctionComponent;
  to: string;
  alternate?: string;
  active?: boolean;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function SecondaryNavigationLink(props: SecondaryNavigationLinkProps): JSX.Element {
  /** Hooks **/

  const screen = useScreen();

  /** Helpers **/

  const isActive = props.active || screen.uri === props.to || screen.uri === props.alternate;
  const color = isActive ? 'text-fmhero-blue-200' : 'text-fmhero-gray-800';

  /** Output **/

  return (
    <Link
      to={ props.to }
      className={ Css.join('flex flex-row items-center py-2', color, props.className) }
    >
      {!!props.icon && (
        <Icon
          name={ props.icon }
          className='mr-4'
        />
      )}

      {typeof props.label === 'string' && (
        <Text>
          { props.label }
        </Text>
      )}

      {typeof props.label === 'function' && (
        createElement(props.label)
      )}
    </Link>
  );
}
