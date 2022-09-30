/**
 * Global Imports
*/

import React, { ChangeEvent } from 'react';

/**
 * Local Imports
*/

import { useField } from '~/hooks/Form';
import { useIsDarkMode } from '~/hooks/Theme';

/**
 * Relative Imports
*/

import { Input } from './Input';
import { FieldProps } from '../Field/Field';

/**
 * Types/Interfaces
*/

export interface InputProps extends FieldProps<string> {
  name: string;
  label: string;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function Password(props: InputProps): JSX.Element {
  return (
    <Input
      type='password'
      name={ props.name }
      label={ props.label }
      style={ props.style }
      className={ props.className }
    />
  );
}
