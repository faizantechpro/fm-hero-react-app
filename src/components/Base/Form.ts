/**
 * Global Imports
*/

import { Component, FormEvent, ReactNode, createElement  } from 'react';

/**
 * Root Imports
*/

import { TailwindProps } from '@util/Tailwind';

/**
 * Types/Interfaces
*/

export interface TextProps extends TailwindProps {
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  children?: ReactNode;
}

/**
 * Components
*/

export class Form extends Component<TextProps> {
  constructor(props:TextProps) {
    super(props);
  }

  render(): ReactNode {
    return createElement('form', this.props, this.props.children);
  }
}
