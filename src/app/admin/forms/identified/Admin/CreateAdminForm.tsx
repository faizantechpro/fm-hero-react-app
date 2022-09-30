/**
 * Global Imports
*/

import React, { Context, ReactNode, useContext } from 'react';

/**
 * Root Imports
*/

import { IdentityAttributes } from '@models/IdentityModel';
import { SecretAttributes } from '@models/SecretModel';

/**
 * Local Imports
*/

import { Input, Password, ManagedForm } from '~/components/Form';
import { ColorSubmit } from '~/components/FMHero/Button';
import { useInitialValues } from '~/hooks/Form';

/**
 * Types/Interfaces
*/

export interface CreateAdminFormFields {
  identity: IdentityAttributes;
  secret: SecretAttributes;
}

export type CreateAdminFormContext = CreateAdminFormFields;

export interface CreateAdminFormProps {
  id?: number;
  context: Context<CreateAdminFormContext>;
  children?: ReactNode;
  onSubmit: (values: CreateAdminFormFields) => void | Promise<void>;
}

/**
 * Locals
*/

const required = [
  'name',
];

/**
 * Functions
*/

/**
 * @return {LoginFormFields}
 */
function getValues(context: CreateAdminFormContext): CreateAdminFormFields {
  return {
    identity: {
      type: 'email',
      name: '',
      value: '',
    },
    secret: {
      type: 'password',
      value: '',
      value_confirmation: '',
    },
  };
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function CreateAdminForm(props: CreateAdminFormProps): JSX.Element {
  /** Hooks **/

  const context = useContext(props.context);
  const initialValues = useInitialValues<CreateAdminFormFields, CreateAdminFormContext>(context, getValues);

  /** Output **/

  return (
    <ManagedForm initialValues={ initialValues } onSubmit={ props.onSubmit }>
      <Input
        name='name'
        label='Admin Name'
      />

      <Input
        name='email'
        label='Email Address'
        className='mt-4'
      />

      <Input
        name='password'
        label='Temporary Password'
        className='mt-4'
      />

      <ColorSubmit
        label='Add Admin User'
        color='bg-fmhero-blue-600'
        className='mt-12'
      />
    </ManagedForm>
  );
}
