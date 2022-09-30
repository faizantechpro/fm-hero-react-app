/**
 * Global Imports
*/

import { Component, ReactNode, createElement } from 'react';

/**
 * Root Imports
*/

import { TailwindProps } from '@util/Tailwind';

/**
 * Types/Interfaces
*/

export interface SpanProps extends TailwindProps {
  children?: ReactNode;
}

/**
 * Components
*/

export class Span extends Component<SpanProps> {
  constructor(props: SpanProps) {
    super(props);
  }

  render(): ReactNode {
    return createElement('span', this.props, this.props.children);
  }
}
