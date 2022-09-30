/**
 * Global Imports
*/

import { Context, useContext, useEffect } from 'react';

/**
 * Root Imports
*/

import { PaginateConfig } from '@config';

/**
 * Local Imports
*/

import { PaginateOptions, ResourceIndexContextInterface, SearchOptions } from '~/providers/ResourceIndexProvider';
import { SetStateHandler } from '@util/React';

/**
 * Types/Interfaces
*/

export interface ResourceIndexHook<Model> {
  resources: Array<Model>;
  filtered: Array<Model>;
  paginateOptions: PaginateOptions;
  setPaginateOptions: SetStateHandler<PaginateOptions>;
  searchQuery: string;
  setSearchQuery: SetStateHandler<string>;
}

/**
 * Main
*/

/**
 * @return {ResourceIndexHook}
 */
export function useResourceIndex<Model>(
  context: Context<ResourceIndexContextInterface<Model>>,
  searchOptions?: SearchOptions): ResourceIndexHook<Model>
{
  /** Hooks **/

  const index = useContext(context);

  /** Side-Effects **/

  useEffect((): void => {
    if (searchOptions) {
      index.setSearch(searchOptions);
    }
  }, []);

  useEffect((): void => {
    index.setPaginateOptions((options: PaginateOptions): PaginateOptions => {
      const stride: number = options?.stride || PaginateConfig.stride;
      const length: number = index.filtered?.length ?? index.resources?.length;
      const total: number = Math.ceil(length / stride) || 0;

      return {
        current: (total && options?.current >= total) ? (total - 1) : (options?.current || 0),
        stride,
        total,
      };
    });
  }, [ index.filtered?.length, index.resources?.length ]);

  /** Functions **/

  /**
   * @return {void}
   */
  const setSearchQuery = (query: string): void => {
    index.setSearch((current: SearchOptions): SearchOptions => {
      return Object.assign({}, current, { query });
    });
  };

  /** Output **/

  return {
    resources: index.resources,
    filtered: index.filtered,
    paginateOptions: index.paginateOptions,
    setPaginateOptions: index.setPaginateOptions,
    searchQuery: index.search?.query,
    setSearchQuery,
  };
}
