/**
 * Local Imports
*/

import { Chrono } from '@util';

/**
 * Types/Interfaces
*/

export type CylinderType = 'Disposable' | 'Recovery' | 'Refillable';
export type CylinderTypeFilter = {
  [Key in CylinderType]: boolean;
};

export interface CylinderFormFields {
  serial_number: string;
  tag_number: string;
  purity_label: string;
  type: CylinderType;
  cylinder_size: string;
  manufacturer: string;
  manufactured_at: Date;
  last_recertification_at: Date;
  next_recertification_at: Date;
  tare_weight: string;
  current_gas_weight: string;
}

export interface CylinderModel {
  id: number;
  type: CylinderType;
  manufacturer: string;
  cylinder_size: number;
  tare_weight: number;
  current_gas_weight: number;
  serial_number: string;
  tag_number: string;
  purity_label: string;
  manufactured_at: string;
  last_recertification_at: string;
  next_recertification_at: string;
}

export type CylinderAttributes = Omit<Partial<CylinderModel>, 'id'>;

/**
 * Functions
*/

/**
 * @return {CylinderAttributes}
 */
export function getCylinderAttributes(values: CylinderFormFields): CylinderAttributes {
  return {
    type: values.type,
    cylinder_size: parseFloat(values.cylinder_size),
    tare_weight: parseFloat(values.tare_weight),
    current_gas_weight: parseFloat(values.current_gas_weight),
    serial_number: values.serial_number,
    tag_number: values.tag_number,
    purity_label: values.purity_label,
    manufacturer: values.manufacturer,
    manufactured_at: values.manufactured_at ? Chrono.iso(values.manufactured_at) : '',
    last_recertification_at: values.last_recertification_at ? Chrono.iso(values.last_recertification_at) : '',
    next_recertification_at: values.next_recertification_at ? Chrono.iso(values.next_recertification_at) : '',
  };
}
