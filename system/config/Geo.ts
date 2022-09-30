/**
 * Types/Interfaces
*/

export type GeoConfigType = {
  restrict: {
    countries: Array<string>;
  };
};

/**
 * Config
*/

export const GeoConfig: GeoConfigType = {
  restrict: {
    countries: ['Canada', 'United States'],
  },
};
