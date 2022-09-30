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

/**
 * Types/Interfaces
*/

export interface AdminGuestLayoutProps {
  children: ReactNode;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function SideBar(): JSX.Element {
  return (
    <View>
      <FMHeroLogo
        type={ FMHeroLogoType.Color }
        className='w-40p h-auto mx-auto mt-20'
      />
      <Text className='mt-24 mx-16 font-work-sans text-center text-3xl text-black'>
        Login for setting up your admin functions
      </Text>
    </View>
  );
}

/**
 * @return {JSX.Element}
 */
export function AdminGuestLayout(props: AdminGuestLayoutProps): JSX.Element {
  return (
    <View className='flex flex-auto flex-column'>
      <View className='relative w-xl'>
        <View className='bg-admin-sidebar-login'>
          <SideBar />
        </View>
        <View className='ml-sidebar-lg w-full md:w-sm p-20'>
          { props.children }
        </View>
      </View>
    </View>
  );
}
