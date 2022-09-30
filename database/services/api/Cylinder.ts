/**
 * Root Imports
*/

import {
  CylinderAttributes,
  CylinderModel } from '@models/CylinderModel';

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

const endpoint = 'cylinder_assets';

/**
 * Functions
*/

/*
|--------------------------------------------------------------------------
| Index
|--------------------------------------------------------------------------
*/

/**
 * Retrieve listing of all cylinders.
 *
 * @param {IndexRequestPayload} data
 * @param {Authorization} auth
 *
 * @return {Promise<Array<CylinderModel>>}
 */
function IndexCylinder(data?: IndexRequestPayload, auth?: Authorization): Promise<Array<CylinderModel>> {
  const config = {
    data: Api.serialize(data),
    method: 'GET',
    uri: `/v1/${ endpoint }`,
  };

  return Api.call<Array<CylinderModel>>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Show
|--------------------------------------------------------------------------
*/

/**
 * Retrieve a cylinder.
 *
 * @param {ResourceIdentity} cylinder
 * @param {ShowRequestPayload} data
 * @param {Authorization} auth
 *
 * @return {Promise<CylinderModel>}
 */
function ShowCylinder(cylinder: ResourceIdentity, data?: ShowRequestPayload, auth?: Authorization): Promise<CylinderModel> {
  const config = {
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }/${ cylinder.id }`,
  };

  return Api.call<CylinderModel>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Store
|--------------------------------------------------------------------------
*/

/**
 * Save a cylinder.
 *
 * @param {CylinderAttributes} data
 * @param {Authorization} auth
 *
 * @return {Promise<CylinderModel>}
 */
function StoreCylinder(data?: CylinderAttributes, auth?: Authorization): Promise<CylinderModel> {
  const config = {
    data,
    method: 'POST',
    uri: `/v1/${ endpoint }`,
  };

  return Api.call<CylinderModel>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Update
|--------------------------------------------------------------------------
*/

/**
 * Update a cylinder.
 *
 * @param {ResourceIdentity} cylinder
 * @param {CylinderAttributes} data
 * @param {Authorization} auth
 *
 * @return {Promise<CylinderModel>}
 */
function UpdateCylinder(cylinder: ResourceIdentity, data: CylinderAttributes, auth?: Authorization): Promise<CylinderModel> {
  const config = {
    data,
    method: 'PUT',
    uri: `/v1/${ endpoint }/${ cylinder.id }`,
  };

  return Api.call<CylinderModel>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Destroy
|--------------------------------------------------------------------------
*/

/**
 * Remove a cylinder.
 *
 * @param {ResourceIdentity} cylinder
 * @param {DestroyRequestPayload} data
 * @param {Authorization} auth
 *
 * @return {Promise<DestroyResponse>}
 */
function DestroyCylinder(cylinder: ResourceIdentity, data?: DestroyRequestPayload, auth?: Authorization): Promise<DestroyResponse> {
  const config = {
    data,
    method: 'DELETE',
    uri: `/v1/${ endpoint }/${ cylinder.id }`,
  };

  return Api.call<DestroyResponse>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Service
|--------------------------------------------------------------------------
*/

export const Cylinder = {
  index: IndexCylinder,
  show: ShowCylinder,
  store: StoreCylinder,
  update: UpdateCylinder,
  destroy: DestroyCylinder,
};
