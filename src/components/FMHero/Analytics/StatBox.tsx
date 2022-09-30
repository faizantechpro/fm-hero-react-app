/**
 * Global Imports
*/

import React, { ReactNode } from 'react';

/**
 * Root Imports
*/

import { TailwindProps } from '@util/Tailwind';

/**
 * Local Imports
*/

import { Text } from '~/components/Base';
import { Col } from '~/components/Grid';

/**
 * Types/Interfaces
*/

export interface StatBoxProps extends TailwindProps {
  title: string;
  value: number;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function BaseStatBox(props: StatBoxProps): JSX.Element {
  return (
    <Col
      style={ props.style }
      className={ 'justify-between p-4 rounded-lg bg-white' + (props.className ? (' ' + props.className) : '') }
    >
      <Text className='text-lg font-medium'>
        { props.title }
      </Text>
      <Text className='text-4xl'>
        { props.value.toLocaleString() }
      </Text>
    </Col>
  );
}

BaseStatBox.defaultProps = {
  className: 'w-full lg:w-1/2-2 mt-4 lg:mt-0',
};

export const StatBox = React.memo(BaseStatBox);
