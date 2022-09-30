/**
 * Global Imports
*/

import { CSSProperties } from 'react';

/**
 * Types/Interfaces
*/

export type TailwindClassNames = string | Array<string> | Array<TailwindClassNames>;

export interface TailwindProps {
  style?: CSSProperties;
  className?: string;
  tailwind?: TailwindClassNames;
}
