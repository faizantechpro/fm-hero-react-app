/**
 * Global Imports
*/

import React, { Fragment, ReactNode, createContext, useEffect, useContext } from 'react';

/**
 * Root Imports
*/

import { ServiceEvent } from '@services/api';
import { ServiceEventModel } from '@models/ServiceEventModel';

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

export interface ServiceEventIndexProviderProps {
  children: ReactNode;
}

export interface ServiceEventIndexContextInterface extends ResourceIndexContextInterface<ServiceEventModel> {
  //
}

/**
 * Contexts
*/

export const ServiceEventIndexContext = createContext<ServiceEventIndexContextInterface>(undefined);

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function Controller(props: ControllerProps): JSX.Element {
  /** Hooks **/

  const context = useContext(ServiceEventIndexContext);

  /** Side-Effects **/

  useEffect((): void => {
    ServiceEvent.index().then(context.setResources);
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
export function ServiceEventIndexProvider(props: ServiceEventIndexProviderProps): JSX.Element {
  return (
    <ResourceIndexProvider<ServiceEventModel> context={ ServiceEventIndexContext }>
      <Controller>
        { props.children }
      </Controller>
    </ResourceIndexProvider>
  );
}
