/**
 * Resources
*/

import LeakInspectionAction from '@resources/data/LeakInspection/LeakInspectionAction.json';
import LeakInspecDetectionMethodType from '@resources/data/LeakInspection/LeakInspectionDetectionMethod.json';

/**
 * Types/Interfaces
*/

export interface ServiceEventLeakInspectionFormFields {
  equipment_asset_id: number;
  actions: number;
  detection_method: number;
  alds_used: boolean;
  leak_found: boolean;
  notes: string;
}

export interface ServiceEventLeakInspectionModel {
  id: number;
  service_event_id: number;
  equipment_asset_id: number;
  type: string;
  parts_required: string;
  actions: string;
  actions_other?: string;
  detection_method: string;
  detection_method_other?: string;
  alds_used: boolean;
  alds_type: string;
  alds_model?: string;
  leak_found: boolean;
  leak_cause?: string;
  leak_corrective_action?: string;
  notes?: string;
  inspection_at: string;
}

export type ServiceEventLeakInspectionAttributes = Omit<Partial<ServiceEventLeakInspectionModel>, 'id'>;

/**
 * Functions
*/

/**
 * @return {ServiceEventLeakInspectionAttributes}
 */
export function getLeakInspectionAttributes(values: ServiceEventLeakInspectionFormFields): ServiceEventLeakInspectionAttributes {
  return {
    service_event_id: null,
    equipment_asset_id: values.equipment_asset_id,
    type: null,
    parts_required: null,
    actions: LeakInspectionAction.find(itr => itr.id === values.actions)?.name,
    detection_method: LeakInspecDetectionMethodType.find(itr => itr.id === values.detection_method)?.name,
    alds_used: values.alds_used,
    alds_type: null,
    leak_found: values.leak_found,
    inspection_at: null,
  };
}
