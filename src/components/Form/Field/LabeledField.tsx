/**
 * Global Imports
*/

import React, { createElement, Fragment, FunctionComponent, MouseEvent, ReactNode } from 'react';

/**
 * Local Imports
*/

import { Pressable, Text, View } from '~/components/Base';

/**
 * Sibling Imports
*/

import { Field, FieldProps } from './Field';
import { Label, LabelProps } from './Label';

/**
 * Types/Interfaces
*/

export interface LabeledFieldProps<Element> extends FieldProps, Omit<LabelProps, 'label'> {
  label?: string | FunctionComponent;
  name?: string;
  type?: 'contain' | 'outside';
  position?: 'before' | 'after';
  after?: FunctionComponent | JSX.Element;
  onPress?: (event: MouseEvent<Element>) => void | Promise<void>;
  children?: ReactNode;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function LabeledField<Element>(props: LabeledFieldProps<Element>): JSX.Element {
  return (
    <Pressable<Element>
      style={ props.style }
      className={ 'relative leading-none ' + props.className }
      onPress={ props.onPress }
    >
      {!!props.label && props.type === 'outside' && props.position === 'before' && (
        <Label
          label={ props.label }
          error={ props.error }
        />
      )}

      <Field
        value={ props.value }
        error={ props.error }
      >
        { props.children }
      </Field>

      {!!props.label && props.type === 'outside' && props.position === 'after' && (
        <Label
          label={ props.label }
          error={ props.error }
        />
      )}

      {props.error && (
        props.error.map((message, index): JSX.Element => (
          <Text key={ index } className='text-red-400'>
            { message }
          </Text>
        ))
      )}

      {typeof props.after === 'function' && (
        createElement(props.after as FunctionComponent)
      )}

      {typeof props.after === 'object' && (
        props.after
      )}
    </Pressable>
  );
}

LabeledField.defaultProps = {
  type: 'outside',
  position: 'before',
};
