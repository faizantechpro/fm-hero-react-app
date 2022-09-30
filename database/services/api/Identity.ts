/**
 * Local Imports
*/

import {
  IdentityAttributes,
  IdentityModel } from '@models/IdentityModel';

import {
  Api,
  Authorization,
  DestroyRequestPayload,
  DestroyResponse,
  ResourceIdentity } from '@util/Api';

/**
 * Config
*/

const endpoint = 'identities';

/*
|--------------------------------------------------------------------------
| Store
|--------------------------------------------------------------------------
*/

/**
 * Save an identity.
 *
 * @param {IdentityAttributes} data
 * @param {Authorization} auth
 *
 * @return {Promise<IdentityModel>}
 */
function StoreIdentity(data: IdentityAttributes, auth?: Authorization): Promise<IdentityModel> {
  const config = {
    data,
    method: 'POST',
    uri: `/v1/${ endpoint }`
  };

  return Api.call<IdentityModel>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Update
|--------------------------------------------------------------------------
*/

/**
 * Update an identity.
 *
 * @param {ResourceIdentity} identity
 * @param {UpdateIdentityRequest} data
 * @param {Authorization} auth
 *
 * @return {Promise<UpdateIdentityResponse>}
 */
function UpdateIdentity(identity: ResourceIdentity, data: IdentityAttributes, auth?: Authorization): Promise<IdentityModel> {
  const config = {
    data,
    method: 'PUT',
    uri: `/v1/${ endpoint }/${ identity.id }`,
  };

  return Api.call<IdentityModel>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Verify
|--------------------------------------------------------------------------
*/

export interface VerifyIdentityRequest {
  type: 'code' | 'token';
  value: string;
}

export interface VerifyIdentityResponse {
  //
}

/**
 * Verify an identity.
 *
 * @param {ResourceIdentity} identity
 * @param {VerifyIdentityRequest} data
 * @param {Authorization} auth
 *
 * @return {Promise<VerifyIdentityResponse>}
 */
function VerifyIdentity(identity: ResourceIdentity, data: VerifyIdentityRequest, auth?: Authorization): Promise<VerifyIdentityResponse> {
  const config = {
    data,
    method: 'PUT',
    uri: `/v1/${ endpoint }/${ identity.id }/verification`,
  };

  return Api.call<VerifyIdentityResponse>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Recover
|--------------------------------------------------------------------------
*/

export interface RecoverIdentityRequest {
  code: string;
}

export interface RecoverIdentityResponse {
  //
}

/**
 * Recover an identity.
 *
 * @param {ResourceIdentity} identity
 * @param {RecoverIdentityRequest} data
 * @param {Authorization} auth
 *
 * @return {Promise<VerifyIdentityResponse>}
 */
function RecoverIdentity(identity: ResourceIdentity, data: RecoverIdentityRequest, auth?: Authorization): Promise<RecoverIdentityResponse> {
  const config = {
    data,
    method: 'PUT',
    uri: `/v1/${ endpoint }/${ identity.id }/recovery`,
  };

  return Api.call<RecoverIdentityResponse>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Destroy
|--------------------------------------------------------------------------
*/

/**
 * Remove an identity.
 *
 * @param {ResourceIdentity} identity
 * @param {DestroyIdentityRequest} data
 * @param {Authorization} auth
 *
 * @return {Promise<DestroyResponse>}
 */
function DestroyIdentity(identity: ResourceIdentity, data?: DestroyRequestPayload, auth?: Authorization): Promise<DestroyResponse> {
  const config = {
    data,
    method: 'DELETE',
    uri: `/v1/${ endpoint }/${ identity.id }`,
  };

  return Api.call<DestroyResponse>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Service
|--------------------------------------------------------------------------
*/

export const Identity = {
  store: StoreIdentity,
  update: UpdateIdentity,
  verify: VerifyIdentity,
  recover: RecoverIdentity,
  destroy: DestroyIdentity,
};
