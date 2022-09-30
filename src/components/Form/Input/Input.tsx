/**
 * Global Imports
*/

import React, { ChangeEvent, MouseEvent, useRef } from 'react';

/**
 * Root Imports
*/

import { Css } from '@util';

/**
 * Local Imports
*/

import { useField } from '~/hooks/Form';
import { useIsDarkMode } from '~/hooks/Theme';

/**
 * Relative Imports
*/

import { FieldProps } from '../Field/Field';
import { LabeledField } from '../Field/LabeledField';

/**
 * Types/Interfaces
*/

export interface InputProps extends FieldProps<string> {
  name: string;
  label?: string;
  type: 'text' | 'password' | 'file' | 'checkbox' | 'radio';
  placeholder?: string;
  changeDelay?: number;
  form?: number;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function Input(props: InputProps): JSX.Element {
  /** Hooks **/

  const field = useField<string>(props);
  const isDarkMode = useIsDarkMode();

  /** Refs **/

  const htmlElementRef = useRef<HTMLInputElement>();

  /** Helpers **/

  const className: string = (
    field.error
      ? 'border-red-400 hover:border-red-600'
      : 'border-fmhero-gray-600 hover:border-fmhero-gray-800'
  );

  /** Output **/

  /**
   * @return {void}
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    field.setValue(event.target.value);
  };

  /**
   * @return {void}
   */
  const handlePress = (event: MouseEvent<HTMLInputElement>): void => {
    htmlElementRef.current.focus();
  };

  /** Output **/

  return (
    <LabeledField<HTMLInputElement>
      style={ props.style }
      className={ Css.join('cursor-text p-4 border rounded-lg', className, props.className) }
      error={ field.error }
      label={ props.label }
      onPress={ handlePress }
    >
      <input
        className={ 'bg-transparent' + (field.error ? ' text-red-600' : '') }
        ref={ htmlElementRef }
        type={ props.type }
        name={ props.name }
        value={ field.value }
        placeholder={ props.placeholder }
        onChange={ handleChange }
      />
    </LabeledField>
  );
}

Input.defaultProps = {
  form: 1,
  type: 'text',
};
