/**
 * Local Imports
*/

import { SecretAttributes, SecretModel } from '@models/SecretModel';
import { Api, Authorization } from '@util/Api';

/**
 * Config
*/

const endpoint = 'secrets';

/*
|--------------------------------------------------------------------------
| Store
|--------------------------------------------------------------------------
*/

/**
 * Save a secret.
 *
 * @param {SecretAttributes} data
 * @param {Authorization} auth
 *
 * @return {Promise<SecretModel>}
 */
function StoreSecret(data: SecretAttributes, auth?: Authorization): Promise<SecretModel> {
  const config = {
    data,
    method: 'POST',
    uri: `/v1/${ endpoint }`
  };

  return Api.call<SecretModel>(config, auth);
}

/*
|--------------------------------------------------------------------------
| Service
|--------------------------------------------------------------------------
*/

export const Secret = {
  store: StoreSecret,
};
