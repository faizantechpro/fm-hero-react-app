/**
 * Global Imports
*/

import React, { FunctionComponent, createElement } from 'react';

/**
 * Root Imports
*/

import { TailwindProps } from '@util/Tailwind';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';

/**
 * Types/Interfaces
*/

export interface LabeledValueProps extends TailwindProps {
  label: string | FunctionComponent | JSX.Element;
  value: string | number | FunctionComponent | JSX.Element;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function LabeledValue(props: LabeledValueProps): JSX.Element {
  return (
    <View
      style={ props.style }
      className={ 'value' + (props.className ? ` ${props.className}` : '') }
    >
      {typeof props.label !== 'function' && (
        <Text className='text-fmhero-gray-800'>
          { props.label }
        </Text>
      )}

      {typeof props.label === 'function' && (
        createElement(props.label)
      )}

      {typeof props.value !== 'function' && (
        <Text className='mt-1 font-bold'>
          { props.value }
        </Text>
      )}

      {typeof props.value === 'function' && (
        createElement(props.value)
      )}
    </View>
  );
}
