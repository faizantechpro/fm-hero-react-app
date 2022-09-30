/**
 * Types/Interfaces
*/

export type ApiConfigType = {
  url: string;
};

/**
 * Config
*/

export const ApiConfig: ApiConfigType = {
  url: process.env.API_URL,
};
