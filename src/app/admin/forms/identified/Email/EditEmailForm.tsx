/**
 * Global Imports
*/

import React, { Context, ReactNode, useContext } from 'react';

/**
 * Local Imports
*/

import { Input, ManagedForm, Password } from '~/components/Form';
import { ColorSubmit } from '~/components/FMHero/Button';
import { useInitialValues } from '~/hooks/Form';

/**
 * Types/Interfaces
*/

export interface EditEmailFormFields {
  email: string;
  current_password: string;
}

export type EditEmailFormContext = Omit<EditEmailFormFields, 'current_password'>;

export interface EditEmailFormProps {
  id?: number;
  context: Context<EditEmailFormContext>;
  children?: ReactNode;
  onSubmit: (values: EditEmailFormFields) => void | Promise<void>;
}

/**
 * Locals
*/

const required = [
  'email',
  'current_password',
];

/**
 * Functions
*/

/**
 * @return {LoginFormFields}
 */
function getValues(context: EditEmailFormContext): EditEmailFormFields {
  return {
    email: context?.email || '',
    current_password: '',
  };
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function EditEmailForm(props: EditEmailFormProps): JSX.Element {
  /** Hooks **/

  const context = useContext(props.context);
  const initialValues = useInitialValues<EditEmailFormFields, EditEmailFormContext>(context, getValues);

  /** Output **/

  return (
    <ManagedForm initialValues={ initialValues } onSubmit={ props.onSubmit }>
      <Input
        name='email'
        label='Email Address'
      />

      <Password
        name='current_password'
        label='Current Password'
        className='mt-4'
      />

      <ColorSubmit
        label='Update'
        color='bg-fmhero-blue-600'
        className='mt-12'
      />
    </ManagedForm>
  );
}
