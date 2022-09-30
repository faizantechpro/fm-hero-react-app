/**
 * Global Imports
*/

import React, { FormEvent, ReactNode, useEffect } from 'react';

/**
 * Root Imports
*/

import { TailwindProps } from '@util/Tailwind';

/**
 * Local Imports
*/

import { Form } from '~/components/Base';
import { FormMode, useForm } from '~/hooks/Form';
import { FormState } from '~/providers/FormProvider';

/**
 * Types/Interfaces
*/

export interface ManagedFormProps<Fields> extends TailwindProps {
  id?: number;
  initialValues: Fields;
  enableReinitialize?: boolean;
  onSubmit: (values: Fields) => void | Promise<void>;
  children?: ReactNode;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function ManagedForm<Fields>(props: ManagedFormProps<Fields>): JSX.Element {
  /** Hooks **/

  const form = useForm(props.id, FormMode.ResetOnMount, props.initialValues);

  /** Side-Effects **/

  useEffect((): void => {
    if (form.state & FormState.Submitting) {
      props.onSubmit(form.getAllFieldValues() as Fields);
    }
  }, [ form.state ]);

  /** Event Handlers **/

  /**
   * @return {void}
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    event.stopPropagation();

    form.setFormState(FormState.Submitting);
  };

  /** Output **/

  return (
    <Form onSubmit={ handleSubmit }>
      { props.children }
    </Form>
  );
}

ManagedForm.defaultProps = {
  id: 1,
};
