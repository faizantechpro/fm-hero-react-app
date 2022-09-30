/**
 * Exports
*/

export interface SecretModel {
  id: number;
  identity_id: number;
  type: 'password' | 'totp';
}

export interface SecretAttributes {
  user_id?: number;
  type: 'password' | 'totp';
  value: string;
  value_confirmation: string;
}
