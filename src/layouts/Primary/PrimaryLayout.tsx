/**
 * Global Imports
*/

import React, { FunctionComponent, ReactNode, createElement, Fragment, useState } from 'react';

/**
 * Root Imports
*/

import { FMHeroLogoType } from '@config';
import { Css } from '@util/Css';
import { TailwindProps } from '@util/Tailwind';

/**
 * Local Imports
*/

import { Pressable, View } from '~/components/Base';
import { Row } from '~/components/Grid';
import { FMHeroLogo } from '~/components/FMHero/Logo';
import { ScreenTitle } from '~/components/FMHero/Title';
import { Icon } from '~/components/Icon';

/**
 * Types/Interfaces
*/

interface SideBarProps<PrimaryNavigationProps> {
  logo?: FMHeroLogoType;
  primaryNavigation?: FunctionComponent<PrimaryNavigationProps>;
  primaryNavigationProps?: PrimaryNavigationProps;
  mobileVisible?: boolean;
}

interface ContentHeaderProps<TitleRowProps, SecondaryNavigationProps> {
  title?: string;
  titleRow?: FunctionComponent<TitleRowProps>;
  titleRowClassName?: string;
  titleRowProps?: TitleRowProps;
  backable?: boolean;
  backTo?: string;
  secondaryNavigation?: FunctionComponent<SecondaryNavigationProps>;
  secondaryNavigationProps?: SecondaryNavigationProps;
}

export interface PrimaryLayoutProps<TitleRowProps, PrimaryNavigationProps, SecondaryNavigationProps> {
  title?: string;
  logo?: FMHeroLogoType;
  backable?: boolean;
  backTo?: string;
  titleRow?: FunctionComponent<TitleRowProps>;
  titleRowClassName?: string;
  titleRowProps?: TitleRowProps;
  primaryNavigation?: FunctionComponent<PrimaryNavigationProps>;
  primaryNavigationProps?: PrimaryNavigationProps;
  secondaryNavigation?: FunctionComponent<SecondaryNavigationProps>;
  secondaryNavigationProps?: SecondaryNavigationProps;
  showContentHeader?: boolean;
  children: ReactNode;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function BaseSideBar<PrimaryNavigationProps>(props: SideBarProps<PrimaryNavigationProps>): JSX.Element {
  return (
    <View className={ Css.join(props.mobileVisible ? 'block' : 'hidden lg:block', 'fixed top-0 left-0 w-sidebar-sm h-screen bg-white') }>
      <FMHeroLogo
        type={ props.logo }
        className='w-50p h-auto mx-auto mt-8 mb-16'
      />

      {props.primaryNavigation && (
        createElement(props.primaryNavigation, props.primaryNavigationProps)
      )}
    </View>
  );
}

/**
 * @return {JSX.Element}
 */
function BaseContentHeader<TitleRowProps, SecondaryNavigationProps>(props: ContentHeaderProps<TitleRowProps, SecondaryNavigationProps>): JSX.Element {
  return (
    <Fragment>
      <Row className={ props.titleRowClassName }>
        <ScreenTitle
          title={ props.title }
          backable={ props.backable }
          backTo={ props.backTo }
        />
        {props.titleRow && (
          createElement(props.titleRow, props.titleRowProps)
        )}
      </Row>

      {props.secondaryNavigation && (
        createElement(props.secondaryNavigation, props.secondaryNavigationProps)
      )}
    </Fragment>
  );
}

const SideBar = React.memo(BaseSideBar);
const ContentHeader = React.memo(BaseContentHeader);

/**
 * @return {JSX.Element}
 */
export function PrimaryLayout<
  TitleRowProps = {},
  PrimaryNavigationProps = TailwindProps,
  SecondaryNavigationProps = TailwindProps>
(
  props: PrimaryLayoutProps<TitleRowProps, PrimaryNavigationProps, SecondaryNavigationProps>,
): JSX.Element
{
  /** States **/

  const [ isMobileMenuVisible, setIsMobileMenuVisible ] = useState<boolean>();

  /** Event Handlers **/

  /**
   * @return {void}
   */
  const handlePressShowMobileMenu = (): void => {
    setIsMobileMenuVisible(true);
  };

  /** Output **/

  return (
    <View className='flex flex-auto flex-col bg-fmhero-gray-400'>
      <SideBar
        logo={ props.logo }
        primaryNavigation={ props.primaryNavigation }
        mobileVisible={ isMobileMenuVisible }
      />

      <View className='self-end w-full-less-sidebar-sm'>
        <View className='w-full 2xl:w-xl px-20 py-16'>
          {props.showContentHeader && (
            <ContentHeader
              title={ props.title }
              backable={ props.backable }
              backTo={ props.backTo }
              titleRow={ props.titleRow }
              titleRowClassName={ props.titleRowClassName }
              titleRowProps={ props.titleRowProps }
              secondaryNavigation={ props.secondaryNavigation }
              secondaryNavigationProps={ props.secondaryNavigationProps }
            />
          )}

          <View className={ props.backable ? 'ml-18' : undefined }>
            { props.children }
          </View>
        </View>
      </View>

      <Pressable className='lg:hidden absolute top-4 left-4 leading-none' onPress={ handlePressShowMobileMenu }>
        <Icon
          name='bars'
          className='text-2xl'
        />
      </Pressable>
    </View>
  );
}

PrimaryLayout.defaultProps = {
  logo: FMHeroLogoType.Color,
  titleRowClassName: 'justify-between',
  showContentHeader: true,
};
