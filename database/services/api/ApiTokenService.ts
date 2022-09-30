/**
 * Root Imports
*/

import { TokenFormFields, TokenResponseModel } from '@models/TokenModel';
import { Api, Authorization, ResourceIdentity } from '@util/Api';

/**
 * Locals
*/

const endpoint = 'tokens';

/*
|--------------------------------------------------------------------------
| Store
|--------------------------------------------------------------------------
*/

/**
 * Save a token.
 *
 * @param {TokenFormFields} data
 *
 * @return {Promise<TokenResponseModel>}
 */
function StoreToken(data: TokenFormFields): Promise<TokenResponseModel> {
  const config = {
    data,
    method: 'POST',
    uri: `/v1/${ endpoint }`,
  };

  return Api.call<TokenResponseModel>(config);
}

/*
|--------------------------------------------------------------------------
| Refresh
|--------------------------------------------------------------------------
*/

export interface RefreshTokenRequest {
  //
}

/**
 * Refresh a token.
 *
 * @param {ResourceIdentity} token
 * @param {RefreshTokenRequest} data
 * @param {Authorization} auth
 *
 * @return {Promise<TokenResponseModel>}
 */
function RefreshToken(token: ResourceIdentity, data: RefreshTokenRequest, auth?: Authorization): Promise<TokenResponseModel> {
  const config = {
    data,
    method: 'POST',
    uri: `/v1/${ endpoint }/${ token.id }/refresh`,
  };

  return Api.call<TokenResponseModel>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Service
|--------------------------------------------------------------------------
*/

export {
  TokenResponseModel
}

export const Token = {
  store: StoreToken,
  refresh: RefreshToken,
};
