/**
 * Global Imports
*/

import React, { Fragment, ReactNode, createContext, useEffect, useContext } from 'react';

/**
 * Root Imports
*/

import { Cylinder } from '@services/api';
import { CylinderModel } from '@models/CylinderModel';

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

export interface CylinderIndexProviderProps {
  children: ReactNode;
}

export interface CylinderIndexContextInterface extends ResourceIndexContextInterface<CylinderModel> {
  //
}

/**
 * Contexts
*/

export const CylinderIndexContext = createContext<CylinderIndexContextInterface>(undefined);

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function Controller(props: ControllerProps): JSX.Element {
  /** Hooks **/

  const context = useContext(CylinderIndexContext);

  /** Side-Effects **/

  useEffect((): void => {
    Cylinder.index().then(context.setResources);
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
export function CylinderIndexProvider(props: CylinderIndexProviderProps): JSX.Element {
  return (
    <ResourceIndexProvider<CylinderModel> context={ CylinderIndexContext }>
      <Controller>
        { props.children }
      </Controller>
    </ResourceIndexProvider>
  );
}
