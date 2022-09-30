/**
 * Relative Imports
*/

import { AddressFormFields, AddressModel } from './AddressModel';

/**
 * Types/Interfaces
*/

export interface SiteFormFields {
  name: string;
  address: AddressFormFields;
}

export interface SiteModel {
  id: number;
  name: string;
  address?: AddressModel;
}

export type SiteAttributes = Omit<Partial<SiteModel>, 'id'>;
