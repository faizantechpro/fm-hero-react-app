/**
 * Resources
*/

import ShutdownMothballAction from '@resources/data/ShutdownMothball/ShutdownMothballAction.json';
import ShutdownMothballType from '@resources/data/ShutdownMothball/ShutdownMothballType.json';

/**
 * Types/Interfaces
*/

export interface ServiceEventShutdownMothballFormFields {
  equipment_asset_id: number;
  type: number;
  actions: number;
  parts_required: string;
  notes: string;
}

export interface ServiceEventShutdownMothballModel {
  id: number;
  service_event_id: number;
  equipment_asset_id: number;
  type: string;
  actions: string;
  actions_other?: string;
  parts_required: string;
  notes?: string;
}

export type ServiceEventShutdownMothballAttributes = Omit<Partial<ServiceEventShutdownMothballModel>, 'id'>;

/**
 * Functions
*/

/**
 * @return {ServiceEventShutdownMothballAttributes}
 */
export function getServiceEventShutdownMothballAttributes(values: ServiceEventShutdownMothballFormFields): ServiceEventShutdownMothballAttributes {
  return {
    service_event_id: null,
    equipment_asset_id: values.equipment_asset_id,
    type: ShutdownMothballType.find(itr => itr.id === values.type)?.name,
    actions: ShutdownMothballAction.find(itr => itr.id === values.actions)?.name,
    actions_other: null,
    parts_required: values.parts_required,
    notes: values.notes,
  };
}
