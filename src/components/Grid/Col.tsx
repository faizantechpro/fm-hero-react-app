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

export interface ColProps extends TailwindProps {
  children?: ReactNode;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function Col(props: ColProps): JSX.Element {
  return (
    <View
      className={ 'flex flex-col' + (props.className ? (' ' + props.className) : '') }
      style={ props.style }
    >
      { props.children }
    </View>
  );
}
