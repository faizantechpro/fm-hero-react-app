/**
 * Global Imports
*/

import React, { ReactNode } from 'react';

/**
 * Root Imports
*/

import { FMHeroLogoType } from '@config';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { FMHeroLogo } from '~/components/FMHero/Logo';
import { Col } from '~/components/Grid';
import { ScreenTitle } from '~/components/FMHero/Title';

/**
 * Types/Interfaces
*/

export enum UserGuestLayoutMode {
  Welcome, Login, Register, ForgotPassword
}

export interface SideBarProps {
  mode: UserGuestLayoutMode;
}

export interface UserGuestLayoutProps {
  mode: UserGuestLayoutMode;
  title?: string;
  backable?: boolean;
  children: ReactNode;
}

/**
 * Locals
*/

const greetings: Record<UserGuestLayoutMode, string> = {
  [UserGuestLayoutMode.Welcome]: '',
  [UserGuestLayoutMode.Login]: 'A few clicks away from logging into your account',
  [UserGuestLayoutMode.Register]: 'A few clicks away from creating your account',
  [UserGuestLayoutMode.ForgotPassword]: '',
};

const backgrounds: Record<UserGuestLayoutMode, string> = {
  [UserGuestLayoutMode.Welcome]: 'bg-sidebar-welcome',
  [UserGuestLayoutMode.Login]: 'bg-sidebar-login',
  [UserGuestLayoutMode.Register]: 'bg-sidebar-register',
  [UserGuestLayoutMode.ForgotPassword]: 'bg-sidebar-forgot-password',
};

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function SideBar(props: SideBarProps): JSX.Element {
  return (
    <View>
      <FMHeroLogo
        type={ FMHeroLogoType.White }
        className='w-40p h-auto mx-auto mt-20'
      />
      <Text className='mt-24 mx-16 font-work-sans text-3xl text-center text-white'>
        { greetings[props.mode] }
      </Text>
    </View>
  );
}

/**
 * @return {JSX.Element}
 */
export function UserGuestLayout(props: UserGuestLayoutProps): JSX.Element {
  return (
    <Col className='flex-auto'>
      <View className='relative w-xl'>
        <View className={ backgrounds[props.mode] }>
          <SideBar mode={ props.mode } />
        </View>
        <View className='ml-sidebar-lg w-full md:w-sm p-20'>
          <ScreenTitle
            title={ props.title }
            backable={ props.backable }
          />

          { props.children }
        </View>
      </View>
    </Col>
  );
}
