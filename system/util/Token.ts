/**
 * Root Imports
*/

import { TokenModel } from '@models/TokenModel';

/**
 * Functions
*/

/**
 * Attempts to retrieve the primary key from the token. Will return null if
 * the token has no primary key.
 *
 * @param {TokenModel} model
 *
 * @return {number}
 */
function primaryKey(model: TokenModel): number {
  if (!model?.value) {
    return null;
  }

  const [ , token ] = model.value.split('Bearer ');

  if (!token) {
    return null;
  }

  return parseInt(token.split('|')[0]) || null;
}

/**
 * Utility
*/

export const Token = {
  primaryKey,
};
