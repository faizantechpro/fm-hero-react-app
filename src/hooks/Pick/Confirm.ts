/**
 * Global Imports
*/

import { FunctionComponent, useContext } from 'react';

/**
 * Global Imports
*/

import { ConfirmContext, ConfirmHandler, CancelHandler } from '~/providers/ConfirmProvider';

/**
 * Types/Interfaces
*/

export interface ConfirmOptions {
  title?: string;
  render: FunctionComponent;
  onConfirm: ConfirmHandler;
  onCancel?: CancelHandler;
}

export interface ConfirmHook {
  title: string;
  isModalVisible: boolean;
  renderer: FunctionComponent;
  show: (options: ConfirmOptions) => void;
  hide: () => void;
  confirm: () => void;
  cancel: () => void;
}

/**
 * Main
*/

/**
 * @return {ConfirmHook}
 */
export function useConfirm(): ConfirmHook {
  /** Hooks **/

  const context = useContext(ConfirmContext);

  /** Helpers **/

  /**
   * @return {void}
   */
  const show = (options: ConfirmOptions): void => {
    context.renderRef.current = options.render;

    context.handleConfirmRef.current = (): void => {
      options.onConfirm();
      context.setIsModalVisible(false);
    };

    context.handleCancelRef.current = (): void => {
      if (options.onCancel) {
        options.onCancel();
      }
      context.setIsModalVisible(false);
    };

    context.setTitle(options.title || options.render.name.replace(/([A-Z])/g, ' $1').slice(1));
    context.setIsModalVisible(true);
  };

  /**
   * @return {void}
   */
  const hide = (): void => {
    context.setIsModalVisible(false);
  };

  /**
   * @return {void}
   */
  const confirm = (): void => {
    if (context.handleConfirmRef.current) {
      context.handleConfirmRef.current();
    }

    hide();
  };

  /**
   * @return {void}
   */
  const cancel = (): void => {
    if (context.handleCancelRef.current) {
      context.handleCancelRef.current();
    }

    hide();
  };

  /** Output **/

  return {
    title: context.title,
    isModalVisible: context.isModalVisible,
    renderer: context.renderRef.current,
    show,
    hide,
    confirm,
    cancel,
  };
}
