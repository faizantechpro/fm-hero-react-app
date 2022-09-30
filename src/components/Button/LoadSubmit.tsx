/**
 * Global Imports
*/

import React, { MouseEvent } from 'react';

/**
 * Relative Imports
*/

import { LoadButton, LoadButtonProps } from './LoadButton';

/**
 * Types/Interfaces
*/

export interface LoadSubmitProps extends Omit<LoadButtonProps, 'type' | 'onPress'> {
  onPress?: (event: MouseEvent<HTMLButtonElement>) => void | Promise<void>;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function LoadSubmit(props: LoadSubmitProps): JSX.Element {
  return (
    <LoadButton
      type='submit'
      loading={ props.loading }
      disabled={ props.disabled }
      style={ props.style }
      className={ props.className }
      onPress={ props.onPress }
    >
      { props.children }
    </LoadButton>
  );
}

LoadSubmit.defaultProps = {
  loading: false,
};
