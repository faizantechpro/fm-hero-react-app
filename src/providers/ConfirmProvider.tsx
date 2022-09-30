/**
 * Global Imports
*/

import React, { FunctionComponent, MutableRefObject, ReactNode, createContext, useMemo, useRef, useState } from 'react';

/**
 * Root Imports
*/

import { SetStateHandler } from '@util/React';

/**
 * Types/Interfaces
*/

export type ConfirmHandler = () => void | Promise<void>;
export type CancelHandler = () => void | Promise<void>;

export interface ConfirmProviderProps {
  children: ReactNode;
}

export interface ConfirmContextInterface {
  renderRef: MutableRefObject<FunctionComponent>;
  handleConfirmRef: MutableRefObject<ConfirmHandler>;
  handleCancelRef: MutableRefObject<CancelHandler>;
  title: string;
  setTitle: SetStateHandler<string>;
  isModalVisible: boolean;
  setIsModalVisible: SetStateHandler<boolean>;
}

/**
 * Contexts
*/

export const ConfirmContext = createContext<ConfirmContextInterface>(undefined);

/**
 * Components
 */

/**
 * @return {JSX.Element}
 */
export function ConfirmProvider(props: ConfirmProviderProps): JSX.Element {
  /** Refs **/

  const renderRef = useRef<FunctionComponent>();
  const handleConfirmRef = useRef<ConfirmHandler>();
  const handleCancelRef = useRef<CancelHandler>();

  /** States **/

  const [ title, setTitle ] = useState<string>();
  const [ isModalVisible, setIsModalVisible ] = useState<boolean>();

  /** Memos **/

  const value = useMemo((): ConfirmContextInterface => {
    return {
      renderRef,
      handleConfirmRef,
      handleCancelRef,
      title,
      setTitle,
      isModalVisible,
      setIsModalVisible,
    };
  }, [ title, isModalVisible ]);

  /** Output **/

  return (
    <ConfirmContext.Provider value={ value }>
      { props.children }
    </ConfirmContext.Provider>
  );
}
