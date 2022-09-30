/**
 * Global Imports
*/

import React, { Fragment, FunctionComponent, useMemo } from 'react';
import { Link } from 'react-router-dom';

/**
 * Root Imports
*/

import { Str } from '@util';
import { ResourceIdentity } from '@util/Api';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { Row } from '~/components/Grid';
import { Icon } from '~/components/Icon';
import { PaginateOffset } from '~/hooks/Util/Paginate';

/**
 * Types/Interfaces
*/

export type ResourceTableCol<Model> = {
  className: string;
  fieldName: keyof Model;
};

export type ResourceTableCols<Model> = Record<string, ResourceTableCol<Model>>;

type HeaderProps<Model> = {
  cols: ResourceTableCols<Model>;
};

type MemoizedHeader<Model> = React.MemoExoticComponent<FunctionComponent<HeaderProps<Model>>>;

type Entries<Model> = [string, ResourceTableCol<Model>][];

export type ResourceTableProps<Model> = {
  cols: ResourceTableCols<Model>;
  items: Array<Model>;
  offset?: PaginateOffset;
  linkTo?: string;
  loading?: boolean;
};

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function BaseHeader<Model>(props: HeaderProps<Model>): JSX.Element {
  return (
    <Row>
      {
        Object.entries(props.cols).map(([header, col], index: number): JSX.Element => (
          <Text
            key={ index }
            className={ col.className + ' px-4 py-4 text-fmhero-gray-800' }
          >
            { header }
          </Text>
        ))
      }
    </Row>
  );
}

const Header = React.memo(BaseHeader);

/**
 * @return {JSX.Element}
 */
export function ResourceTable<Model extends ResourceIdentity>(props: ResourceTableProps<Model>): JSX.Element {
  /** Helpers **/

  const HeaderComponent: MemoizedHeader<Model> = Header as MemoizedHeader<Model>;

  /** Memos **/

  const entries: Entries<Model> = useMemo((): Entries<Model> => {
    return Object.entries(props.cols);
  }, [ props.cols ]);

  const sliced: Array<Model> = useMemo((): Array<Model> => {
    if (props.loading) {
      return Array.from(Array(props.offset[1]).keys()).map((): Model => ({} as Model));
    }
    return (props.items || []).slice(props.offset[0], props.offset[1]);
  }, [ props.offset ]);

  /** Output  **/

  return (
    <View className='resource-table'>
      <HeaderComponent
        cols={ props.cols }
      />
      <View className='resource-table-rows'>
        {
          sliced.map((item, index: number): JSX.Element => (
            <Row
              key={ index }
              className={ 'resource-table-row overflow-hidden mt-2 first:mt-0 rounded-lg bg-white' + (props.loading ? ' loading' : '') }
            >
              <Row className='flex-auto'>
                {
                  entries.map(([, col], index: number): JSX.Element => (
                    <Text
                      key={ index }
                      className={ col.className + ' px-4 py-4 text-black' }
                    >
                      { item[col.fieldName] || <Fragment>&nbsp;</Fragment> }
                    </Text>
                  ))
                }
              </Row>
              <Link
                to={ Str.finish(props.linkTo, '/') + item.id }
                className='flex flex-col justify-center items-center w-32px px-8 hover:bg-fmhero-white-400'
              >
                <Icon name='chevron-right' />
              </Link>
            </Row>
          ))
        }
      </View>
    </View>
  );
}

ResourceTable.defaultProps = {
  items: [],
};
