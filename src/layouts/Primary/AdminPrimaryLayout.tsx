/**
 * Global Imports
*/

import React, { FunctionComponent, ReactNode } from 'react';

/**
 * Root Imports
*/

import { FMHeroLogoType } from '@config';
import { TailwindProps } from '@util/Tailwind';

/**
 * Local Imports
*/

import { AdminPrimaryNavigation } from '~/navigation/Primary';

/**
 * Relative Imports
*/

import { PrimaryLayout, PrimaryLayoutProps } from './PrimaryLayout';

/**
 * Types/Interfaces
*/

export type AdminPrimaryLayoutProps<TitleRowProps, PrimaryNavigationProps, SecondaryNavigationProps> = PrimaryLayoutProps<TitleRowProps, PrimaryNavigationProps, SecondaryNavigationProps>;

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function AdminPrimaryLayout<
  TitleRowProps = {},
  SecondaryNavigationProps = TailwindProps>
(
  props: PrimaryLayoutProps<TitleRowProps, {}, SecondaryNavigationProps>,
): JSX.Element
{
  return (
    <PrimaryLayout<TitleRowProps, {}, SecondaryNavigationProps>
      title={ props.title }
      logo={ props.logo }
      backable={ props.backable }
      backTo={ props.backTo }
      titleRow={ props.titleRow }
      titleRowClassName={ props.titleRowClassName }
      titleRowProps={ props.titleRowProps }
      primaryNavigation={ AdminPrimaryNavigation }
      secondaryNavigation={ props.secondaryNavigation }
      secondaryNavigationProps={ props.secondaryNavigationProps }
      showContentHeader={ props.showContentHeader }
    >
      { props.children }
    </PrimaryLayout>
  );
}
