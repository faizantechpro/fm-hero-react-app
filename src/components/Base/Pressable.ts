/**
 * Global Imports
*/

import { Component, ReactNode, MouseEvent, createElement } from 'react';

/**
 * Root Imports
*/

import { TailwindProps } from '@util/Tailwind';

/**
 * Types/Interfaces
*/

export interface PressableProps<Element> extends TailwindProps {
  htmlElement?: 'div' | 'button';
  children?: ReactNode;
  onPress?: (event: MouseEvent<Element>) => void | Promise<void>;
}

/**
 * Components
*/

export class Pressable<Element> extends Component<PressableProps<Element>> {
  static defaultProps = {
    htmlElement: 'div',
  };

  constructor(props: PressableProps<Element>) {
    super(props);
  }

  /**
   * @return {JSX.Element}
   */
  render(): JSX.Element {
    const { htmlElement, onPress, ...props } = this.props;

    return createElement(htmlElement,
      Object.assign({}, props, { onClick: onPress }),
    );
  }
}
