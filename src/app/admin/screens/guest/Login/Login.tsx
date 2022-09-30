/**
 * Global Imports
*/

import React, { createContext, useEffect } from 'react';

/**
 * Root Imports
*/

import { Token } from '@services/api';

/**
 * Local Imports
*/

import { AdminGuestLayout } from '~/layouts/Guest';
import { useAuth } from '~/hooks/User';
import { useForm } from '~/hooks/Form';

import {
  AdminLoginForm,
  AdminLoginFormContext,
  AdminLoginFormFields } from '~/app/admin/forms/guest/Login';

/**
 * Types/Interfaces
*/

export interface LoginProps {
  //
}

/**
 * Locals
*/

const AdminLoginContext = createContext<AdminLoginFormContext>(undefined);

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function Login(props: LoginProps): JSX.Element {
  /** Contexts **/

  const auth = useAuth();
  const form = useForm();

  /** Side-Effects **/

  useEffect((): (()=>void) => form.clear, []);

  /** Event Handlers **/

  /**
   * @return {Promise<void>}
   */
  const handleSubmit = async (values: AdminLoginFormFields): Promise<void> => {
    try {
      auth.login(await Token.store(values), values);
    } catch (error) {
      form.handleError(error);
    }
  };

  /** Output **/

  return (
    <AdminLoginContext.Provider value={ null }>
      <AdminGuestLayout>
        <AdminLoginForm
          context={ AdminLoginContext }
          onSubmit={ handleSubmit }
        />
      </AdminGuestLayout>
    </AdminLoginContext.Provider>
  );
}
