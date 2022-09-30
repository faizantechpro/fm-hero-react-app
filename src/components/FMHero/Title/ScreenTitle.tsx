/**
 * Global Imports
*/

import React, { ReactNode } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

/**
 * Root Imports
*/

import { TailwindProps } from '@util/Tailwind';

/**
 * Local Imports
*/

import { Pressable, Text } from '~/components/Base';
import { Row } from '~/components/Grid';
import { Icon } from '~/components/Icon';

/**
 * Types/Interfaces
*/

export interface ScreenTitleProps extends TailwindProps {
  title: string;
  backable?: boolean;
  backTo?: string;
  children?: ReactNode;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function BaseScreenTitle(props: ScreenTitleProps): JSX.Element {
  /** Hooks **/

  const history = useHistory();

  /** Output **/

  return (
    <Row className='h-12 items-center'>
      {props.backable && !!props.backTo && (
        <Link className='cursor-pointer leading-none mr-16' to={ props.backTo }>
          <Icon
            name='chevron-left'
            className='text-xl'
          />
        </Link>
      )}

      {props.backable && !props.backTo && (
        <Pressable className='cursor-pointer leading-none mr-16' onPress={ history.goBack }>
          <Icon
            name='chevron-left'
            className='text-xl'
          />
        </Pressable>
      )}

      {!!props.title && (
        <Text className='text-2xl font-medium'>
          { props.title }
        </Text>
      )}
    </Row>
  );
}

export const ScreenTitle = React.memo(BaseScreenTitle);
