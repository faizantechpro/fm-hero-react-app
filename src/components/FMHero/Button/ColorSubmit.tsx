/**
 * Global Imports
*/

import React, { MouseEvent } from 'react';

/**
 * Root Imports
*/

import { FormAwareProps } from '@util/Form';

/**
 * Local Imports
*/

import { useForm } from '~/hooks/Form';

/**
 * Relative Imports
*/

import { ColorButton, ColorButtonProps } from './ColorButton';

/**
 * Types/Interfaces
*/

export interface ColorSubmitProps<LabelProps> extends Partial<FormAwareProps>, Omit<ColorButtonProps<LabelProps>, 'type' | 'onPress'> {
  onPress?: (event: MouseEvent<HTMLButtonElement>) => void | Promise<void>;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function ColorSubmit<LabelProps = {}>(props: ColorSubmitProps<LabelProps>): JSX.Element {
  /** Hooks **/

  const form = useForm(props.form);

  /** Output **/

  return (
    <ColorButton<LabelProps>
      type='submit'
      color={ props.color }
      label={ props.label }
      labelProps={ props.labelProps }
      loading={ props.loading || form.isSubmitting() }
      disabled={ props.disabled }
      style={ props.style }
      className={ props.className }
      onPress={ props.onPress }
    >
      { props.children }
    </ColorButton>
  );
}
