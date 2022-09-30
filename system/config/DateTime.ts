/**
 * Types/Interfaces
*/

export enum DateTimeNameType {
  Day, Month
}

export enum DateTimeNameMode {
  Short, Long
}

export type DateTimeName = {
  [DateTimeNameMode.Short]: string;
  [DateTimeNameMode.Long]: string;
};

export type DateTimeDays = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type DateTimeDayNames = Record<DateTimeDays, DateTimeName>;

export type DateTimeMonths = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export type DateTimeMonthNames = Record<DateTimeMonths, DateTimeName>;

export type DateTimeConfigType = {
  day: DateTimeDayNames;
  month: DateTimeMonthNames;
};

/**
 * Config
*/

export const DateTimeConfig: DateTimeConfigType = {
  day: {
    '0': ['Sun', 'Sunday'],
    '1': ['Mon', 'Monday'],
    '2': ['Tue', 'Tuesday'],
    '3': ['Wed', 'Wednesday'],
    '4': ['Thu', 'Thursday'],
    '5': ['Fri', 'Friday'],
    '6': ['Sat', 'Saturday'],
  },

  month: {
    '0': ['Jan', 'January'],
    '1': ['Feb', 'February'],
    '2': ['Mar', 'March'],
    '3': ['Apr', 'April'],
    '4': ['May', 'May'],
    '5': ['Jun', 'June'],
    '6': ['Jul', 'July'],
    '7': ['Aug', 'August'],
    '8': ['Sep', 'September'],
    '9': ['Oct', 'October'],
    '10': ['Nov', 'November'],
    '11': ['Dec', 'December'],
  },
};
