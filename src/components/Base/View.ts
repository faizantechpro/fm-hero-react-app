/**
 * Global Imports
*/

import React, { Component, ReactNode, createElement } from 'react';

/**
 * Root Imports
*/

import { TailwindProps } from '@util/Tailwind';

/**
 * Types/Interfaces
*/

export interface ViewProps extends TailwindProps {
  children?: ReactNode;
}

/**
 * Components
*/

export class View extends Component<ViewProps> {
  constructor(props: ViewProps) {
    super(props);
  }

  render(): ReactNode {
    return createElement('div', this.props, this.props.children);
  }
}
