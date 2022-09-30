/**
 * Global Imports
*/

import React, { Fragment, MouseEvent, useEffect, useMemo, useState } from 'react';

/**
 * Root Imports
*/

import { Css } from '@util';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { useField } from '~/hooks/Form';
import { useIsMounted } from '~/hooks/Util';

/**
 * Relative Imports
*/

import { FieldProps } from '../Field/Field';
import { LabeledField } from '../Field/LabeledField';
import { Icon } from '~/components/Icon';

/**
 * Types/Interfaces
*/

interface DropdownItemsProps {
  name: string;
  items: Array<DropdownPickerItem>;
}

export type DropdownPickerItem = {
  id: number | string;
  name: string;
};

export interface DropdownPickerProps extends FieldProps<number> {
  name: string;
  label?: string;
  form?: number;
  items: Array<DropdownPickerItem>;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function BaseDropdownItems(props: DropdownItemsProps): JSX.Element {
  return (
    <View className='overflow-hidden mt-3 rounded-lg bg-fmhero-blue-100'>
      {
        props.items.map((item: DropdownPickerItem): JSX.Element => (
          <Text
            key={ item.id }
            id={ props.name + item.id }
            className='px-4 py-2 hover:bg-fmhero-blue-200'
          >
            { item.name }
          </Text>
        ))
      }
    </View>
  );
}

const DropdownItems = React.memo(BaseDropdownItems);

/**
 * @return {JSX.Element}
 */
export function DropdownPicker(props: DropdownPickerProps): JSX.Element {
  /** Hooks **/

  const field = useField<number>(props);
  const isMounted = useIsMounted();

  /** States **/

  const [ isFocused, setIsFocused ] = useState<boolean>();

  /** Memos **/

  const picked: DropdownPickerItem = useMemo((): DropdownPickerItem => {
    return props.items.find(itr => itr.id === field.value);
  }, [ field.value ]);

  const renderedDropdownMenu: JSX.Element = useMemo((): JSX.Element => {
    return (
      <Fragment>
        <View className='absolute top-1/2 right-4 -translate-y-1/2'>
          <Icon name='chevron-down' />
        </View>
        <View className={ 'absolute bottom-0 left-0 w-full text-white translate-y-full opacity-0 ' + (isFocused ? 'opacity-100' : 'pointer-events-none') }>
          <DropdownItems
            name={ props.name }
            items={ props.items }
          />
        </View>
      </Fragment>
    );
  }, [ isFocused ]);

  /** Side-Effects **/

  useEffect((): void => {
    if (isMounted && props.onChangeValue) {
      //props.onChangeValue(picked);
    }
  }, [ picked ]);

  /** Helpers **/

  const className: string = (
    field.error
      ? 'border-red-400 hover:border-red-600'
      : 'border-fmhero-gray-600 hover:border-fmhero-gray-800'
  );

  /** Output **/

  /**
   * @return {void}
   */
  const handlePress = (event: MouseEvent<HTMLElement>): void => {
    const target: HTMLElement = event.target as HTMLElement;
    const value: number = parseInt(target.id.substring(props.name.length));

    if (!isNaN(value)) {
      field.setValue(value);
    }

    setIsFocused((current: boolean): boolean => !current);
  };

  /** Output **/

  return (
    <LabeledField<HTMLInputElement>
      label={ props.label }
      error={ field.error }
      style={ props.style }
      className={ Css.join('cursor-pointer p-4 border rounded-lg', className, props.className) }
      after={ renderedDropdownMenu }
      onPress={ handlePress }
    >
      <Text>
        { picked?.name ?? <Fragment>&nbsp;</Fragment> }
      </Text>
    </LabeledField>
  );
}
