/**
 * Resources
*/

import ScrapType from '@resources/data/Scrap/ScrapType.json';

/**
 * Types/Interfaces
*/

export interface ServiceEventScrapFormFields {
  equipment_asset_id: number;
  type: number;
  is_flat: boolean;
  notes: string;
}

export interface ServiceEventScrapModel {
  id: number;
  service_event_id: number;
  equipment_asset_id: number;
  type: string;
  is_flat: boolean;
  notes?: string;
}

export type ServiceEventScrapAttributes = Omit<Partial<ServiceEventScrapModel>, 'id'>;

/**
 * Functions
*/

/**
 * @return {ServiceEventShutdownMothballAttributes}
 */
 export function getServiceEventScrapModelAttributes(values: ServiceEventScrapFormFields): ServiceEventScrapAttributes {
  return {
    service_event_id: null,
    equipment_asset_id: values.equipment_asset_id,
    type: ScrapType.find(itr => itr.id === values.type)?.name,
    is_flat: values.is_flat,
    notes: values.notes,
  };
}
