/**
 * Global Imports
*/

import React, { Context, ReactNode, useContext } from 'react';

/**
 * Root Imports
*/

import { SiteFormFields, SiteModel } from '@models/SiteModel';

/**
 * Local Imports
*/

import { ManagedForm } from '~/components/Form';
import { ColorSubmit } from '~/components/FMHero/Button';
import { useInitialValues } from '~/hooks/Form';

/**
 * Types/Interfaces
*/

export type UserSiteFormFields = SiteFormFields;
export type UserSiteFormContext = SiteModel;

export interface UserSiteFormProps {
  context: Context<UserSiteFormContext>;
  onSubmit: (values: UserSiteFormFields) => void | Promise<void>;
  children?: ReactNode;
}

/**
 * Locals
*/

const required = [
  'name',
  'address.line1',
  'address.country',
  'address.province',
  'address.city',
  'address.postal_code',
];

/**
 * Functions
*/

/**
 * @return {LoginFormFields}
 */
function getValues(context: UserSiteFormContext): UserSiteFormFields {
  return {
    name: context?.name ?? '',
    address: {
      name: context?.address?.name || 'primary',
      line1: context?.address?.line1,
      line2: context?.address?.line2,
      country: context?.address?.country,
      province: context?.address?.province,
      city: context?.address?.city,
      postal_code: context?.address?.postal_code,
    }
  };
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function UserSiteForm(props: UserSiteFormProps): JSX.Element {
  /** Hooks **/

  const context = useContext(props.context);
  const initialValues = useInitialValues<UserSiteFormFields, UserSiteFormContext>(context, getValues);

  /** Output **/

  return (
    <ManagedForm initialValues={ initialValues } onSubmit={ props.onSubmit }>
      <ColorSubmit
        label='Add'
        color='bg-fmhero-green-400'
        className='mt-12'
      />
    </ManagedForm>
  );
}
