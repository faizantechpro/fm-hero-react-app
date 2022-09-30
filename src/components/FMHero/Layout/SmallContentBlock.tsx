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

export interface SmallContentBlockProps extends TailwindProps {
  children: ReactNode;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function SmallContentBlock(props: SmallContentBlockProps): JSX.Element {
  return (
    <View
      style={ props.style }
      className={ 'w-full md:w-sm mt-10' + (props.className ? ` ${props.className}` : '') }
    >
      { props.children }
    </View>
  );
}
