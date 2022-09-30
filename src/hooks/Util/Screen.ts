/**
 * Global Imports
*/

import { useContext, useEffect } from 'react';

/**
 * Local Imports
*/

import { RouteProps } from '~/components/Router';
import { Breadcrumb, ScreenContext } from '~/providers/ScreenProvider';

/**
 * Types/Interfaces
*/

export type ScreenOptions = {
  title?: string;
  breadcrumbs?: Array<Breadcrumb>;
};

export type ScreenHook = {
  title: string;
  uri: string;
  breadcrumbs: Array<Breadcrumb>;
};

/**
 * Main
*/

/**
 * @return {ScreenHook}
 */
export function useScreen<Params, ContextI = {}>(props?: RouteProps<Params, ContextI>, options?: ScreenOptions): ScreenHook {
  /** Hooks **/

  const context = useContext(ScreenContext);

  /** Side-Effects **/

  useEffect((): void => {
    context.setUri(props?.location?.pathname);

    if (options) {
      if (options.title !== undefined) context.setTitle(options.title);
      if (options.breadcrumbs !== undefined) context.setBreadcrumbs(options.breadcrumbs);
    }
  }, []);

  /** Output **/

  return {
    title: options?.title || context?.title || '',
    breadcrumbs: options?.breadcrumbs || context?.breadcrumbs || [],
    uri: props?.location?.pathname || context?.uri || '/',
  };
}
