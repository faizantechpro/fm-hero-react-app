/**
 * Global Imports
*/

import React, { Fragment } from 'react';

/**
 * Root Imports
*/

import { User } from '@services/api';

/**
 * Local Imports
*/

import { UserIndexContext, UserIndexContextInterface } from '~/app/admin/providers/UserIndexProvider';
import { AdminPrimaryLayout } from '~/layouts/Primary';
import { Text } from '~/components/Base';
import { SmallContentBlock } from '~/components/FMHero/Layout';
import { LabeledValue } from '~/components/FMHero/Value';
import { RouteProps } from '~/components/Router';
import { ScreenOptions, useScreen } from '~/hooks/Util/Screen';
import { useResourceShow } from '~/hooks/Resource';

/**
 * Types/Interfaces
*/

export interface ShowUserPropsRouteParams {
  //
}

export interface ShowUserProps extends RouteProps<ShowUserPropsRouteParams, UserIndexContextInterface> {
  //
}

/**
 * Locals
*/

const options: ScreenOptions = {
  title: 'User',
  breadcrumbs: [],
};

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function UserTypeLabel(): JSX.Element {
  return (
    <Text className='self-center ml-8 px-4 py-2 rounded-full text-white bg-fmhero-blue-100'>
      User / Technician
    </Text>
  );
}

/**
 * @return {JSX.Element}
 */
export function ShowUser(props: ShowUserProps): JSX.Element {
  /** Hooks **/

  const screen = useScreen(props, options);
  const show = useResourceShow(UserIndexContext, props.match.params, User);

  /** Output **/

  return (
    <AdminPrimaryLayout
      title={ show.resource?.full_name }
      titleRow={ UserTypeLabel }
      titleRowClassName='flex-start'
      backable={ true }
      backTo='/users'
    >
      <SmallContentBlock className='labeled-values'>
        <LabeledValue
          label='Primary Email Address'
          value={ show.resource?.email || <Fragment>&nbsp;</Fragment> }
        />
        <LabeledValue
          label='Primary Phone Number'
          value={ show.resource?.primary_phone_number || <Fragment>&nbsp;</Fragment> }
        />
        <LabeledValue
          label='Secondary Phone Number'
          value={ show.resource?.secondary_phone_number || <Fragment>&nbsp;</Fragment> }
        />
      </SmallContentBlock>
    </AdminPrimaryLayout>
  );
}
