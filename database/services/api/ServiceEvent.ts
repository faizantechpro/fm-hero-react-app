/**
 * Root Imports
*/

import {
  ServiceEventAttributes,
  ServiceEventModel } from '@models/ServiceEventModel';

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

const endpoint = 'service_events';

/**
 * Functions
*/

/*
|--------------------------------------------------------------------------
| Index
|--------------------------------------------------------------------------
*/

/**
 * Retrieve listing of all service events.
 *
 * @param {IndexRequestPayload} data
 * @param {Authorization} auth
 *
 * @return {Promise<Array<ServiceEventModel>>}
 */
function IndexServiceEvent(data?: IndexRequestPayload, auth?: Authorization): Promise<Array<ServiceEventModel>> {
  const config = {
    data: Api.serialize(data),
    method: 'GET',
    uri: `/v1/${ endpoint }`,
  };

  return Api.call<Array<ServiceEventModel>>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Show
|--------------------------------------------------------------------------
*/

/**
 * Retrieve a service event.
 *
 * @param {ResourceIdentity} service_event
 * @param {ShowRequestPayload} data
 * @param {Authorization} auth
 *
 * @return {Promise<ServiceEventModel>}
 */
function ShowServiceEvent(service_event: ResourceIdentity, data?: ShowRequestPayload, auth?: Authorization): Promise<ServiceEventModel> {
  const config = {
    data,
    method: 'GET',
    uri: `/v1/${ endpoint }/${ service_event.id }`,
  };

  return Api.call<ServiceEventModel>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Store
|--------------------------------------------------------------------------
*/

/**
 * Save a service event.
 *
 * @param {ServiceEventAttributes} data
 * @param {Authorization} auth
 *
 * @return {Promise<ServiceEventModel>}
 */
function StoreServiceEvent(data?: ServiceEventAttributes, auth?: Authorization): Promise<ServiceEventModel> {
  const config = {
    data,
    method: 'POST',
    uri: `/v1/${ endpoint }`,
  };

  return Api.call<ServiceEventModel>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Update
|--------------------------------------------------------------------------
*/

/**
 * Update a service event.
 *
 * @param {ResourceIdentity} service_event
 * @param {ServiceEventAttributes} data
 * @param {Authorization} auth
 *
 * @return {Promise<ServiceEventModel>}
 */
function UpdateServiceEvent(service_event: ResourceIdentity, data: ServiceEventAttributes, auth?: Authorization): Promise<ServiceEventModel> {
  const config = {
    data,
    method: 'PUT',
    uri: `/v1/${ endpoint }/${ service_event.id }`,
  };

  return Api.call<ServiceEventModel>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Destroy
|--------------------------------------------------------------------------
*/

/**
 * Remove a service event.
 *
 * @param {ResourceIdentity} service_event
 * @param {DestroyRequestPayload} data
 * @param {Authorization} auth
 *
 * @return {Promise<DestroyResponse>}
 */
function DestroyServiceEvent(service_event: ResourceIdentity, data?: DestroyRequestPayload, auth?: Authorization): Promise<DestroyResponse> {
  const config = {
    data,
    method: 'DELETE',
    uri: `/v1/${ endpoint }/${ service_event.id }`,
  };

  return Api.call<DestroyResponse>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Service
|--------------------------------------------------------------------------
*/

export const ServiceEvent = {
  index: IndexServiceEvent,
  show: ShowServiceEvent,
  store: StoreServiceEvent,
  update: UpdateServiceEvent,
  destroy: DestroyServiceEvent,
};
