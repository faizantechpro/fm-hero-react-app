/**
 * Relative Imports
*/

import { AddressModel } from './AddressModel';
import { CompanyModel } from './CompanyModel';
import { ImageModel } from './ImageModel';

/**
 * Types/Interfaces
*/

export type UserSex = 'Female' | 'Male';
export type UserMeasurementsUnit = 'Imperial' | 'Metric';

export interface UserFormFields {
  personal: {
    first_name: string;
    last_name: string;
    sex: string;
    timezone: string;
    measurements_unit: string;
    primary_phone_number: string;
    secondary_phone_number: string;
  };
  address: {
    country: string;
    province: string;
    city: string;
    postal_code: string;
  };
}

export interface UserProfilePrivacyModel {
  is_certifications_public?: boolean;
  is_badges_public?: boolean;
  is_points_public?: boolean;
}

export interface UserModel {
  id: number;
  account_id: number;
  is_identified: boolean;
  is_using_dark_mode: boolean;
  email: string;
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  full_name?: string;
  superhero_name?: string;
  sex?: UserSex;
  measurements_unit?: UserMeasurementsUnit;
  timezone?: string;
  primary_phone_number?: string;
  secondary_phone_number?: string;
  address?: AddressModel;
  avatar?: ImageModel;
  company?: CompanyModel;
  privacy?: UserProfilePrivacyModel;
  last_active_at: string;
}

export type UserAttributes = Omit<Partial<UserModel>, 'id'>;
