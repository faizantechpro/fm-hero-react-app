/**
 * Relative Imports
*/

import { Distance, Unit } from './Unit';

/**
 * Types/Interfaces
*/

export interface GeoCoordinates {
  lat: number;
  lng: number;
}

interface GeoCoordinatesLong {
  latitude: number;
  longitude: number;
}

export interface Province {
  name: string;
  alpha2: string;
}

export interface Country {
  name: string;
  alpha2: string;
  alpha3: string;
  provinces: Array<Province>;
}

export interface BaseAddressModel {
  line1?: string;
  line2?: string;
  city?: string;
  province?: string;
  country?: string;
  postal_code?: string;
}

/**
 * Guards
*/

/**
 * @return {source is GeoCoordinates}
 */
function isGeoCoordinates(source: GeoCoordinates | GeoCoordinatesLong): source is GeoCoordinates {
  return (source as GeoCoordinates).lat !== undefined;
}

/**
 * Functions
*/

/**
 * Returns the distance between the two coordinate locations. By default the
 * distance will be in metres.
 *
 * @param {GeoCoordinates | GeoCoordinatesLong} first
 * @param {GeoCoordinates | GeoCoordinatesLong} second
 * @param {Distance} unit
 *
 * @return {number}
 */
function distance(
  first:  GeoCoordinates | GeoCoordinatesLong,
  second: GeoCoordinates | GeoCoordinatesLong,
  unit:   Distance = Distance.Metre): number
{
  const lat1 = isGeoCoordinates(first)  ? first.lat  : first.latitude;
  const lng1 = isGeoCoordinates(first)  ? first.lng  : first.longitude;
  const lat2 = isGeoCoordinates(second) ? second.lat : second.latitude;
  const lng2 = isGeoCoordinates(second) ? second.lng : second.longitude;

  const R = 6371e3; // metres
  const φ1 = lat1 * Math.PI/180; // φ, λ in radians
  const φ2 = lat2 * Math.PI/180;
  const Δφ = (lat2-lat1) * Math.PI/180;
  const Δλ = (lng2-lng1) * Math.PI/180;
  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return Unit.convert(R * c, Distance.Metre, unit);
}

/**
 * Returns the address in a formatted string.
 *
 * @param {T} address
 *
 * @return {string}
 */
function localeString<T extends BaseAddressModel>(address: T): string {
  if (!address) {
    return null;
  }

  const parts: Array<string> = [];

  if (address.line1) parts.push(address.line1);
  if (address.city) parts.push(address.city);
  if (address.province) parts.push(address.province);
  if (address.country) parts.push(address.country);

  return parts.join(', ');
}

/**
 * Utility
*/

export const Geo = {
  distance,
  localeString,
};
