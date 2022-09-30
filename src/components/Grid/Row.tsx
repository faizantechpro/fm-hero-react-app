/**
 * Global Imports
*/

import React, { ReactNode } from 'react';

/**
 * Root Imports
*/

import { TailwindProps } from '@util/Tailwind';

/**
 * Local Imports
*/

import { View } from '~/components/Base';

/**
 * Types/Interfaces
*/

export interface RowProps extends TailwindProps {
  children?: ReactNode;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function Row(props: RowProps): JSX.Element {
  return (
    <View
      className={ 'flex flex-row' + (props.className ? (' ' + props.className) : '') }
      style={ props.style }
    >
      { props.children }
    </View>
  );
}
