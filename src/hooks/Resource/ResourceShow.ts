/**
 * Global Imports
*/

import { Context, useContext, useEffect, useMemo } from 'react';

/**
 * Root Imports
*/

import { Authorization, ResourceIdentity, ShowRequestPayload } from '@util/Api';

/**
 * Local Imports
*/

import { ResourceIndexContextInterface } from '~/providers/ResourceIndexProvider';

/**
 * Types/Interfaces
*/

export interface Service<Model, Attributes> {
  show: (which: ResourceIdentity, data?: ShowRequestPayload, auth?: Authorization) => Promise<Model>;
}

export interface ResourceShowHook<Model> {
  resource: Model;
}

/**
 * Main
*/

/**
 * @return {ResourceShowHook}
 */
export function useResourceShow<Model extends ResourceIdentity, Attributes>(
  context: Context<ResourceIndexContextInterface<Model>>,
  match: Record<keyof Model, string>,
  service: Service<Model, Attributes>,
): ResourceShowHook<Model>
{
  /** Hooks **/

  const index = useContext(context);

  /** Helpers **/

  const resource: Model = useMemo((): Model => {
    if ((index.one?.id || '').toString() === match.id) {
      return index.one;
    } else if (!index.resources) {
      return null;
    }

    let i: number = index.resources.length;

    while (i--) {
      if ((index.resources[i].id || '').toString() === match.id) {
        return index.resources[i];
      }
    }
  }, [ match.id, index.one ]);

  /** Side-Effects **/

  useEffect((): void => {
    service.show(match).then(index.setOne);
  }, []);

  /** Output **/

  return {
    resource,
  };
}
