/**
 * Global Imports
*/

import React, { Fragment, ReactNode, createContext, useEffect, useContext } from 'react';

/**
 * Root Imports
*/

import { User } from '@services/api';
import { UserModel } from '@models/UserModel';

/**
 * Local Imports
*/

import { ResourceIndexContextInterface, ResourceIndexProvider } from '~/providers/ResourceIndexProvider';

/**
 * Types/Interfaces
*/

interface ControllerProps {
  children: ReactNode;
}

export interface AdminIndexProviderProps {
  children: ReactNode;
}

export interface AdminIndexContextInterface extends ResourceIndexContextInterface<UserModel> {
  //
}

/**
 * Contexts
*/

export const AdminIndexContext = createContext<AdminIndexContextInterface>(undefined);

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function Controller(props: ControllerProps): JSX.Element {
  /** Hooks **/

  const context = useContext(AdminIndexContext);

  /** Side-Effects **/

  useEffect((): void => {
    User.index().then(context.setResources);
  }, []);

  /** Output **/

  return (
    <Fragment>
      { props.children }
    </Fragment>
  );
}

/**
 * @return {JSX.Element}
 */
export function AdminIndexProvider(props: AdminIndexProviderProps): JSX.Element {
  return (
    <ResourceIndexProvider<UserModel> context={ AdminIndexContext }>
      <Controller>
        { props.children }
      </Controller>
    </ResourceIndexProvider>
  );
}
