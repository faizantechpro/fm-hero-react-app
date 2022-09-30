/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { View } from '~/components/Base';
import { Button, ButtonProps } from '~/components/Base/Button';

/**
 * Types/Interfaces
*/

export interface LoadButtonProps extends ButtonProps {
  loading: boolean;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function LoadButton(props: LoadButtonProps): JSX.Element {
  return (
    <Button
      type={ props.type }
      disabled={ props.disabled || props.loading }
      style={ props.style }
      className={ ((props.className || '') + (props.loading ? ' loading' : '')) || undefined }
      onPress={ props.onPress }
    >
      <View className={ props.loading ? 'opacity-0' : undefined }>
        { props.children }
      </View>
    </Button>
  );
}

LoadButton.defaultProps = {
  loading: false,
};
