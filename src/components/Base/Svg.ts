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

export interface SvgProps extends TailwindProps {
  viewBox?: string;
  children?: ReactNode;
}

/**
 * Components
*/

export class Svg extends Component<SvgProps> {
  constructor(props: SvgProps) {
    super(props);
  }

  /**
   * @return {JSX.Element}
   */
  render(): JSX.Element {
    return createElement('svg', this.props, this.props.children);
  }
}
