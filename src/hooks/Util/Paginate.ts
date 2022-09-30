/**
 * Global Imports
*/

import { useState } from 'react';

/**
 * Root Imports
*/

import { SetStateHandler } from '@util/React';

/**
 * Relative Imports
*/

import { ResourceIndexHook } from './ResourceIndex';
import { PaginateOptions } from '~/providers/ResourceIndexProvider';

/**
 * Types/Interfaces
*/

export type PaginateOffset = {
  [0]: number;
  [1]: number;
};

export interface PaginateHook {
  current: number;
  total: number;
  offset: PaginateOffset;
  setCurrent: SetStateHandler<number>;
}

/**
 * Main
*/

/**
 * @return {PaginateHook}
 */
export function usePaginate<Model>(index: ResourceIndexHook<Model>): PaginateHook {
  /** Functions **/

  /**
   * @return {void}
   */
  const setCurrent = (current: number): void => {
    index.setPaginateOptions((options: PaginateOptions): PaginateOptions => {
      return Object.assign({}, options, { current });
    });
  };

  /** Output **/

  return {
    current: index?.paginateOptions?.current || 0,
    total: index?.paginateOptions?.total || 1,
    offset: [
      ((index?.paginateOptions?.current || 0) * index?.paginateOptions?.stride) || 0,
      (((index?.paginateOptions?.current || 0) * index?.paginateOptions?.stride) + index?.paginateOptions?.stride) || index?.paginateOptions?.stride || 0,
    ],
    setCurrent,
  };
}
