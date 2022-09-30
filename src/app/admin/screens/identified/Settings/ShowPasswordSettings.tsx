/**
 * Global Imports
*/

import React, { createContext, useEffect } from 'react';

/**
 * Local Imports
*/

import { AdminPrimaryLayout } from '~/layouts/Primary';
import { AdminSettingsNavigation } from '~/navigation/Secondary/Settings';
import { SmallContentBlock } from '~/components/FMHero/Layout';
import { RouteProps } from '~/components/Router';
import { ScreenOptions, useScreen } from '~/hooks/Util/Screen';
import { useForm } from '~/hooks/Form';

import {
  EditPasswordForm,
  EditPasswordFormContext,
  EditPasswordFormFields } from '~/app/admin/forms/identified/Password';

/**
 * Types/Interfaces
*/

export interface ShowPasswordSettingsPropsRouteParams {
  //
}

export interface ShowPasswordSettingsProps extends RouteProps<ShowPasswordSettingsPropsRouteParams> {
  //
}

/**
 * Locals
*/

const options: ScreenOptions = {
  title: 'Settings',
  breadcrumbs: [],
};

/**
 * Contexts
*/

const ShowPasswordContext = createContext<EditPasswordFormContext>(undefined);

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function ShowPasswordSettings(props: ShowPasswordSettingsProps): JSX.Element {
  /** Hooks **/

  const screen = useScreen(props, options);
  const form = useForm();

  /** Side-Effects **/

  useEffect((): (()=>void) => form.clear, []);

  /** Event Handlers **/

  /**
   * @return {void}
   */
  const handleSubmit = (values: EditPasswordFormFields): void => {
    //
  };

  /** Output **/

  return (
    <ShowPasswordContext.Provider value={ null }>
      <AdminPrimaryLayout
        title={ screen.title }
        secondaryNavigation={ AdminSettingsNavigation }
      >
        <SmallContentBlock>
          <EditPasswordForm
            context={ ShowPasswordContext }
            onSubmit={ handleSubmit }
          />
        </SmallContentBlock>
      </AdminPrimaryLayout>
    </ShowPasswordContext.Provider>
  );
}
