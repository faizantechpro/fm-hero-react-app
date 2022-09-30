/**
 * Global Imports
*/

import React from 'react';

/**
 * Root Imports
*/

import { TailwindProps } from '@util/Tailwind';

/**
 * Local Imports
*/

import { View } from '~/components/Base';

/**
 * Types/Interfaces
*/

export interface ActivityIndicatorProps extends TailwindProps {
  enabled?: boolean;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function ActivityIndicator(props: ActivityIndicatorProps): JSX.Element {
  return props.enabled && <View className='loading' />;
}

ActivityIndicator.defaultProps = {
  enabled: true,
};
