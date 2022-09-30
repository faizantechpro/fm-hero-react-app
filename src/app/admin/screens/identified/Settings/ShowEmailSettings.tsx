/**
 * Global Imports
*/

import React, { createContext, useEffect } from 'react';

/**
 * Local Imports
*/

import { AdminPrimaryLayout } from '~/layouts/Primary';
import { AdminSettingsNavigation } from '~/navigation/Secondary/Settings';
import { FormState } from '~/providers/FormProvider';
import { SmallContentBlock } from '~/components/FMHero/Layout';
import { RouteProps } from '~/components/Router';
import { ScreenOptions, useScreen } from '~/hooks/Util/Screen';
import { useSession } from '~/hooks/User';
import { useForm } from '~/hooks/Form';

import {
  EditEmailForm,
  EditEmailFormContext,
  EditEmailFormFields } from '~/app/admin/forms/identified/Email';

/**
 * Types/Interfaces
*/

export interface ShowEmailSettingsPropsRouteParams {
  //
}

export interface ShowEmailSettingsProps extends RouteProps<ShowEmailSettingsPropsRouteParams> {
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

const ShowEmailContext = createContext<EditEmailFormContext>(undefined);

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function ShowEmailSettings(props: ShowEmailSettingsProps): JSX.Element {
  /** Hooks **/

  const screen = useScreen(props, options);
  const session = useSession();
  const form = useForm();

  /** Side-Effects **/

  useEffect((): (()=>void) => form.clear, []);

  /** Event Handlers **/

  /**
   * @return {void}
   */
  const handleSubmit = (values: EditEmailFormFields): void => {
    //
  };

  /** Output **/

  return (
    <ShowEmailContext.Provider value={ session.user }>
      <AdminPrimaryLayout
        title={ screen.title }
        secondaryNavigation={ AdminSettingsNavigation }
      >
        <SmallContentBlock>
          <EditEmailForm
            context={ ShowEmailContext }
            onSubmit={ handleSubmit }
          />
        </SmallContentBlock>
      </AdminPrimaryLayout>
    </ShowEmailContext.Provider>
  );
}
