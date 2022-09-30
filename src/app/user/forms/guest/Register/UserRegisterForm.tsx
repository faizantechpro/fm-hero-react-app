/**
 * Global Imports
*/

import React, { Context, useContext } from 'react';

/**
 * Local Imports
*/

import { Checkbox, Input, Password, ManagedForm } from '~/components/Form';
import { ColorSubmit } from '~/components/FMHero/Button';
import { useInitialValues } from '~/hooks/Form';

/**
 * Types/Interfaces
*/

export interface UserRegisterFormFields {
  is_terms_accepted: boolean;
  identity: {
    name: string;
    type: 'email';
    value: string;
  };
  secret: {
    type: 'password';
    value: string;
    value_confirmation: string;
  };
}

export type UserRegisterFormContext = UserRegisterFormFields;

export interface UserRegisterFormProps {
  context: Context<UserRegisterFormContext>;
  onSubmit: (values: UserRegisterFormFields) => void | Promise<void>;
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
 * @return {RegisterFormFields}
 */
function getValues(context: UserRegisterFormContext): UserRegisterFormFields {
  return {
    is_terms_accepted: context?.is_terms_accepted || false,
    identity: {
      name: context?.identity?.name || 'primary',
      type: context?.identity?.type || 'email',
      value: context?.identity?.value || '',
    },
    secret: {
      type: context?.secret?.type || 'password',
      value: context?.secret?.value || '',
      value_confirmation: context?.secret?.value_confirmation || '',
    },
  };
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function UserRegisterForm(props: UserRegisterFormProps): JSX.Element {
  /** Hooks **/

  const context = useContext(props.context);
  const initialValues = useInitialValues<UserRegisterFormFields, UserRegisterFormContext>(context, getValues);

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

      <Password
        name='secret.value_confirmation'
        label='Confirm Password'
        className='mt-4'
      />

      <Checkbox
        name='is_terms_accepted'
        label='I accept the terms'
        className='mt-6'
      />

      <ColorSubmit
        label='Create Account'
        color='bg-fmhero-green-400'
        className='mt-12'
      />
    </ManagedForm>
  );
}
