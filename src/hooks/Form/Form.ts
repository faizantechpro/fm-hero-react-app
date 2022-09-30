/**
 * Global Imports
*/

import { useContext } from 'react';
import { AxiosError } from 'axios';

/**
 * Root Imports
*/

import { Algorithm } from '@util/Algorithm';

/**
 * Local Imports
*/

import { FormContext, FormState, FormValues } from '~/providers/FormProvider';

/**
 * Relative Imports
*/

import { useFlash } from '../Interface/Flash';
import { useIsMounted } from '../Util';

/**
 * Types/Interfaces
*/

export enum FormMode {
  Read,
  ResetOnMount,
}

export type FormErrorHandler = (error: AxiosError) => void | Promise<void>;

export interface FormHook {
  state: FormState;

  clear: () => void;
  isSubmitting: () => boolean;

  getAllFieldValues: () => FormValues;
  getFieldValue: (name: string) => any;
  setFieldValue: (name: string, value: any) => void;
  setFormState: (state: FormState) => void;

  handleError: (error: AxiosError) => void;

  initialValues: Record<string, unknown>;
  errors: Record<string, Array<string>>;
}

/**
 * Main
*/

/**
 * @return {FormHook}
 */
export function useForm(id: number = null, mode: FormMode = FormMode.Read, initialValues: any = {}): FormHook {
  /** Setup **/

  id = id ?? 1;

  /** Contexts **/

  const context = useContext(FormContext);
  const flash = useFlash();
  const isMounted = useIsMounted();

  /** Helpers **/

  if (!isMounted && mode === FormMode.ResetOnMount) {
    if (context.valuesRef.current) {
      context.valuesRef.current[id] = initialValues;
    } else {
      context.valuesRef.current = {[id]: initialValues};
    }

    if (context.initialValuesRef.current) {
      context.initialValuesRef.current[id] = initialValues;
    } else {
      context.initialValuesRef.current = {[id]: initialValues};
    }

    if (context.statesRef.current) {
      context.statesRef.current[id] = FormState.Idle;
    } else {
      context.statesRef.current = {[id]: FormState.Idle};
    }
  }

  /** Event Handlers **/

  /**
   * @return {void}
   */
  const handleError = <Fields>(error: AxiosError): void => {
    setFormError(error);
    flash.error(error.response.data.message);
  };

  /** Functions **/

  /**
   * @return {void}
   */
  const flush = (): void => {
    context.setFlushCount((current: number): number => {
      return (current || 0) + 1;
    });
  };

  const clear = (): void => {
    delete context.valuesRef.current?.[id];
  };

  /**
   * @return {boolean}
   */
  const isSubmitting = (): boolean => {
    return context.statesRef.current?.[id] === FormState.Submitting;
  };

  const getAllFieldValues = (): FormValues => {
    return context.valuesRef.current?.[id];
  };

  const getFieldValue = (name: string): any => {
    return Algorithm.within(context.valuesRef.current?.[id], name);
  };

  /**
   * @return {void}
   */
  const setFormError = (error: AxiosError): void => {
    if (context.errorsRef.current) {
      context.errorsRef.current[id] = error.response.data.errors;
    } else {
      context.errorsRef.current = { [id]: error.response.data.errors };
    }

    setFormState(FormState.Error);
  };

  /**
   * @return {void}
   */
  const setFormState = (state: FormState): void => {
    context.statesRef.current[id] = state;
    flush();
  };

  /**
   * @return {void}
   */
  const setFieldValue = <ValueType>(name: string, value: ValueType): void => {
    const parts: Array<string> = name.split('.');
    const end: number = parts.length;

    let index: number = 0;
    let node: any = context.valuesRef.current[id];

    while (node && index < end) {
      if ((index + 1) === end) {
        node[parts[index++]] = value;
      } else {
        node = node[parts[index++]];
      }
    }
  };

  /** Output **/

  return {
    state: context.statesRef.current?.[id],
    clear,
    isSubmitting,
    getAllFieldValues,
    getFieldValue,
    setFieldValue,
    setFormState,
    handleError,
    initialValues: context.initialValuesRef.current?.[id],
    errors: context.errorsRef.current?.[id],
  };
}
