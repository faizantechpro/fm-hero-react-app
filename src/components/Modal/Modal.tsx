/**
 * Global Imports
*/

import React, { ReactNode, useEffect } from 'react';

/**
 * Root Imports
*/

import { ScrollDriver } from '@drivers';
import { TailwindProps } from '@util/Tailwind';

/**
 * Local Imports
*/

import { View } from '~/components/Base';

/**
 * Types/Interfaces
*/

export interface ModalProps extends TailwindProps {
  visible: boolean;
  children?: ReactNode;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function Modal(props: ModalProps): JSX.Element {
  /** Helpers **/

  const className = (props.visible ? 'opacity-100' : 'pointer-events-none opacity-0');

  /** Side-Effects **/

  useEffect((): void => {
    if (props.visible) {
      ScrollDriver.disable();
    } else {
      ScrollDriver.enable();
    }
  }, [ props.visible ]);

  /** Output **/

  return (
    <View className={ 'modal transition-opacity duration-200 ' + className }>
      <View className='opacity-75 absolute w-full h-full bg-black' />
      <View className='absolute flex justify-center items-center w-full h-full'>
        { props.children }
      </View>
    </View>
  );
}
