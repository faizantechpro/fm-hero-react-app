/**
 * Local Imports
*/

import { DateTimeConfig, DateTimeDays, DateTimeMonths } from '@config';

/**
 * Types/Interfaces
*/

export enum Iso8601Length {
  Time = 8,
  Date = 10,
  DateTime = 19,
}

export enum Day {
  Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
}

export enum Duration {
  Millisecond, Second, Minute, Hour, Day, Week
}

export enum DateTimeMode {
  Date, Time, DateTime
}

export enum DateTimeTimezone {
  Local, Remote, Convert
}

export enum DateTimeNameType {
  Day, Month
}

export enum DateTimeNameMode {
  Short, Long
}

export type DatePoint = {
  year: number;
  month: number;
  day: number;
};

export type TimePoint = {
  hour: number;
  minute: number;
  second: number;
};

export type DateTimePoint = DatePoint & TimePoint;

/**
 * TypeScript Type Guards
*/

/**
 * @return {dtpoint is DatePoint}
 */
export function isDatePoint(dtpoint: DatePoint | TimePoint | DateTimePoint): dtpoint is DatePoint {
  return (dtpoint as DatePoint).year !== undefined;
}

/**
 * @return {dtpoint is TimePoint}
 */
export function isTimePoint(dtpoint: DatePoint | TimePoint | DateTimePoint): dtpoint is TimePoint {
  return (dtpoint as TimePoint).hour !== undefined;
}

/**
 * @return {dtpoint is DateTimePoint}
 */
export function isDateTimePoint(dtpoint: DatePoint | TimePoint | DateTimePoint): dtpoint is DateTimePoint {
  return (dtpoint as DatePoint).year !== undefined && (dtpoint as TimePoint).hour !== undefined;
}

/**
 * Functions
*/

/**
 * Returns a string in ISO-8601 format.
 *
 * @param {Date} when
 * @param {DateTimeMode} mode
 *
 * @return {string}
 */
function iso(
  when: Date,
  mode: DateTimeMode = DateTimeMode.Date): string
{
  switch (mode) {
  case DateTimeMode.Date:     return when.toISOString().substring(0, Iso8601Length.Date);
  case DateTimeMode.Time:     return when.toISOString().substring(Iso8601Length.Date);
  case DateTimeMode.DateTime: return when.toISOString();
  }
}

/**
 * Returns a string in ISO-8601 format that is safe for use with SQL.
 *
 * @param {Date} when
 * @param {DateTimeMode} mode
 *
 * @return {string}
 */
function sql(
  when: Date,
  mode: DateTimeMode = DateTimeMode.DateTime): string
{
  switch (mode) {
  case DateTimeMode.Date:     return when.toISOString().substring(0, Iso8601Length.Date);
  case DateTimeMode.Time:     return when.toISOString().substring(Iso8601Length.Date + 1, Iso8601Length.DateTime);
  case DateTimeMode.DateTime: return when.toISOString().substring(0, Iso8601Length.DateTime).replace('T', ' ');
  }
}

/**
 * Parses the given string in ISO-8601 format and returns an object containing
 * all pertinent date and time values.
 *
 * @param {string} iso
 *
 * @return {DatePoint | TimePoint | DateTimePoint}
 */
function parse(
  iso: string): DatePoint | TimePoint | DateTimePoint
{
  switch (iso.length) {
  case Iso8601Length.Date:
    return {
      year: parseInt(iso.substring(0, 4)),
      month: parseInt(iso.substring(5, 7)) - 1,
      day: parseInt(iso.substring(8, 10)),
    };
  case Iso8601Length.Time:
    return {
      hour: parseInt(iso.substring(0, 2)),
      minute: parseInt(iso.substring(3, 5)),
      second: parseInt(iso.substring(6, 8)),
    };
  default:
    return {
      year: parseInt(iso.substring(0, 4)),
      month: parseInt(iso.substring(5, 7)) - 1,
      day: parseInt(iso.substring(8, 10)),
      hour: parseInt(iso.substring(11, 13)),
      minute: parseInt(iso.substring(14, 16)),
      second: parseInt(iso.substring(17, 19)),
    };
  }
}

/**
 * Parses the given string in ISO-8601 format and returns a Date instance based
 * on the specified mode.
 *
 * @param {string} iso
 * @param {DateTimeMode} mode
 * @param {DateTimeTimezone} timezone
 *
 * @return {Date}
 */
function from(
  iso: string,
  mode: DateTimeMode = DateTimeMode.Date,
  timezone: DateTimeTimezone = DateTimeTimezone.Local): Date
{
  const dtpoint = parse(iso);

  switch (mode) {
  case DateTimeMode.Date:
    if (isDatePoint(dtpoint))
      return new Date(dtpoint.year, dtpoint.month, dtpoint.day);
    break;
  case DateTimeMode.Time:
    if (isTimePoint(dtpoint))
      return new Date(0, 0, 0, dtpoint.hour, dtpoint.minute, dtpoint.second);
    break;
  case DateTimeMode.DateTime:
    if (isDateTimePoint(dtpoint))
      return new Date(dtpoint.year, dtpoint.month, dtpoint.day, dtpoint.hour, dtpoint.minute, dtpoint.second);
    break;
  }

  return null;
}

/**
 * Retrieves the weekday or month name of the given Date instance.
 *
 * @param {Date} source
 * @param {DateTimeNameType} type
 * @param {DateTimeNameMode} mode
 *
 * @return {string}
 */
function name(
  source: Date,
  type: DateTimeNameType,
  mode: DateTimeNameMode = DateTimeNameMode.Long): string
{
  switch (type) {
  case DateTimeNameType.Day:    return DateTimeConfig.day[source.getDay() as DateTimeDays][mode];
  case DateTimeNameType.Month:  return DateTimeConfig.month[source.getMonth() as DateTimeMonths][mode];
  default:
    return null;
  }
}

/**
 * Converts the given duration to milliseconds.
 *
 * @param {number} amount
 * @param {Duration} type
 *
 * @return {number}
 */
function milliseconds(
  amount: number,
  type: Duration): number
{
  switch (type) {
  case Duration.Millisecond:  return amount;
  case Duration.Second:       return amount * 1000;
  case Duration.Minute:       return amount * 60000;
  case Duration.Hour:         return amount * 3600000;
  case Duration.Day:          return amount * 86400000;
  case Duration.Week:         return amount * 604800000;
  default:
    return null;
  }
}

/**
 * Converts the amount of the 'from' Duration to the 'to' Duration. If the
 * given Duration types are equal then the amount will be returned unchanged.
 *
 * @param {number} amount
 * @param {Duration} from
 * @param {Duration} to
 *
 * @return {number}
 */
function convert(
  amount: number,
  from: Duration,
  to: Duration): number
{
  if (from === to) {
    return amount;
  }

  return milliseconds(amount, from) / milliseconds(1, to);
}

/**
 * Increments the given Date instance by the specified duration.
 *
 * @param {Date} source
 * @param {number} amount
 * @param {Duration} duration
 *
 * @return {Date}
 */
function plus(
  source: Date,
  amount: number,
  duration: Duration): Date
{
  const clone = new Date(source);

  switch (duration) {
  case Duration.Day:
    clone.setDate(clone.getDate() + amount);
    break;
  case Duration.Week:
    clone.setDate(clone.getDate() + (amount * 7));
    break;
  case Duration.Hour:
    clone.setHours(clone.getHours() + amount);
    break;
  case Duration.Minute:
    clone.setMinutes(clone.getMinutes() + amount);
    break;
  case Duration.Second:
    clone.setSeconds(clone.getSeconds() + amount);
    break;
  case Duration.Millisecond:
    clone.setTime(clone.getTime() + amount);
    break;
  }

  return clone;
}

/**
 * Decrements the given Date instance by the specified duration.
 *
 * @param {Date} source
 * @param {number} amount
 * @param {Duration} duration
 *
 * @return {Date}
 */
function subtract(
  source: Date,
  amount: number,
  duration: Duration): Date
{
  return plus(source, -amount, duration);
}

/**
 * Returns a new Date instance equal to the most previous day that matches the
 * specified day of the week. The time of the returned Date instance will be
 * unchanged and remain identical to the time of the passed Date instance.
 *
 * @param {Date} source
 * @param {Day} which
 *
 * @return {Date}
 */
function previous(
  source: Date,
  which: Day): Date
{
  const diff = source.getDate() - source.getDay() + which;
  const clone = new Date(source);

  clone.setDate(diff < source.getDate() ? diff : diff - 7);

  return clone;
}

/**
 * Returns a new Date instance equal to the next day that matches the
 * specified day of the week. The time of the returned Date instance will be
 * unchanged and remain identical to the time of the passed Date instance.
 *
 * @param {Date} source
 * @param {Day} which
 *
 * @return {Date}
 */
function next(
  source: Date,
  which: Day): Date
{
  const diff = which - source.getDay();
  const clone = new Date(source);

  clone.setDate(source.getDate() + diff + (diff > 0 ? 0 : 7));

  return clone;
}

/**
 * Checks if the given dates match by the specified mode.
 *
 * @param {Date} first
 * @param {Date} second
 * @param {DateTimeMode} mode
 *
 * @return {boolean}
 */
function same(
  first: Date,
  second: Date,
  mode: DateTimeMode = DateTimeMode.Date): boolean
{
  switch (mode) {
  case DateTimeMode.Date:
    return (
      first.getDate() === second.getDate() &&
      first.getMonth() === second.getMonth() &&
      first.getFullYear() === second.getFullYear()
    );
  case DateTimeMode.Time:
    return (
      first.getSeconds() === second.getSeconds() &&
      first.getMinutes() === second.getMinutes() &&
      first.getHours() === second.getHours()
    );
  case DateTimeMode.DateTime:
    return (
      first.getSeconds() === second.getSeconds() &&
      first.getMinutes() === second.getMinutes() &&
      first.getHours() === second.getHours() &&
      first.getDate() === second.getDate() &&
      first.getMonth() === second.getMonth() &&
      first.getFullYear() === second.getFullYear()
    );
  default:
    return false;
  }
}

/**
 * Utility
*/

export const Chrono = {
  iso,
  sql,
  name,
  milliseconds,
  convert,
  parse,
  from,
  plus,
  subtract,
  next,
  previous,
  same,
};
