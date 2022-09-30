/**
 * Resources
*/

import RepairAction from '@resources/data/Repair/RepairAction.json';
import RepairType from '@resources/data/Repair/RepairType.json';
import RepairVerificationMethod from '@resources/data/Repair/RepairVerificationMethod.json';

/**
 * Types/Interfaces
*/

export interface ServiceEventRepairFormFields {
  equipment_asset_id: number;
  type: number;
  actions: number;
  verification_method: number;
  parts_required: string;
  notes: string;
}

export interface ServiceEventRepairModel {
  id: number;
  service_event_id: number;
  equipment_asset_id: number;
  type: string;
  actions: string;
  actions_other?: string;
  verification_method: string;
  verification_method_alternative?: string;
  parts_required: string;
  notes?: string;
}

export type ServiceEventRepairAttributes = Omit<Partial<ServiceEventRepairModel>, 'id'>;

/**
 * Functions
*/

/**
 * @return {ServiceEventLeakInspectionAttributes}
 */
export function getServiceEventRepairAttributes(values: ServiceEventRepairFormFields): ServiceEventRepairAttributes {
  return {
    service_event_id: null,
    equipment_asset_id: values.equipment_asset_id,
    type: RepairType.find(itr => itr.id === values.type)?.name,
    actions: RepairAction.find(itr => itr.id === values.actions)?.name,
    actions_other: null,
    verification_method: RepairVerificationMethod.find(itr => itr.id === values.verification_method)?.name,
    verification_method_alternative: null,
    parts_required: values.parts_required,
    notes: values.notes,
  };
}
