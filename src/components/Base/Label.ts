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

export interface LabelProps extends TailwindProps {
  for?: string;
  children?: ReactNode;
}

/**
 * Components
*/

export class Label extends Component<LabelProps> {
  constructor(props: LabelProps) {
    super(props);
  }

  /**
   * @return {JSX.Element}
   */
  render(): JSX.Element {
    return createElement('label', this.props, this.props.children);
  }
}
