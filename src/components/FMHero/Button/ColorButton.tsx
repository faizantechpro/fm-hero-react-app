/**
 * Global Imports
*/

import React, { FunctionComponent, MouseEvent, ReactNode, createElement } from 'react';

/**
 * Root Imports
*/

import { TailwindProps } from '@util/Tailwind';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { LoadButton } from '~/components/Button';

/**
 * Types/Interfaces
*/

export type ColorButtonStyles = {
  'bg-fmhero-blue-600': 'text-white',
  'bg-fmhero-gray-800': 'text-white',
  'bg-fmhero-gray-600': 'text-gray-800',
  'bg-fmhero-gray-400': 'text-gray-800',
  'bg-fmhero-green-400': 'text-white',
};

export interface ColorButtonProps<LabelProps> extends TailwindProps {
  color: keyof ColorButtonStyles;
  type?: 'button' | 'submit';
  label?: string | FunctionComponent<LabelProps>;
  labelProps?: LabelProps;
  loading?: boolean;
  disabled?: boolean;
  onPress: (event: MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  children?: ReactNode;
}

/**
 * Locals
*/

const styles: ColorButtonStyles = {
  'bg-fmhero-blue-600': 'text-white',
  'bg-fmhero-gray-800': 'text-white',
  'bg-fmhero-gray-600': 'text-gray-800',
  'bg-fmhero-gray-400': 'text-gray-800',
  'bg-fmhero-green-400': 'text-white',
};

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function ColorButton<LabelProps = {}>(props: ColorButtonProps<LabelProps>): JSX.Element {
  return (
    <LoadButton
      type={ props.type }
      loading={ props.loading }
      disabled={ props.disabled }
      style={ props.style }
      className={ `btn-83 ${props.color}` + (props.className ? ` ${props.className}` : '') }
      onPress={ props.onPress }
    >
      <View className='btn-bg-overlay bg-black' />
      <View className='relative'>
        {typeof props.label === 'string' && (
          <Text className={ styles[props.color] }>
            { props.label }
          </Text>
        )}
        {typeof props.label === 'function' && (
          createElement(props.label, props.labelProps)
        )}
      </View>
    </LoadButton>
  );
}
