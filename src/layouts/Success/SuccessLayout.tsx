/**
 * Global Imports
*/

import React, { ReactNode } from 'react';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';

/**
 * Types/Interfaces
*/

export interface SuccessLayoutProps {
  title: string;
  children?: ReactNode;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function SuccessLayout(props: SuccessLayoutProps): JSX.Element {
  return (
    <View className='flex flex-auto flex-col justify-center bg-fmhero-gray-400'>
      <View>
        <Text className='text-3xl'>
          { props.title }
        </Text>
        { props.children }
      </View>
    </View>
  );
}
