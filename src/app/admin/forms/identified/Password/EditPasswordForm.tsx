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

export interface EditPasswordFormFields {
  current_password: string;
  password: string;
  password_confirmation: string;
}

export type EditPasswordFormContext = {};

export interface EditPasswordFormProps {
  id?: number;
  context: Context<EditPasswordFormContext>;
  children?: ReactNode;
  onSubmit: (values: EditPasswordFormFields) => void | Promise<void>;
}

/**
 * Locals
*/

const required = [
  'current_password',
  'password',
  'password_confirmation',
];

/**
 * Functions
*/

/**
 * @return {LoginFormFields}
 */
function getValues(context: EditPasswordFormContext): EditPasswordFormFields {
  return {
    current_password: '',
    password: '',
    password_confirmation: '',
  };
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function EditPasswordForm(props: EditPasswordFormProps): JSX.Element {
  /** Hooks **/

  const context = useContext(props.context);
  const initialValues = useInitialValues<EditPasswordFormFields, EditPasswordFormContext>(context, getValues);

  /** Output **/

  return (
    <ManagedForm initialValues={ initialValues } onSubmit={ props.onSubmit }>
      <Password
        name='current_password'
        label='Current Password'
      />

      <Password
        name='password'
        label='New Password'
        className='mt-4'
      />

      <Password
        name='password_confirmation'
        label='Confirm New Password'
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
