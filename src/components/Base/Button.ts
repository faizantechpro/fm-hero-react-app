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

export interface ButtonProps extends TailwindProps {
  type?: 'button' | 'submit';
  disabled?: boolean;
  children?: ReactNode;
  onPress?: (event: MouseEvent<HTMLButtonElement>) => void | Promise<void>;
}

/**
 * Components
*/

export class Button extends Component<ButtonProps> {
  static defaultProps = {
    type: 'button',
    disabled: false,
  };

  constructor(props: ButtonProps) {
    super(props);
  }

  /**
   * @return {JSX.Element}
   */
  render(): JSX.Element {
    const { onPress, ...props } = this.props;

    return createElement('button',
      Object.assign({}, props, {
        onClick: props.disabled ? undefined : onPress,
      }),
    );
  }
}
