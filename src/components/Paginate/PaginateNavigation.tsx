/**
 * Global Imports
*/

import React, { Fragment } from 'react';

/**
 * Root Imports
*/

import { PaginateConfig } from '@config';
import { TailwindProps } from '@util/Tailwind';

/**
 * Local Imports
*/

import { Pressable, Text } from '~/components/Base';
import { Row } from '~/components/Grid';
import { Icon } from '../Icon';

/**
 * Types/Interfaces
*/

export type PaginateClassNames = {
  containerActiveClassName?: string;
  containerInactiveClassName?: string;
  textActiveClassName?: string;
  textInactiveClassName?: string;
  separatorClassName?: string;
};

interface SeparatorProps {
  visible: boolean;
  separator: string;
  className?: string;
}

interface PageNumberProps extends PaginateClassNames {
  page: number;
  active: boolean;
  separatorLeft?: string;
  separatorRight?: string;
  onPress: (page: number) => void | Promise<void>;
}

export interface PaginateNavigationProps extends PaginateClassNames, TailwindProps {
  current: number;
  total: number;
  visibleBeforeBreak?: number;
  separator?: string;
  onNavigate: (page: number) => void | Promise<void>;
}

/**
 * Locals
*/

/**
 * @return {JSX.Element}
 */
function Separator(props: SeparatorProps): JSX.Element {
  return props.visible && <Text className={ props.className }>{ props.separator }</Text>;
}

/**
 * @return {JSX.Element}
 */
function BasePageNumber(props: PageNumberProps): JSX.Element {
  /** Event Handlers **/

  /**
   * @return {void}
   */
  const handlePress = (): void => {
    props.onPress(props.page);
  };

  /** Output **/

  return (
    <Fragment>
      <Separator
        visible={ !!props.separatorLeft }
        separator={ props.separatorLeft }
        className={ props.separatorClassName }
      />
      <Pressable
        className={ props.active ? props.containerActiveClassName : props.containerInactiveClassName }
        onPress={ handlePress }
      >
        <Text className={ props.active ? props.textActiveClassName : props.textInactiveClassName }>
          { props.page + 1 }
        </Text>
      </Pressable>
      <Separator
        visible={ !!props.separatorRight }
        separator={ props.separatorRight }
        className={ props.separatorClassName }
      />
    </Fragment>
  );
}

const PageNumber = React.memo(BasePageNumber);

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function BasePaginateNavigation(props: PaginateNavigationProps): JSX.Element {
  /** Helpers **/

  const firstPivot = Math.floor(props.visibleBeforeBreak / 2);
  const lastPivot = Math.floor(props.total - (props.visibleBeforeBreak / 2));
  const visibleCount = props.total > props.visibleBeforeBreak ? props.visibleBeforeBreak : props.total;
  const offset = (props.current < firstPivot) ? 0
    : (props.current < lastPivot)
      ? (props.current - firstPivot)
      : (props.total - props.visibleBeforeBreak);

  /** Event Handlers **/

  /**
   * @return {void}
   */
  const handlePressLeft = (): void => {
    if (props.current > 0) {
      props.onNavigate(props.current - 1);
    }
  };

  /**
   * @return {void}
   */
  const handlePressRight = (): void => {
    if (props.current < (props.total-1)) {
      props.onNavigate(props.current + 1);
    }
  };

  /** Output **/

  return (
    <Row
      style={ props.style }
      className={ 'justify-center items-center' + (props.className ? (' ' + props.className) : '') }
    >
      <Pressable className='cursor-pointer mr-16' onPress={ handlePressLeft }>
        <Icon
          name='chevron-left'
        />
      </Pressable>

      {props.current > firstPivot && (
        <PageNumber
          page={ 0 }
          active={ props.current === 0 }
          separatorRight={ props.separator }
          containerActiveClassName={ props.containerActiveClassName }
          containerInactiveClassName={ props.containerInactiveClassName }
          textActiveClassName={ props.textActiveClassName }
          textInactiveClassName={ props.textInactiveClassName }
          separatorClassName={ props.separatorClassName }
          onPress={ props.onNavigate }
        />
      )}

      {Array.from(Array(visibleCount).keys()).map((page: number, index: number): JSX.Element => (
        <PageNumber
          key={ index }
          page={ page + offset }
          active={ props.current === (page + offset) }
          containerActiveClassName={ props.containerActiveClassName }
          containerInactiveClassName={ props.containerInactiveClassName }
          textActiveClassName={ props.textActiveClassName }
          textInactiveClassName={ props.textInactiveClassName }
          separatorClassName={ props.separatorClassName }
          onPress={ props.onNavigate }
        />
      ))}

      {props.total > props.visibleBeforeBreak && props.current < lastPivot && (
        <PageNumber
          page={ props.total - 1 }
          active={ props.current === (props.total - 1) }
          separatorLeft={ props.separator }
          containerActiveClassName={ props.containerActiveClassName }
          containerInactiveClassName={ props.containerInactiveClassName }
          textActiveClassName={ props.textActiveClassName }
          textInactiveClassName={ props.textInactiveClassName }
          separatorClassName={ props.separatorClassName }
          onPress={ props.onNavigate }
        />
      )}

      <Pressable className='cursor-pointer ml-16' onPress={ handlePressRight }>
        <Icon
          name='chevron-right'
        />
      </Pressable>
    </Row>
  );
}

BasePaginateNavigation.defaultProps = {
  visibleBeforeBreak: PaginateConfig.stride,
  separator: '…',
};

export const PaginateNavigation = React.memo(BasePaginateNavigation);
