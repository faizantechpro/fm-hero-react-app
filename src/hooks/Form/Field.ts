/**
 * Global Imports
*/

import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';

/**
 * Root Imports
*/

import { Algorithm } from '@util/Algorithm';
import { SetStateHandler } from '@util/React';

/**
 * Local Imports
*/

import { FormValues } from '~/providers/FormProvider';

/**
 * Relative Imports
*/

import { useForm } from './Form';
import { useIsMounted } from '../Util';

/**
 * Types/Interfaces
*/

export type FormErrorHandler = (error: AxiosError) => void | Promise<void>;

export interface FieldOptions<T> {
  name: string;
  initialValue?: T;
  form?: number;
  onChangeValue?: (value: T) => void | Promise<void>;
}

export interface FieldHook<T> {
  value: T;
  initialValue: T;
  setValue: SetStateHandler<T>;
  error: Array<string>;
}

export type InitializeHandler<Fields, Context> = (context: Context) => Fields;

/**
 * Locals
*/

const emptyInitialValues = {};

/**
 * Main
*/

/**
 * @return {Fields}
 */
export function useInitialValues<Fields, Context>(
  context: Context,
  initializer: InitializeHandler<Fields, Context>,
  enableReinitialize: boolean = false,
)
: Fields
{
  /** Hooks **/

  const isMounted = useIsMounted();

  /** Output **/

  return !enableReinitialize && (isMounted ? emptyInitialValues as Fields : initializer(context));
}

/**
 * @return {FieldHook<ValueType>}
 */
export function useField<ValueType>(options: FieldOptions<ValueType>): FieldHook<ValueType> {
  /** Hooks **/

  const form = useForm(options.form);
  const isMounted = useIsMounted();

  /** Helpers **/

  const error: Array<string> = form.errors?.[options.name];
  const initialValue: ValueType = options.form ? Algorithm.within<FormValues, ValueType>(form.initialValues, options.name) : options.initialValue;

  /** States **/

  const [ value, setValue ] = useState<ValueType>(initialValue);

  /** Side-Effects **/

  useEffect((): void => {
    if (isMounted) {
      if (options.form) {
        form.setFieldValue(options.name, value);
      }
      if (options.onChangeValue) {
        options.onChangeValue(value);
      }
    }
  }, [ value ]);

  /** Output **/

  return {
    value,
    initialValue,
    setValue,
    error: !error ? null : Array.isArray(error) ? error : [error],
  };
}
