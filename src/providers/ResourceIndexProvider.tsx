/**
 * Global Imports
*/

import React, { ReactNode, Context, useState, useMemo } from 'react';

/**
 * Root Imports
*/

import { SetStateHandler } from '@util/React';
import { Algorithm } from '@util';
import { ResourceIdentity } from '@util/Api';

/**
 * Types/Interfaces
*/

export interface PaginateOptions {
  stride: number;
  current: number;
  total: number;
}

export interface SortOptions {
  by: string;
  order: 'asc' | 'desc';
}

export interface SearchOptions {
  query: string;
  attributes: Array<string>;
}

export interface ResourceIndexContextInterface<ResourceInterface> {
  viewing: number;
  resources: Array<ResourceInterface>;
  indices: Array<number>;
  paginateOptions: PaginateOptions;
  sort: SortOptions;
  search: SearchOptions;

  filtered: Array<ResourceInterface>;

  one: ResourceInterface;
  setOne: SetStateHandler<ResourceInterface>;

  setViewing: SetStateHandler<number>;
  setResources: SetStateHandler<Array<ResourceInterface>>;
  setIndices: SetStateHandler<Array<number>>;
  setPaginateOptions: SetStateHandler<PaginateOptions>;
  setSort: SetStateHandler<SortOptions>;
  setSearch: SetStateHandler<SearchOptions>;
}

export interface ResourceIndexProviderProps<ResourceInterface> {
  context: Context<ResourceIndexContextInterface<ResourceInterface>>;
  children: ReactNode;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function ResourceIndexProvider<ResourceInterface extends ResourceIdentity>(props: ResourceIndexProviderProps<ResourceInterface>): JSX.Element {
  /** States **/

  const [ viewing,    setViewing ]    = useState<number>();
  const [ one, setOne ] = useState<ResourceInterface>();
  const [ resources,  setResources ]  = useState<Array<ResourceInterface>>();
  const [ indices,    setIndices ]    = useState<Array<number>>();
  const [ paginateOptions, setPaginateOptions ] = useState<PaginateOptions>();
  const [ sort,       setSort ]       = useState<SortOptions>();
  const [ search,     setSearch ]     = useState<SearchOptions>();

  /** Helpers **/

  const filtered = useMemo((): Array<ResourceInterface> => {
    if (!search?.query) {
      return resources;
    }

    const result: Array<ResourceInterface> = [];
    const query: string = search.query.toLowerCase().trim();

    for (const itr of resources) {
      for (const attr of ['full_name','email']) {
        const node = Algorithm.within<ResourceInterface, string>(itr, attr);

        if (node && node.toString().toLowerCase().indexOf(query) !== -1) {
          result.push(itr);
          break;
        }
      }
    }

    return result;
  }, [ search?.query ]);

  /** Output **/

  return (
    <props.context.Provider
      value={{
        viewing,    setViewing,
        one, setOne,
        resources,  setResources,
        indices,    setIndices,
        paginateOptions, setPaginateOptions,
        sort,       setSort,
        search,     setSearch,
        filtered,
      }}
    >
      { props.children }
    </props.context.Provider>
  );
}
