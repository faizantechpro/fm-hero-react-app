/**
 * Types/Interfaces
*/

export type SearchConfigType = {
  debounceDelay: number,
};

/**
 * Config
*/

export const SearchConfig: SearchConfigType = {
  debounceDelay: parseInt(process.env.SEARCH_DEBOUNCE_DELAY) || 250,
};
