/**
 * Global Imports
*/

import React, { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';

/**
 * Local Imports
*/

import { View } from '~/components/Base';
import { UserGuard } from '~/components/Guard';
import { ConfirmModal } from '~/components/Confirm';
import { FlashOverlay } from '~/components/Flash';
import {
  AppProvider,
  AuthProvider,
  ConfirmProvider,
  FlashProvider,
  FormProvider,
  MemoryProvider,
  ScreenProvider,
  UserProvider } from '~/providers';

/**
 * Types/Interfaces
*/

export interface EntryPointProps {
  LoadingRouter: FunctionComponent;
  GuestRouter: FunctionComponent;
  UnidentifiedRouter: FunctionComponent;
  IdentifiedRouter: FunctionComponent;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function Overlay(): JSX.Element {
  return (
    <View className='fixed top-0 left-0 flex w-full'>
      <ConfirmModal />
      <FlashOverlay />
    </View>
  );
}

/**
 * @return {JSX.Element}
 */
export function EntryPoint(props: EntryPointProps): JSX.Element {
  return (
    <AppProvider>
      <AuthProvider>
        <UserProvider>
          <FormProvider>
            <MemoryProvider>
              <FlashProvider>
                <ConfirmProvider>
                  <ScreenProvider>
                    <BrowserRouter>
                      <UserGuard
                        loading={ props.LoadingRouter }
                        guest={ props.GuestRouter }
                        unidentified={ props.UnidentifiedRouter }
                        identified={ props.IdentifiedRouter }
                      />
                    </BrowserRouter>
                  </ScreenProvider>
                  <Overlay />
                </ConfirmProvider>
              </FlashProvider>
            </MemoryProvider>
          </FormProvider>
        </UserProvider>
      </AuthProvider>
    </AppProvider>
  );
}
