/**
 * Global Imports
*/

import { useContext } from 'react';

/**
 * Local Imports
*/

import { FlashContext, FlashMessage } from '~/providers/FlashProvider';

/**
 * Types/Interfaces
*/

export interface FlashHook {
  error: (content: string) => void;
  message: (content: string) => void;
}

/**
 * Main
*/

/**
 * @return {FlashHook}
 */
export function useFlash(): FlashHook {
  /** Hooks **/

  const context = useContext(FlashContext);

  /** Functions **/

  /**
   * @return {void}
   */
  const push = (content: string, className: string, ttl: number): void => {
    let uid: number = performance.now();

    while (context.messagesRef.current && uid in context.messagesRef.current) {
      uid++;
    }

    const flashMessage: FlashMessage = {
      content,
      className,
      ttl,
      uid,
    };

    if (context.messagesRef.current) {
      context.messagesRef.current[uid] = flashMessage;
    } else {
      context.messagesRef.current = { [uid]: flashMessage };
    }

    context.setFlushCount((current: number): number => {
      return (current || 0) + 1;
    });
  };

  /**
   * @return {void}
   */
  const error = (content: string): void => {
    push(content, 'text-white bg-red-400', 3000);
  };

  /**
   * @return {void}
   */
  const message = (content: string): void => {
    push(content, 'text-white bg-fmhero-green-400', 3000);
  };

  /** Output **/

  return {
    error,
    message,
  };
}
