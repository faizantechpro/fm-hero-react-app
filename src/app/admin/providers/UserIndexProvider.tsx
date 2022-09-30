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

export interface UserIndexProviderProps {
  children: ReactNode;
}

export interface UserIndexContextInterface extends ResourceIndexContextInterface<UserModel> {
  //
}

/**
 * Contexts
*/

export const UserIndexContext = createContext<UserIndexContextInterface>(undefined);

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function Controller(props: ControllerProps): JSX.Element {
  /** Hooks **/

  const context = useContext(UserIndexContext);

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
export function UserIndexProvider(props: UserIndexProviderProps): JSX.Element {
  return (
    <ResourceIndexProvider<UserModel> context={ UserIndexContext }>
      <Controller>
        { props.children }
      </Controller>
    </ResourceIndexProvider>
  );
}
