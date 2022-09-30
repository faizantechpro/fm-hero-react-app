/**
 * Global Imports
*/

import { Algorithm } from '@util';
import React, { ChangeEvent } from 'react';

/**
 * Local Imports
*/

import { Label, Text, View } from '~/components/Base';
import { useField } from '~/hooks/Form';
import { useIsDarkMode } from '~/hooks/Theme';

/**
 * Relative Imports
*/

import { FieldProps } from '../Field/Field';

/**
 * Types/Interfaces
*/

export interface CheckboxProps extends FieldProps<boolean> {
  name: string;
  label: string;
  form?: number;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function Checkbox(props: CheckboxProps): JSX.Element {
  /** Hooks **/

  const field = useField<boolean>(props);
  const isDarkMode = useIsDarkMode();

  /** Event Handlers **/

  /**
   * @return {void}
   */
  const handleToggle = (event: ChangeEvent<HTMLInputElement>): void => {
    field.setValue((current: boolean): boolean => !current);
  };

  /** Helpers **/

  const className = Algorithm.truthy([
    'border-2 rounded w-6 h-6 flex flex-shrink-0 justify-center items-center focus-within:border-blue-500',
    !props.disabled && 'cursor-pointer',
    field.value
      ? 'bg-blue-400 border-blue-400'
      : 'bg-white border-gray-400'
  ]).join(' ');

  /** Output **/

  return (
    <Label style={ props.style } className={ 'block cursor-pointer' + (props.className ? ` ${props.className}` : '') }>
      <View className='flex flex-row'>
        <View className={ className }>
          <input
            type='checkbox'
            className='opacity-0 absolute pointer-events-none'
            name={ props.name }
            defaultChecked={ field.initialValue }
            onChange={ handleToggle }
          />
          <svg
            viewBox='0 0 20 20'
            className={ 'fill-current w-4 h-4 text-white' + (field.value ? '' : ' hidden pointer-events-none') }
          >
            <path d='M0 11l2-2 5 5L18 3l2 2L7 18z' />
          </svg>
        </View>
        <Text className='ml-4'>
          { props.label }
        </Text>
      </View>
    </Label>
  );
}

Checkbox.defaultProps = {
  form: 1,
};
