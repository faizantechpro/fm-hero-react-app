/**
 * Global Imports
*/

import React, { ReactNode, createContext, useMemo, useState, useRef, MutableRefObject } from 'react';

/**
 * Root Imports
*/

import { SetStateHandler } from '@util/React';

/**
 * Types/Interfaces
*/

export type Breadcrumb = {
  name: string;
  uri?: string;
};

export type ScreenProviderProps = {
  children: ReactNode;
};

export interface ScreenContextInterface {
  ignoreMountRef: MutableRefObject<boolean>;
  title: string;
  uri: string;
  breadcrumbs: Array<Breadcrumb>;
  setTitle: SetStateHandler<string>;
  setUri: SetStateHandler<string>;
  setBreadcrumbs: SetStateHandler<Array<Breadcrumb>>;
}

/**
 * Contexts
*/

export const ScreenContext = createContext<ScreenContextInterface>(undefined);

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function ScreenProvider(props: ScreenProviderProps): JSX.Element {
  /** Refs **/

  const ignoreMountRef = useRef<boolean>();

  /** States **/

  const [ title, setTitle ] = useState<string>();
  const [ uri, setUri ] = useState<string>();
  const [ breadcrumbs, setBreadcrumbs ] = useState<Array<Breadcrumb>>();

  /** Memos **/

  const value = useMemo((): ScreenContextInterface => {
    return {
      ignoreMountRef,
      title,
      setTitle,
      uri,
      setUri,
      breadcrumbs,
      setBreadcrumbs,
    };
  }, [ title, uri, breadcrumbs ]);

  /** Output **/

  return (
    <ScreenContext.Provider value={ value }>
      { props.children }
    </ScreenContext.Provider>
  );
}
