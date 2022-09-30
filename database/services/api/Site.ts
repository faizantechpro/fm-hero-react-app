/**
 * Root Imports
*/

import {
  SiteAttributes,
  SiteModel } from '@models/SiteModel';

import {
  Api,
  Authorization,
  IndexRequestPayload,
  ShowRequestPayload,
  DestroyRequestPayload,
  DestroyResponse,
  ResourceIdentity } from '@util/Api';

/**
 * Config
*/

const endpoint = 'sites';

/**
 * Functions
*/

/*
|--------------------------------------------------------------------------
| Index
|--------------------------------------------------------------------------
*/

/**
 * Retrieve listing of all sites.
 *
 * @param {IndexRequestPayload} data
 * @param {Authorization} auth
 *
 * @return {Promise<Array<SiteModel>>}
 */
function IndexSite(data?: IndexRequestPayload, auth?: Authorization): Promise<Array<SiteModel>> {
  const config = {
    data: Api.serialize(data),
    method: 'GET',
    uri: `/v1/${ endpoint }`,
  };

  return Api.call<Array<SiteModel>>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Show
|--------------------------------------------------------------------------
*/

/**
 * Retrieve a site.
 *
 * @param {ResourceIdentity} site
 * @param {ShowRequestPayload} data
 * @param {Authorization} auth
 *
 * @return {Promise<SiteModel>}
 */
function ShowSite(site: ResourceIdentity, data?: ShowRequestPayload, auth?: Authorization): Promise<SiteModel> {
  const config = {
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }/${ site.id }`,
  };

  return Api.call<SiteModel>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Store
|--------------------------------------------------------------------------
*/

/**
 * Save a site.
 *
 * @param {SiteAttributes} data
 * @param {Authorization} auth
 *
 * @return {Promise<SiteModel>}
 */
function StoreSite(data?: SiteAttributes, auth?: Authorization): Promise<SiteModel> {
  const config = {
    data,
    method: 'POST',
    uri: `/v1/${ endpoint }`,
  };

  return Api.call<SiteModel>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Update
|--------------------------------------------------------------------------
*/

/**
 * Update a site.
 *
 * @param {ResourceIdentity} site
 * @param {SiteAttributes} data
 * @param {Authorization} auth
 *
 * @return {Promise<SiteModel>}
 */
function UpdateSite(site: ResourceIdentity, data: SiteAttributes, auth?: Authorization): Promise<SiteModel> {
  const config = {
    data,
    method: 'PUT',
    uri: `/v1/${ endpoint }/${ site.id }`,
  };

  return Api.call<SiteModel>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Destroy
|--------------------------------------------------------------------------
*/

/**
 * Remove a site.
 *
 * @param {ResourceIdentity} site
 * @param {DestroyRequestPayload} data
 * @param {Authorization} auth
 *
 * @return {Promise<DestroyResponse>}
 */
function DestroySite(site: ResourceIdentity, data?: DestroyRequestPayload, auth?: Authorization): Promise<DestroyResponse> {
  const config = {
    data,
    method: 'DELETE',
    uri: `/v1/${ endpoint }/${ site.id }`,
  };

  return Api.call<DestroyResponse>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Service
|--------------------------------------------------------------------------
*/

export const Site = {
  index: IndexSite,
  show: ShowSite,
  store: StoreSite,
  update: UpdateSite,
  destroy: DestroySite,
};
