/**
 * Global Imports
*/

import { createElement, Component, ReactNode } from 'react';

/**
 * Root Imports
*/

import { TailwindProps } from '@util/Tailwind';

/**
 * Types/Interfaces
*/

export interface TextProps extends TailwindProps {
  id?: string;
  children?: ReactNode;
}

/**
 * Components
*/

export class Text extends Component<TextProps> {
  constructor(props:TextProps) {
    super(props);
  }

  render(): ReactNode {
    return createElement('p', this.props, this.props.children);
  }
}
