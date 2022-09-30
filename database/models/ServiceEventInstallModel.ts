/**
 * Resources
*/

import InstallAction from '@resources/data/Install/InstallAction.json';
import InstallType from '@resources/data/Install/InstallType.json';
import InstallOilType from '@resources/data/Install/InstallOilType.json';

/**
 * Types/Interfaces
*/

export interface ServiceEventInstallFormFields {
  equipment_asset_id: number;
  type: number;
  actions: number;
  new_oil_type: number;
  notes: string;
}

export interface ServiceEventInstallModel {
  id: number;
  service_event_id: number;
  equipment_asset_id: number;
  gas_id: number;
  type: string;
  parts_required: string;
  actions: string;
  actions_other?: string;
  new_oil_type: string;
  new_factory_field_charge: number;
  notes?: string;
}

export type ServiceEventInstallAttributes = Omit<Partial<ServiceEventInstallModel>, 'id'>;

/**
 * Functions
*/

/**
 * @return {ServiceEventInstallAttributes}
 */
export function getServiceEventInstallAttributes(values: ServiceEventInstallFormFields): ServiceEventInstallAttributes {
  return {
    service_event_id: null,
    equipment_asset_id: values.equipment_asset_id,
    gas_id: null,
    type: InstallType.find(itr => itr.id === values.type)?.name,
    actions: InstallAction.find(itr => itr.id === values.actions)?.name,
    actions_other: null,
    parts_required: null,
    new_oil_type: null,
    new_factory_field_charge: null,
    notes: null,
  };
}
