/**
 * Root Imports
*/

import { Chrono } from '@util';

/**
 * Relative Imports
*/

import { CompanyModel } from './CompanyModel';
import { EquipmentAssetModel } from './EquipmentAssetModel';
import { ServiceEventInstallModel } from './ServiceEventInstallModel';
import { ServiceEventLeakInspectionModel } from './ServiceEventLeakInspectionModel';
import { ServiceEventRepairModel } from './ServiceEventRepairModel';
import { ServiceEventScrapModel } from './ServiceEventScrapModel';
import { ServiceEventShutdownMothballModel } from './ServiceEventShutdownMothballModel';
import { SiteFormFields, SiteModel } from './SiteModel';
import { UserModel } from './UserModel';

/**
 * Types/Interfaces
*/

export type ServiceEventStatus = 'In Progress' | 'Upcoming' | 'Completed';

export interface ServiceEventFormFields {
  general: {
    status: ServiceEventStatus;
    start_date: Date;
    start_time: Date;
    end_date: Date;
    end_time: Date;
    work_order_number: string;
    purchase_order_number: string;
    external_reference_number: string;
    event_description: string;
  };
  contact: {
    name: string;
    phone_number: string;
    email: string;
  };
  site_id?: number;
  site: SiteFormFields;
}

export interface ServiceEventModel {
  id: number;
  user_id?: number;
  site_id?: number;
  user?: UserModel;
  company?: CompanyModel;
  site?: SiteModel;
  contact_name?: string;
  contact_phone?: string;
  contact_email?: string;
  work_order_number?: string;
  purchase_order_number?: string;
  external_reference_number?: string;
  event_description: string;
  status: ServiceEventStatus;
  start_at: string;
  end_at: string;
  installs: Array<ServiceEventInstallModel>;
  repairs: Array<ServiceEventRepairModel>;
  leak_inspections: Array<ServiceEventLeakInspectionModel>;
  scraps: Array<ServiceEventScrapModel>;
  shutdown_mothballs: Array<ServiceEventShutdownMothballModel>;
  serviced_equipment_assets: Array<EquipmentAssetModel>;
  created_at: string;
  updated_at: string;
}

export type ServiceEventAttributes = Omit<Partial<ServiceEventModel>, 'id'>;

/**
 * Functions
*/

/**
 * @return {ServiceEventAttributes}
 */
export function getServiceEventAttributes(values: ServiceEventFormFields): ServiceEventAttributes {
  return {
    site_id: null,
    status: values.general.status,
    event_description: values.general.event_description,
    purchase_order_number: values.general.purchase_order_number,
    work_order_number: values.general.work_order_number,
    contact_name: values.contact.name,
    contact_phone: values.contact.phone_number,
    contact_email: values.contact.email,
    start_at: Chrono.sql(new Date(
      values.general.start_date.getFullYear(),
      values.general.start_date.getMonth(),
      values.general.start_date.getDate(),
      values.general.start_time.getHours(),
      values.general.start_time.getMinutes(),
    )),
    end_at: values.general.end_date && Chrono.sql(new Date(
      values.general.end_date.getFullYear(),
      values.general.end_date.getMonth(),
      values.general.end_date.getDate(),
      values.general.end_time.getHours(),
      values.general.end_time.getMinutes(),
    )),
  };
}
