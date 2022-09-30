/**
 * Types/Interfaces
*/

export interface AddressFormFields {
  name: string;
  line1: string;
  line2: string;
  city: string;
  province: string;
  country: string;
  postal_code: string;
}

export interface AddressModel {
  id: number;
  name: string;
  lat?: number;
  lng?: number;
  line1?: string;
  line2?: string;
  city: string;
  province: string;
  country: string;
  postal_code?: string;
}

export type AddressAttributes = Omit<Partial<AddressModel>, 'id'>;

/**
 * Guards
*/

/**
 * @return {is AddressModel}
 */
export function isAddressModel(value: unknown): value is AddressModel {
  return (value as AddressModel).postal_code !== undefined;
}
