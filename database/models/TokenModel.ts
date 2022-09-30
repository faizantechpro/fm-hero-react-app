/**
 * Relative Imports
*/

import { IdentityModel } from './IdentityModel';
import { UserModel } from './UserModel';

/**
 * Types/Interfaces
*/

export type TokenTtl = 'week' | 'day' | 'hour' | 'minute' | 'second';
export type TokenIdentityType = 'email' | 'mobile' | 'oauth';
export type TokenSecretType = 'password' | 'totp';

export interface TokenFormFields {
  remember: boolean;
  identity: {
    type: TokenIdentityType;
    value: string;
  },
  secret: {
    type: TokenSecretType;
    value: string;
  },
}

export interface TokenModel {
  ttl: number;
  ttl_type: TokenTtl;
  value: string;
}

export type TokenAttributes = TokenModel;

export interface TokenResponseModel {
  token: TokenModel;
  user: UserModel;
  identity: IdentityModel;
}
