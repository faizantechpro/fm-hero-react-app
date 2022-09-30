/**
 * Global Imports
*/

import { Component, createElement } from 'react';

/**
 * Root Imports
*/

import { TailwindProps } from '@util/Tailwind';

/**
 * Types/Interfaces
*/

export interface ImageProps extends TailwindProps {
  alt: string;
  source: string;
}

/**
 * Components
*/

export class Image extends Component<ImageProps> {
  constructor(props: ImageProps) {
    super(props);
  }

  /**
   * @return {JSX.Element}
   */
  render(): JSX.Element {
    const { source, ...props } = this.props;

    return createElement('img',
      Object.assign({}, props, { src: source }),
    );
  }
}
