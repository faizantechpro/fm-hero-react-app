/**
 * Global Imports
*/

import React, { ReactNode, useEffect, useContext, useState } from 'react';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';

/**
 * Types/Interfaces
*/

export interface ConfirmLogoutProps {
  //
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function ConfirmLogout(props: ConfirmLogoutProps): JSX.Element {
  return (
    <Text>Are you sure you want to logout?</Text>
  );
}
