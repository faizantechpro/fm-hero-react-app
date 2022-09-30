/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { Router } from '~/components/Router';
import {
  ShowEmailSettings,
  ShowPasswordSettings } from '~/app/admin/screens/identified/Settings';

/**
 * Locals
*/

const routes = [
  {
    path: '/email',
    group: 'settings',
    component: ShowEmailSettings,
  },
  {
    path: '/password',
    group: 'settings',
    component: ShowPasswordSettings,
  },
  {
    path: '',
    group: 'settings',
    component: ShowEmailSettings,
  },
];

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function SettingsRouter(): JSX.Element {
  return (
    <Router routes={ routes } />
  );
}
