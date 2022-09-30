/**
 * Global Imports
*/

import React, { Context, ReactNode, useContext } from 'react';

/**
 * Root Imports
*/

import { TokenFormFields } from '@models/TokenModel';

/**
 * Local Imports
*/

import { Checkbox, Input, Password, ManagedForm } from '~/components/Form';
import { ColorSubmit } from '~/components/FMHero/Button';
import { useInitialValues } from '~/hooks/Form';

/**
 * Types/Interfaces
*/

export type AdminLoginFormFields = TokenFormFields;
export type AdminLoginFormContext = AdminLoginFormFields;

export interface AdminLoginFormProps {
  id?: number;
  context: Context<AdminLoginFormContext>;
  onSubmit: (values: AdminLoginFormFields) => void | Promise<void>;
  children?: ReactNode;
}

/**
 * Locals
*/

const required = [
  'identity.value',
  'secret.value',
];

/**
 * Functions
*/

/**
 * @return {LoginFormFields}
 */
function getValues(context: AdminLoginFormContext): AdminLoginFormFields {
  return {
    remember: context?.remember || false,
    identity: {
      type: context?.identity?.type || 'email',
      value: context?.identity?.value || '',
    },
    secret: {
      type: context?.secret?.type || 'password',
      value: context?.secret?.value || '',
    }
  };
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function AdminLoginForm(props: AdminLoginFormProps): JSX.Element {
  /** Hooks **/

  const context = useContext(props.context);
  const initialValues = useInitialValues<AdminLoginFormFields, AdminLoginFormContext>(context, getValues);

  /** Output **/

  return (
    <ManagedForm initialValues={ initialValues } onSubmit={ props.onSubmit }>
      <Input
        name='identity.value'
        label='Email Address'
      />

      <Password
        name='secret.value'
        label='Password'
        className='mt-4'
      />

      <Checkbox
        name='remember'
        label='Remember Me'
        className='mt-6'
      />

      <ColorSubmit
        label='Login'
        color='bg-fmhero-blue-600'
        className='mt-12'
      />
    </ManagedForm>
  );
}
