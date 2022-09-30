/**
 * Global Imports
*/

import React, { ReactNode } from 'react';
import { Text, View } from '~/components/Base';

/**
 * Root Imports
*/

import { TailwindProps } from '@util/Tailwind';

/**
 * Local Imports
*/

import { useIsDarkMode } from '~/hooks/Theme';

/**
 * Types/Interfaces
*/

export interface BaseFieldProps {
  error?: Array<string>;
  disabled?: boolean;
}

export interface FieldProps<ValueType = string> extends TailwindProps, BaseFieldProps {
  value?: ValueType;
  initialValue?: ValueType;
  children?: ReactNode;
  onChangeValue?: (value: ValueType) => void | Promise<void>;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function Field(props: FieldProps): JSX.Element {
  /** Hooks **/

  const isDarkMode = useIsDarkMode();

  /** Output **/

  return (
    <View style={ props.style } className={ props.className }>
      {props.children ? props.children : (
        <Text>
          { props.value }
        </Text>
      )}
    </View>
  );
}
