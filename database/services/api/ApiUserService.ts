/**
 * Root Imports
*/

import { IdentityModel } from '@models/IdentityModel';
import { TokenModel } from '@models/TokenModel';
import { UserAttributes, UserModel } from '@models/UserModel';

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

const endpoint = 'users';

/**
 * Functions
*/

/*
|--------------------------------------------------------------------------
| Index
|--------------------------------------------------------------------------
*/

/**
 * Retrieve listing of all users.
 *
 * @param {IndexRequestPayload} data
 * @param {Authorization} auth
 *
 * @return {Promise<Array<UserModel>>}
 */
function IndexUser(data?: IndexRequestPayload, auth?: Authorization): Promise<Array<UserModel>> {
  const config = {
    data: Api.serialize(data),
    method: 'GET',
    uri: `/v1/${ endpoint }`,
  };

  return Api.call<Array<UserModel>>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Show
|--------------------------------------------------------------------------
*/

/**
 * Retrieve a user.
 *
 * @param {ResourceIdentity} user
 * @param {ShowRequestPayload} data
 * @param {Authorization} auth
 *
 * @return {Promise<UserModel>}
 */
function ShowUser(user: ResourceIdentity, data?: ShowRequestPayload, auth?: Authorization): Promise<UserModel> {
  const config = {
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }/${ user.id }`,
  };

  return Api.call<UserModel>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Store
|--------------------------------------------------------------------------
*/

export interface StoreUserResponse {
  identity: IdentityModel;
  user: UserModel;
  token: TokenModel;
}

/**
 * Save a user.
 *
 * @param {UserAttributes} data
 * @param {Authorization} auth
 *
 * @return {Promise<StoreUserResponse>}
 */
function StoreUser(data?: UserAttributes, auth?: Authorization): Promise<StoreUserResponse> {
  const config = {
    data,
    method: 'POST',
    uri: `/v1/${ endpoint }`,
  };

  return Api.call<StoreUserResponse>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Update
|--------------------------------------------------------------------------
*/

/**
 * Update a user.
 *
 * @param {ResourceIdentity} user
 * @param {UserAttributes} data
 * @param {Authorization} auth
 *
 * @return {Promise<UserModel>}
 */
function UpdateUser(user: ResourceIdentity, data: UserAttributes, auth?: Authorization): Promise<UserModel> {
  const config = {
    data,
    method: 'PUT',
    uri: `/v1/${ endpoint }/${ user.id }`,
  };

  return Api.call<UserModel>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Destroy
|--------------------------------------------------------------------------
*/

/**
 * Remove a user.
 *
 * @param {ResourceIdentity} user
 * @param {DestroyRequestPayload} data
 * @param {Authorization} auth
 *
 * @return {Promise<DestroyResponse>}
 */
function DestroyUser(user: ResourceIdentity, data?: DestroyRequestPayload, auth?: Authorization): Promise<DestroyResponse> {
  const config = {
    data,
    method: 'DELETE',
    uri: `/v1/${ endpoint }/${ user.id }`,
  };

  return Api.call<DestroyResponse>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Service
|--------------------------------------------------------------------------
*/

export const User = {
  index: IndexUser,
  show: ShowUser,
  store: StoreUser,
  update: UpdateUser,
  destroy: DestroyUser,
};
