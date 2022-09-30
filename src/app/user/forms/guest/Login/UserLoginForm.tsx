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

export type UserLoginFormFields = TokenFormFields;
export type UserLoginFormContext = UserLoginFormFields;

export interface UserLoginFormProps {
  id?: number;
  context: Context<UserLoginFormContext>;
  onSubmit: (values: UserLoginFormFields) => void | Promise<void>;
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
function getValues(context: UserLoginFormContext): UserLoginFormFields {
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
export function UserLoginForm(props: UserLoginFormProps): JSX.Element {
  /** Hooks **/

  const context = useContext(props.context);
  const initialValues = useInitialValues<UserLoginFormFields, UserLoginFormContext>(context, getValues);

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
        color='bg-fmhero-green-400'
        className='mt-12'
      />
    </ManagedForm>
  );
}
