/**
 * Global Imports
*/

import React, { MouseEvent } from 'react';

/**
 * Local Imports
*/

import { Pressable, Text } from '~/components/Base';
import { Icon, IconName } from '~/components/Icon';

/**
 * Types/Interfaces
*/

export interface NavigationButtonProps {
  icon: IconName;
  label: string;
  active: boolean;
  onPress: (event: MouseEvent<HTMLDivElement>) => void | Promise<void>;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function NavigationButton(props: NavigationButtonProps): JSX.Element {
  /** Helpers **/

  const color = props.active ? 'text-fmhero-blue-200' : 'text-fmhero-gray-800';
  const hover = props.active ? '' : 'hover:bg-fmhero-white-400 ';

  /** Output **/

  return (
    <Pressable
      className={ hover + 'cursor-pointer flex flex-row items-center px-6 py-4 ' + color }
      onPress={ props.onPress }
    >
      <Icon
        name={ props.icon }
        className='mr-4'
      />
      <Text>
        { props.label }
      </Text>
    </Pressable>
  );
}
