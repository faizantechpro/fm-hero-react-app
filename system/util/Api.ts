/**
 * Global Imports
*/

import axios, { AxiosRequestConfig, Method } from 'axios';

/**
 * Root Imports
*/

import { ApiConfig } from '@config';
import { TokenModel } from '@models/TokenModel';

/**
 * Types/Interfaces
*/

export type Authorization = TokenModel;
export type Headers = Record<string, string>;

export type RequestFilter = Record<string, Record<string, string | number | boolean>>;
export type RequestSort = Record<string, 'asc' | 'desc'>;

export type IndexRequestPayload = {
  limit?: number;
  filter?: RequestFilter;
  sort?: RequestSort;
};

export type ShowRequestPayload = {};
export type DestroyRequestPayload = {};
export type DestroyResponse = {};

export type SerializedRequestPayload = Record<string, string | number | boolean>;

export type Request = {
  method: string;
  uri: string;
  data?: object;
  headers?: object;
};

export type ResourceIdentity = {
  id: number | string;
};

/**
 * Locals
*/

let defaultAuth: Authorization = null;
let defaultHeaders: Headers = {
  'User-Agent': navigator.userAgent + ' Not-Bot',
  'X-Requested-With': 'XMLHttpRequest',
};

/**
 * Functions
*/

/**
 * @param {IndexRequestPayload} data
 *
 * @return {Promise<Response>}
 */
function serialize(data: IndexRequestPayload): SerializedRequestPayload {
  const hasSort = (typeof data?.sort === 'object');
  const hasFilter = (typeof data?.filter === 'object');
  const hasLimit = (typeof data?.limit === 'number');

  if (!hasSort && !hasFilter && !hasLimit) {
    return data as SerializedRequestPayload;
  }

  const serialized: SerializedRequestPayload = {};

  if (hasSort) {
    for (const column in data.sort) {
      serialized[`sort[${ column }]`] = data.sort[column];
    }
  }

  if (hasFilter) {
    for (const column in data.filter) {
      for (const constraint in data.filter[column]) {
        serialized[`filter[${ column }][${ constraint }]`] = data.filter[column][constraint];
      }
    }
  }

  if (hasLimit) {
    serialized.limit = data.limit;
  }

  return serialized;
}

/**
 * Wrapper around axios. Will call API with given request parameters.
 *
 * @param {Request} request
 * @param {Authorization} auth
 *
 * @return {Promise<Response>}
 */
function call<Response=any>(request: Request, auth?: Authorization): Promise<Response> {
  const headers: Headers = Object.assign({}, request.headers, defaultHeaders, {
    Authorization: auth?.value || defaultAuth?.value,
  });

  const config: AxiosRequestConfig = {
    headers,
    method: request.method as Method,
    url: ApiConfig.url + request.uri,
    [request.method.toLowerCase() === 'get' ? 'params' : 'data']: request.data || {}
  };

  for (const key in config.headers) {
    if (!config.headers[key]) {
      delete config.headers[key];
    }
  }

  return new Promise((resolve, reject): void => {
    axios(config)
      .then(response => resolve(response.data))
      .catch(reject);
  });
}

/**
 * Sets the auth instance that will be used by default if one is not provided
 * for a request.
 *
 * @param {Authorization} auth
 *
 * @return {void}
 */
function setDefaultAuth(auth: Authorization): void {
  defaultAuth = auth;
}

/**
 * Utility
*/

export const Api = {
  serialize,
  call,
  setDefaultAuth,
};
