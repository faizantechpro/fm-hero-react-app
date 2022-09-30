/**
 * Global Imports
*/

import React, { FunctionComponent, ReactNode } from 'react';

/**
 * Root Imports
*/

import { TailwindProps } from '@util/Tailwind';

/**
 * Local Imports
*/

import { Text } from '~/components/Base';

/**
 * Types/Interfaces
*/

export interface LabelProps extends TailwindProps {
  label: string | FunctionComponent;
  htmlFor?: string;
  error?: Array<string>;
  children?: ReactNode;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function BaseLabel(props: LabelProps): JSX.Element {
  return (
    <label
      htmlFor={ props.htmlFor }
      style={ props.style }
      className={ props.className }
    >
      {typeof props.label === 'string' && (
        <Text className={ props.error ? 'text-red-400' : 'text-fmhero-gray-800' }>
          { props.label }
        </Text>
      )}

      {typeof props.label === 'function' && (
        <props.label />
      )}

      { props.children }
    </label>
  );
}

export const Label = React.memo(BaseLabel);
