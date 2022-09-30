/**
 * Global Imports
*/

import React from 'react';
import { IconName, SizeProp as IconSize } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Root Imports
*/

import { TailwindProps } from '@util/Tailwind';

/**
 * Types/Interfaces
*/

export {
  IconName,
  IconSize,
};

export type IconProps = TailwindProps & {
  name?: IconName;
  size?: IconSize;
};

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function Icon(props: IconProps): JSX.Element {
  return (
    <FontAwesomeIcon
      icon={ props.name }
      className={ props.className }
      style={ props.style }
    />
  );
}
