/**
 * Global Imports
*/

import React, { createContext, useEffect } from 'react';

/**
 * Root Imports
*/

import { FMHeroLogoType } from '@config';
import { Identity, Secret, User } from '@services/api';

/**
 * Local Imports
*/

import { AdminIndexContextInterface } from '~/app/admin/providers/AdminIndexProvider';
import { AdminPrimaryLayout } from '~/layouts/Primary';
import { SmallContentBlock } from '~/components/FMHero/Layout';
import { RouteProps } from '~/components/Router';
import { ScreenOptions, useScreen } from '~/hooks/Util/Screen';
import { useForm } from '~/hooks/Form';

import {
  CreateAdminForm,
  CreateAdminFormContext,
  CreateAdminFormFields } from '~/app/admin/forms/identified/Admin';

/**
 * Types/Interfaces
*/

export interface CreateAdminPropsRouteParams {
  //
}

export interface CreateAdminProps extends RouteProps<CreateAdminPropsRouteParams, AdminIndexContextInterface> {
  //
}

/**
 * Locals
*/

const options: ScreenOptions = {
  title: 'Add Admin User',
  breadcrumbs: [],
};

/**
 * Contexts
*/

const CreateAdminContext = createContext<CreateAdminFormContext>(undefined);

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function CreateAdmin(props: CreateAdminProps): JSX.Element {
  /** Hooks **/

  const screen = useScreen(props, options);
  const form = useForm();

  /** Side-Effects **/

  useEffect((): (()=>void) => form.clear, []);

  /** Event Handlers **/

  /**
   * @return {Promise<void>}
   */
  const handleSubmit = async (values: CreateAdminFormFields): Promise<void> => {
    const { token } = await User.store();

    await Identity.store(values.identity, token);
    await Secret.store(values.secret, token);
  };

  /** Output **/

  return (
    <CreateAdminContext.Provider value={ null }>
      <AdminPrimaryLayout
        title={ screen.title }
        logo={ FMHeroLogoType.Color }
        backable={ true }
      >
        <SmallContentBlock>
          <CreateAdminForm
            context={ CreateAdminContext }
            onSubmit={ handleSubmit }
          />
        </SmallContentBlock>
      </AdminPrimaryLayout>
    </CreateAdminContext.Provider>
  );
}
