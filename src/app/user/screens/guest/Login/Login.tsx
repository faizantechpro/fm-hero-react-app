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

import { UserGuestLayout, UserGuestLayoutMode } from '~/layouts/Guest';
import { View } from '~/components/Base';
import { useAuth } from '~/hooks/User';
import { useForm } from '~/hooks/Form';

import {
  UserLoginForm,
  UserLoginFormContext,
  UserLoginFormFields } from '~/app/user/forms/guest/Login';

/**
 * Types/Interfaces
*/

export interface LoginProps {
  //
}

/**
 * Locals
*/

const UserLoginContext = createContext<UserLoginFormContext>(undefined);

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
  const handleSubmit = async (values: UserLoginFormFields): Promise<void> => {
    try {
      auth.login(await Token.store(values), values);
    } catch (error) {
      return form.handleError(error);
    }
  };

  /** Output **/

  return (
    <UserLoginContext.Provider value={ null }>
      <UserGuestLayout
        title='Login'
        mode={ UserGuestLayoutMode.Login }
        backable={ true }
      >
        <View className='w-full md:w-sm mt-10'>
          <UserLoginForm
            context={ UserLoginContext }
            onSubmit={ handleSubmit }
          />
        </View>
      </UserGuestLayout>
    </UserLoginContext.Provider>
  );
}
