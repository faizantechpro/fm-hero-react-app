/**
 * Resources
*/

import TailwindConfig from '../../tailwind.config.js';

/**
 * Functions
*/

/**
 * Returns the color as a string for the specified color based on the Tailwind config.
 *
 * @param {string} name The color name (e.g. red-300) to evaluate.
 *
 * @return {ColorValue}
 */
function color(name: string): string {
  return TailwindConfig.theme.extend.colors[name];
}

/**
 * Utility
*/

export const ThemeDriver = {
  color,
};
