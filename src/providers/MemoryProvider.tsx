/**
 * Global Imports
*/

import React, { ReactNode, MutableRefObject, createContext, useMemo, useRef, useState } from 'react';

/**
 * Root Imports
*/

import { SetStateHandler } from '@util/React';

/**
 * Types/Interfaces
*/

export type MemoryData = Array<unknown> | object;
export type MemoryRecord = Record<string, MemoryData>;
export type MemoryRef = MutableRefObject<MemoryRecord>;

export enum MemoryType {
  Heap, Stack,
}

export enum MemoryWriteMode {
  Assign, Clone
}

export interface MemoryProviderProps {
  children: ReactNode;
}

export interface MemoryContextInterface {
  heapRef: MemoryRef;
  heapFlushCount: number;
  setHeapFlushCount: SetStateHandler<number>;
}

/**
 * Contexts
*/

export const MemoryContext = createContext<MemoryContextInterface>(undefined);

/**
 * Components
 */

/**
 * @return {JSX.Element}
 */
export function MemoryProvider(props: MemoryProviderProps): JSX.Element {
  /** Refs **/

  const heapRef = useRef<MemoryRecord>();

  /** States **/

  const [ heapFlushCount, setHeapFlushCount ] = useState<number>();

  /** Memos **/

  const value = useMemo((): MemoryContextInterface => ({ heapRef, heapFlushCount, setHeapFlushCount }), [ heapFlushCount ]);

  /** Output **/

  return (
    <MemoryContext.Provider value={ value }>
      { props.children }
    </MemoryContext.Provider>
  );
}
