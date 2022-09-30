/**
 * Local Imports
*/

import {
  AddressAttributes,
  AddressModel } from '@models/AddressModel';

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

const endpoint = 'addresses';

/**
 * Functions
*/

/*
|--------------------------------------------------------------------------
| Index
|--------------------------------------------------------------------------
*/

/**
 * Retrieve listing of all addresses.
 *
 * @param {IndexRequestPayload} data
 * @param {Authorization} auth
 *
 * @return {Promise<Array<AddressModel>>}
 */
function IndexAddress(data?: IndexRequestPayload, auth?: Authorization): Promise<Array<AddressModel>> {
  const config = {
    data: Api.serialize(data),
    method: 'GET',
    uri: `/v1/${ endpoint }`,
  };

  return Api.call<Array<AddressModel>>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Show
|--------------------------------------------------------------------------
*/

/**
 * Retrieve an address.
 *
 * @param {ResourceIdentity} address
 * @param {ShowRequestPayload} data
 * @param {Authorization} auth
 *
 * @return {Promise<AddressModel>}
 */
function ShowAddress(address: ResourceIdentity, data?: ShowRequestPayload, auth?: Authorization): Promise<AddressModel> {
  const config = {
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }/${ address.id }`,
  };

  return Api.call<AddressModel>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Store
|--------------------------------------------------------------------------
*/

/**
 * Save an address.
 *
 * @param {AddressAttributes} data
 * @param {Authorization} auth
 *
 * @return {Promise<AddressModel>}
 */
function StoreAddress(data: AddressAttributes, auth?: Authorization): Promise<AddressModel> {
  const config = {
    data,
    method: 'POST',
    uri: `/v1/${ endpoint }`,
  };

  return Api.call<AddressModel>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Update
|--------------------------------------------------------------------------
*/

/**
 * Update an address.
 *
 * @param {ResourceIdentity} address
 * @param {AddressAttributes} data
 * @param {Authorization} auth
 *
 * @return {Promise<AddressModel>}
 */
function UpdateAddress(address: ResourceIdentity, data: AddressAttributes, auth?: Authorization): Promise<AddressModel> {
  const config = {
    data,
    method: 'PUT',
    uri: `/v1/${ endpoint }/${ address.id }`,
  };

  return Api.call<AddressModel>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Destroy
|--------------------------------------------------------------------------
*/

/**
 * Remove an address.
 *
 * @param {ResourceIdentity} address
 * @param {DestroyRequestPayload} data
 * @param {Authorization} auth
 *
 * @return {Promise<DestroyResponse>}
 */
function DestroyAddress(address: ResourceIdentity, data?: DestroyRequestPayload, auth?: Authorization): Promise<DestroyResponse> {
  const config = {
    data,
    method: 'DELETE',
    uri: `/v1/${ endpoint }/${ address.id }`,
  };

  return Api.call<DestroyResponse>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Service
|--------------------------------------------------------------------------
*/

export const Address = {
  index: IndexAddress,
  show: ShowAddress,
  store: StoreAddress,
  update: UpdateAddress,
  destroy: DestroyAddress,
};
