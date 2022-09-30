/**
 * Global Imports
*/

import React, { Context, ReactNode, useContext } from 'react';

/**
 * Root Imports
*/

import { Chrono, DateTimeMode } from '@util/Chrono';
import { ServiceEventFormFields, ServiceEventModel } from '@models/ServiceEventModel';

/**
 * Local Imports
*/

import { ManagedForm } from '~/components/Form';
import { ColorSubmit } from '~/components/FMHero/Button';
import { useInitialValues } from '~/hooks/Form';

/**
 * Types/Interfaces
*/

export type UserServiceEventFormFields = ServiceEventFormFields;
export type UserServiceEventFormContext = ServiceEventModel;

export interface UserServiceEventFormProps {
  context: Context<UserServiceEventFormContext>;
  onSubmit: (values: UserServiceEventFormFields) => void | Promise<void>;
  children?: ReactNode;
}

/**
 * Locals
*/

const required = [
  'general.start_date',
  'general.event_description',
  'site.name',
  'site.address.line1',
  'site.address.country',
  'site.address.province',
  'site.address.city',
  'site.address.postal_code',
];

/**
 * Functions
*/

/**
 * @return {LoginFormFields}
 */
function getValues(context: UserServiceEventFormContext): UserServiceEventFormFields {
  return {
    general: {
      status: context?.status ?? 'Upcoming',
      start_date: context?.start_at ? Chrono.from(context?.start_at) : new Date,
      start_time: context?.start_at ? Chrono.from(context?.start_at, DateTimeMode.Time) : new Date,
      end_date: context?.end_at ? Chrono.from(context?.end_at) : null,
      end_time: context?.end_at ? Chrono.from(context?.end_at, DateTimeMode.Time) : null,
      work_order_number: context?.work_order_number ?? '',
      purchase_order_number: context?.purchase_order_number ?? '',
      external_reference_number: context?.external_reference_number ?? '',
      event_description: context?.event_description ?? '',
    },
    contact: {
      name: context?.contact_name ?? '',
      phone_number: context?.contact_phone ?? '',
      email: context?.contact_email ?? '',
    },
    site: {
      name: context?.site?.name ?? '',
      address: {
        name: context?.site?.address?.name ?? 'primary',
        line1: context?.site?.address?.line1 ?? '',
        line2: context?.site?.address?.line2 ?? '',
        country: context?.site?.address?.country ?? '',
        province: context?.site?.address?.province ?? '',
        city: context?.site?.address?.city ?? '',
        postal_code: context?.site?.address?.postal_code ?? '',
      },
    },
  };
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function UserServiceEventForm(props: UserServiceEventFormProps): JSX.Element {
  /** Hooks **/

  const context = useContext(props.context);
  const initialValues = useInitialValues<UserServiceEventFormFields, UserServiceEventFormContext>(context, getValues);

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
