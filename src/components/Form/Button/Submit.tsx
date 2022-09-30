/**
 * Global Imports
*/

import React from 'react';

/**
 * Local Imports
*/

import { Button } from '~/components/Base';

/**
 * Types/Interfaces
*/

export interface SubmitProps {
  label: string;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function Submit(props: SubmitProps): JSX.Element {
  return (
    <Button type='submit'>
      { props.label }
    </Button>
  );
}
