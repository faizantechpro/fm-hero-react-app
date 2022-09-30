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
  UserRegisterForm,
  UserRegisterFormContext,
  UserRegisterFormFields } from '~/app/user/forms/guest/Register';

/**
 * Types/Interfaces
*/

export interface RegisterProps {
  //
}

/**
 * Locals
*/

const UserRegisterContext = createContext<UserRegisterFormContext>(undefined);

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function Register(props: RegisterProps): JSX.Element {
  /** Contexts **/

  const auth = useAuth();
  const form = useForm();

  /** Side-Effects **/

  useEffect((): (()=>void) => form.clear, []);

  /** Event Handlers **/

  /**
   * @return {Promise<void>}
   */
  const handleSubmit = async (values: UserRegisterFormFields): Promise<void> => {
    //
  };

  /** Output **/

  return (
    <UserRegisterContext.Provider value={ null }>
      <UserGuestLayout
        title='Register'
        mode={ UserGuestLayoutMode.Register }
        backable={ true }
      >
        <View className='w-full md:w-sm mt-10'>
          <UserRegisterForm
            context={ UserRegisterContext }
            onSubmit={ handleSubmit }
          />
        </View>
      </UserGuestLayout>
    </UserRegisterContext.Provider>
  );
}
