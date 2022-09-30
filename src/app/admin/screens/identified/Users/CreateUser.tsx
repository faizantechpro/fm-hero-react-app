/**
 * Global Imports
*/

import React, { ReactNode, useEffect, useContext, useState } from 'react';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { RouteProps } from '~/components/Router';
import { UserIndexContextInterface } from '~/app/admin/providers/UserIndexProvider';

/**
 * Types/Interfaces
*/

export interface CreateUserRouteParams {
  //
}

export interface CreateUserProps extends RouteProps<CreateUserRouteParams, UserIndexContextInterface> {
  //
}

/**
 * Locals
*/



/**
 * Components
*/

export function CreateUser(props: CreateUserProps): JSX.Element {
  /** Contexts **/

  /** States **/

  /** Side-Effects **/

  /** Event Handlers **/

  /** Renderers **/

  /** Output **/

  return (
    null
  );
}
