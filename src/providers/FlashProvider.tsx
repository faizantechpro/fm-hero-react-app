/**
 * Global Imports
*/

import React, { MutableRefObject, ReactNode, createContext, useMemo, useRef, useState } from 'react';

/**
 * Root Imports
*/

import { SetStateHandler } from '@util/React';

/**
 * Types/Interfaces
*/

export type FlashMessageUid = number;

export type FlashMessage = {
  uid: FlashMessageUid;
  content: string;
  className: string;
  ttl: number;
};

export type FlashMessages = Record<FlashMessageUid, FlashMessage>;

export interface FlashProviderProps {
  children: ReactNode;
}

export interface FlashContextInterface {
  messagesRef: MutableRefObject<FlashMessages>;
  flushCount: number;
  setFlushCount: SetStateHandler<number>;
}

/**
 * Contexts
*/

export const FlashContext = createContext<FlashContextInterface>(undefined);

/**
 * Components
 */

/**
 * @return {JSX.Element}
 */
export function FlashProvider(props: FlashProviderProps): JSX.Element {
  /** Refs **/

  const messagesRef = useRef<FlashMessages>();

  /** States **/

  const [ flushCount, setFlushCount ] = useState<number>();

  /** Memos **/

  const value = useMemo((): FlashContextInterface => ({ messagesRef, flushCount, setFlushCount }), [ flushCount ]);

  /** Output **/

  return (
    <FlashContext.Provider value={ value }>
      { props.children }
    </FlashContext.Provider>
  );
}
