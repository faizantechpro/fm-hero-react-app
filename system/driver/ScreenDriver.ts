/**
 * Local Imports
*/

import TailwindConfig from '../../tailwind.config';

/**
 * Types/Interfaces
*/

export type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export type ScreenDimensions = {
  min: number;
  max: number;
  landscape: {
    width: number;
    height: number;
  };
  portrait: {
    width: number;
    height: number;
  };
};

type ScreenDriverCache = {
  screens: Record<ScreenSize, number>;
};

/**
 * Locals
*/

const cache: ScreenDriverCache = {
  screens: {
    xs: parseInt(TailwindConfig.theme.screens.xs),
    sm: parseInt(TailwindConfig.theme.screens.sm),
    md: parseInt(TailwindConfig.theme.screens.md),
    lg: parseInt(TailwindConfig.theme.screens.lg),
    xl: parseInt(TailwindConfig.theme.screens.xl),
    '2xl': parseInt(TailwindConfig.theme.screens['2xl']),
    '3xl': parseInt(TailwindConfig.theme.screens['3xl']),
  },
};

/**
 * Functions
*/

/**
 * Retrieve the size name of the screen based on its size as defined in the
 * Tailwind config file. If a width is not specified then the width of the
 * screen in portrait mode will be used.
 *
 * @param {number} width
 *
 * @return {ScreenSize}
 */
function size(width?: number): ScreenSize {
  if (!width) {
    width = dimensions().portrait.width;
  }

  for (const name in cache.screens) {
    if (width >= cache.screens[name as ScreenSize]) {
      return name as ScreenSize;
    }
  }

  return '3xl';
}

/**
 * Retrieve the dimensions of the screen.
 *
 * @return {ScreenDimensions}
 */
function dimensions(): ScreenDimensions {
  const min = Math.min(window.innerWidth, window.innerHeight);
  const max = Math.max(window.innerWidth, window.innerHeight);
  const dimensions = {
    min,
    max,
    landscape: {
      width: max,
      height: min,
    },
    portrait: {
      width: min,
      height: max,
    },
  };

  return dimensions;
}

/**
 * Driver
*/

export const ScreenDriver = {
  size,
  dimensions,
};
