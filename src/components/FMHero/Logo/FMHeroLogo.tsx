/**
 * Global Imports
*/

import React from 'react';

/**
 * Root Imports
*/

import { AppConfig, FMHeroLogoType } from '@config';
import { Logo } from '@images';
import { TailwindProps } from '@util/Tailwind';

/**
 * Local Imports
*/

import { Image } from '~/components/Base';

/**
 * Types/Interfaces
*/

export type FMHeroLogoProps = TailwindProps & {
  type: FMHeroLogoType;
};

/**
 * Functions
*/

/**
 * @return {string}
 */
function getLogoSource(type: FMHeroLogoType): string {
  switch (type) {
  case FMHeroLogoType.Color:
  case FMHeroLogoType.Color & FMHeroLogoType.Landscape:
    return Logo.Landscape.Color;
  case FMHeroLogoType.White:
  case FMHeroLogoType.White & FMHeroLogoType.Landscape:
    return Logo.Landscape.White;
  }
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function FMHeroLogo(props: FMHeroLogoProps): JSX.Element {
  return (
    <Image
      alt={ AppConfig.name }
      source={ getLogoSource(props.type) }
      className={ props.className }
      style={ props.style }
    />
  );
}
