/**
 * Relative Imports
*/

import {
  AddressAttributes,
  AddressFormFields,
  AddressModel } from './AddressModel';

/**
 * Types/Interfaces
*/

export interface CompanyFormFields {
  name: string;
  address: AddressFormFields;
}

export interface CompanyModel {
  id: number;
  name: string;
  address?: AddressModel;
}

export interface CompanyAttributes extends Omit<Partial<CompanyModel>, 'id' | 'address'> {
  address: AddressAttributes;
}

/**
 * Functions
*/

/**
 * @return {CompanyAttributes}
 */
export function getCompanyAttributes(values: CompanyFormFields): CompanyAttributes {
  return {
    name: values.name,
    address: values.address,
  };
}
