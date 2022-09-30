/**
 * Global Imports
*/

import { useContext, useEffect, useRef, useState } from 'react';

/**
 * Root Imports
*/

import { SearchConfig } from '@config';
import { SetStateHandler } from '@util/React';

/**
 * Relative Imports
*/

import { useDebounce } from './Debounce';
import { useIsMounted } from './Mount';

/**
 * Types/Interfaces
*/

export type SearchApi<Model> = {
  search: (query: string) => Promise<Array<Model>>,
};

export interface SearchHook<Model> {
  items: Array<Model>;
  query: string;
  isEmpty: boolean;
  isLoading: boolean;
  isReady: boolean;
  setQuery: SetStateHandler<string>;
  clear: () => void;
}

/**
 * Main
*/

/**
 * @return {SearchHook}
 */
export function useSearch<Model>(api: SearchApi<Model>): SearchHook<Model> {
  /** Hooks **/

  const debounce = useDebounce();
  const isMounted = useIsMounted();

  /** Refs **/

  const isUpdatePendingRef = useRef<boolean>();

  /** States **/

  const [ items, setItems ] = useState<Array<Model>>();
  const [ query, setQuery ] = useState<string>();
  const [ isLoading, setIsLoading ] = useState<boolean>();

  /** Helpers **/

  const itemsLength = items?.length;

  /** Side-Effects **/

  useEffect((): void => {
    if (isLoading) {
      setIsLoading(false);
    }
  }, [ items ]);

  useEffect((): void => {
    if (isLoading) {
      handleSearch();
    } else if (isUpdatePendingRef.current) {
      isUpdatePendingRef.current = false;
      startSearchRequest();
    }
  }, [ isLoading ]);

  useEffect((): void => {
    if (isMounted) {
      if (!isLoading) {
        startSearchRequest();
      } else {
        isUpdatePendingRef.current = true;
      }
    }
  }, [ query ]);

  /** Functions **/

  /**
   * @return {void}
   */
  const clear = (): void => {
    setQuery(null);
  };

  /**
   * @return {void}
   */
  const startSearchRequest = (): void => {
    if (query) {
      debounce.call(handleChangeQuery, SearchConfig.debounceDelay);
    } else {
      debounce.cancel();
      setItems((): Array<Model> => null);
    }
  };

  /** Event Handlers **/

  /**
   * @return {Promise<void>}
   */
  const handleSearch = async (): Promise<void> => {
    const formatted: string = (query || '').trim().toLowerCase();
    let response: Array<Model> = null;

    if (formatted.length) {
      response = await api.search(formatted);
    }

    setItems((): Array<Model> => response);
  };

  /**
   * @return {void}
   */
  const handleChangeQuery = (): void => {
    setIsLoading((): boolean => true);
  };

  /** Output **/

  return {
    items,
    query,
    isEmpty: !!(items && !itemsLength),
    isLoading: !!(isLoading || (!!query && !isLoading && !itemsLength)),
    isReady: !!items,
    setQuery,
    clear,
  };
}
