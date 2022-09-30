/**
 * Types/Interfaces
*/

export type TokenConfigType = {
  storage: {
    key: string;
  };
};

/**
 * Config
*/

export const TokenConfig: TokenConfigType = {
  storage: {
    key: process.env.TOKEN_STORAGE_KEY || 'token',
  },
};
