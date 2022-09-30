/**
 * Global Imports
*/

import { Chrono } from '@util';

/**
 * Relative Imports
*/

import { ImageModel } from './ImageModel';

/**
 * Types/Interfaces
*/

export interface NamePlateFormFields {
  gas_id: number;
  manufacturer: string;
  model: string;
  model_year: string;
  serial: string;
  manufactured_at: Date;
  factory_field_charge: string;
}

export interface LocationInfoFormFields {
  room_area: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface OperationalInfoFormFields {
  classification_id: number;
  name: string;
  alias: string;
  operational_status: string;
  regulatory_class: string;
  acquired_at: Date;
  shutdown_at: Date;
}

export interface EquipmentAssetFormFields extends NamePlateFormFields, LocationInfoFormFields, OperationalInfoFormFields {
  image: ImageModel;
}

export interface EquipmentAssetModel {
  id: number;
  gas_id?: number;
  equipment_classification_id?: number;
  image?: ImageModel;
  name: string;
  manufacturer: string;
  model: string;
  model_year: string;
  serial: string;
  alias?: string;
  lat: number;
  lng: number;
  operational_status: string;
  regulatory_class: string;
  oil_type: string;
  factory_field_charge: number;
  classification_other?: string;
  room_area: string;
  notes?: string;
  manufactured_at: string;
  acquired_at: string;
  shutdown_at?: string;

}

export interface EquipmentAssetAttributes extends Omit<Partial<EquipmentAssetModel>, 'id'> {
  owner_id?: number;
  owner_type?:  string;
}

/**
 * Functions
*/

function isNamePlate(values: NamePlateFormFields | LocationInfoFormFields | OperationalInfoFormFields | EquipmentAssetFormFields): values is NamePlateFormFields {
  return (values as NamePlateFormFields).manufacturer !== undefined;
}

function isLocationInfo(values: NamePlateFormFields | LocationInfoFormFields | OperationalInfoFormFields | EquipmentAssetFormFields): values is LocationInfoFormFields {
  return (values as LocationInfoFormFields).coordinates !== undefined;
}

function isOperationalInfo(values: NamePlateFormFields | LocationInfoFormFields | OperationalInfoFormFields | EquipmentAssetFormFields): values is OperationalInfoFormFields {
  return (values as OperationalInfoFormFields).operational_status !== undefined;
}

function isEquipmentAsset(values: NamePlateFormFields | LocationInfoFormFields | OperationalInfoFormFields | EquipmentAssetFormFields): values is EquipmentAssetFormFields {
  return (values as EquipmentAssetFormFields).image !== undefined;
}

/**
 * @return {EquipmentAssetAttributes}
 */
function getNamePlateAttributes(values: NamePlateFormFields): EquipmentAssetAttributes {
  return {
    gas_id: values.gas_id,
    manufacturer: values.manufacturer,
    model: values.model,
    model_year: values.model_year,
    serial: values.serial,
    manufactured_at: values.manufactured_at ? Chrono.iso(values.manufactured_at) : '',
    factory_field_charge: (values.factory_field_charge ?? null) !== null ? parseFloat(values.factory_field_charge) : null,
  };
}

/**
 * @return {EquipmentAssetAttributes}
 */
function getLocationInfoAttributes(values: LocationInfoFormFields): EquipmentAssetAttributes {
  return {
    room_area: values.room_area,
    lat: values.coordinates?.lat,
    lng: values.coordinates?.lng,
  };
}

/**
 * @return {EquipmentAssetAttributes}
 */
function getOperationInfoAttributes(values: OperationalInfoFormFields): EquipmentAssetAttributes {
  return {
    equipment_classification_id: values.classification_id,
    name: values.name,
    alias: values.alias,
    operational_status: values.operational_status,
    regulatory_class: values.regulatory_class,
    acquired_at: values.acquired_at ? Chrono.iso(values.acquired_at) : '',
    shutdown_at: values.shutdown_at ? Chrono.iso(values.shutdown_at) : '',
  };
}

/**
 * @return {EquipmentAssetAttributes}
 */
export function getEquipmentAssetAttributes(values: NamePlateFormFields | LocationInfoFormFields | OperationalInfoFormFields | EquipmentAssetFormFields): EquipmentAssetAttributes {
  if (isEquipmentAsset(values)) {
    return Object.assign({ image: values.image },
      getNamePlateAttributes(values),
      getOperationInfoAttributes(values),
      getLocationInfoAttributes(values));
  } else if (isNamePlate(values)) {
    return getNamePlateAttributes(values);
  } else if (isOperationalInfo(values)) {
    return getOperationInfoAttributes(values);
  } else if (isLocationInfo(values)) {
    return getLocationInfoAttributes(values);
  }
}
