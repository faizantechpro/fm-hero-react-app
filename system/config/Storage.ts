/**
 * Relative Imports
*/

import { AppConfig } from './App';

/**
 * Types/Interfaces
*/

export type StorageGroupConfig = {
  default: string;
};

export type StorageNameConfig = {
  prefix: string;
  suffix: string;
  delimeter: string;
};

export type StorageConfigType = {
  slug: string;
  name: StorageNameConfig;
  group: StorageGroupConfig;
};

/**
 * Config
*/

export const StorageConfig: StorageConfigType = {
  slug: process.env.STORAGE_SLUG || AppConfig.slug,
  name: {
    prefix: process.env.STORAGE_NAME_PREFIX || '@',
    suffix: process.env.STORAGE_NAME_SUFFIX || '',
    delimeter: process.env.STORAGE_NAME_DELIMETER || ':',
  },
  group: {
    default: process.env.STORAGE_GROUP_DEFAULT || 'storage',
  },
};
