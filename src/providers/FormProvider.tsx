/**
 * Global Imports
*/

import React, { ReactNode, createContext, useMemo, useState, useRef, MutableRefObject } from 'react';

/**
 * Root Imports
*/

import { SetStateHandler } from '@util/React';

/**
 * Types/Interfaces
*/

export enum FormState {
  Idle = 0,
  Submitting = 1,
  Success = 2,
  Error = 4,
}

export type FormStates = Record<number, FormState>;
export type FormErrors = Record<string, Array<string>>;
export type FormValues = Record<string, unknown>;

export type FormErrorsData = Record<number, FormErrors>;
export type FormValuesData = Record<number, FormValues>;

export interface FormProviderProps {
  children: ReactNode;
}

export interface FormContextInterface {
  statesRef: MutableRefObject<FormStates>;
  errorsRef: MutableRefObject<FormErrorsData>;
  valuesRef: MutableRefObject<FormValuesData>;
  initialValuesRef: MutableRefObject<FormValuesData>;
  flushCount: number;
  setFlushCount: SetStateHandler<number>;
}

/**
 * Contexts
*/

export const FormContext = createContext<FormContextInterface>(undefined);

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function FormProvider(props: FormProviderProps): JSX.Element {
  /** Refs **/

  const statesRef = useRef<FormStates>();
  const errorsRef = useRef<FormErrorsData>();
  const valuesRef = useRef<FormValuesData>();
  const initialValuesRef = useRef<FormValuesData>();

  /** States **/

  const [ flushCount, setFlushCount ] = useState<number>();

  /** Memos **/

  const value = useMemo((): FormContextInterface => {
    return {
      statesRef,
      errorsRef,
      valuesRef,
      initialValuesRef,
      flushCount,
      setFlushCount,
    };
  }, [ flushCount ]);

  /** Output **/

  return (
    <FormContext.Provider value={ value }>
      { props.children }
    </FormContext.Provider>
  );
}
