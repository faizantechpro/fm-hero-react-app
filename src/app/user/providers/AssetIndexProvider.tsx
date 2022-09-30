/**
 * Global Imports
*/

import React, { Fragment, ReactNode, createContext, useEffect, useContext } from 'react';

/**
 * Root Imports
*/


/**
 * Local Imports
*/

import { ResourceIndexContextInterface, ResourceIndexProvider } from '~/providers/ResourceIndexProvider';

/**
 * Types/Interfaces
*/

export interface AssetModel {
  id: number;
} // temporary

interface ControllerProps {
  children: ReactNode;
}

export interface AssetIndexProviderProps {
  children: ReactNode;
}

export interface AssetIndexContextInterface extends ResourceIndexContextInterface<AssetModel> {
  //
}

/**
 * Contexts
*/

export const AssetIndexContext = createContext<AssetIndexContextInterface>(undefined);

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function Controller(props: ControllerProps): JSX.Element {
  /** Hooks **/

  const context = useContext(AssetIndexContext);

  /** Side-Effects **/

  useEffect((): void => {
    //
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
export function AssetIndexProvider(props: AssetIndexProviderProps): JSX.Element {
  return (
    <ResourceIndexProvider<AssetModel> context={ AssetIndexContext }>
      <Controller>
        { props.children }
      </Controller>
    </ResourceIndexProvider>
  );
}
