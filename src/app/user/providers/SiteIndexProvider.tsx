/**
 * Global Imports
*/

import React, { Fragment, ReactNode, createContext, useEffect, useContext } from 'react';

/**
 * Root Imports
*/

import { Site } from '@services/api';
import { SiteModel } from '@models/SiteModel';

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

export interface SiteIndexProviderProps {
  children: ReactNode;
}

export interface SiteIndexContextInterface extends ResourceIndexContextInterface<SiteModel> {
  //
}

/**
 * Contexts
*/

export const SiteIndexContext = createContext<SiteIndexContextInterface>(undefined);

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function Controller(props: ControllerProps): JSX.Element {
  /** Hooks **/

  const context = useContext(SiteIndexContext);

  /** Side-Effects **/

  useEffect((): void => {
    Site.index().then(context.setResources);
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
export function SiteIndexProvider(props: SiteIndexProviderProps): JSX.Element {
  return (
    <ResourceIndexProvider<SiteModel> context={ SiteIndexContext }>
      <Controller>
        { props.children }
      </Controller>
    </ResourceIndexProvider>
  );
}
