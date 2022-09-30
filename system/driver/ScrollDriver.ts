/**
 * Root Imports
*/

import { ReactConfig } from '@config';

/**
 * Functions
*/

/**
 * @return {void}
 */
function enable(): void {
  const root = document.getElementById(ReactConfig.id);

  root.style.paddingRight = '0';
  root.style.overflowY = 'auto';
}

/**
 * @return {void}
 */
function disable(): void {
  const root = document.getElementById(ReactConfig.id);
  const scrollbarWidth = (window.innerWidth - root.clientWidth);

  root.style.paddingRight = scrollbarWidth + 'px';
  root.style.overflowY = 'hidden';
}

/**
 * Driver
*/

export const ScrollDriver = {
  enable,
  disable,
};
