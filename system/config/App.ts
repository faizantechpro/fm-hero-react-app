/**
 * Types/Interfaces
*/

export enum AppMode {
  Debug,
  Production,
}

export type AppConfigType = {
  name: string;
  slug: string;
  mode: AppMode;
};

/**
 * Functions
*/

/**
 * @return {AppMode}
 */
function getAppMode(value: string): AppMode {
  switch (value && value.toLowerCase()) {
  case 'debug':
  case 'development':
    return AppMode.Debug;
  case 'production':
    return AppMode.Production;
  }
}

/**
 * Config
*/

export const AppConfig: AppConfigType = {
  name: process.env.APP_NAME,
  slug: process.env.APP_SLUG || process.env.APP_NAME.toLowerCase().replace(/[^a-z\-]/g, ''),
  mode: getAppMode(process.env.NODE_ENV) || AppMode.Debug,
};
