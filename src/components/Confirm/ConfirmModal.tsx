/**
 * Global Imports
*/

import React, { createElement, useContext, useMemo } from 'react';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { Modal } from '~/components/Modal';
import { Row } from '~/components/Grid';
import { ColorButton } from '~/components/FMHero/Button';
import { ConfirmContext } from '~/providers/ConfirmProvider';

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function ConfirmModal(): JSX.Element {
  /** Hooks **/

  const context = useContext(ConfirmContext);

  /** Helpers **/

  const rendered = useMemo((): JSX.Element => (
    <Modal visible={ context.isModalVisible }>
      <View className='w-96 p-6 rounded-lg bg-white shadow-lg'>
        <Text className='font-bold'>
          { context.title }
        </Text>

        <View className='my-2 text-fmhero-gray-800'>
          {typeof context.renderRef.current === 'function' && (
            createElement(context.renderRef.current)
          )}
        </View>

        <Row className='justify-between mt-3'>
          <ColorButton
            label='Cancel'
            color='bg-fmhero-gray-600'
            onPress={ context.handleCancelRef.current }
          />
          <ColorButton
            label='Confirm'
            color='bg-fmhero-blue-600'
            onPress={ context.handleConfirmRef.current }
          />
        </Row>
      </View>
    </Modal>
  ), [ context.isModalVisible ]);

  /** Output **/

  return rendered;
}
