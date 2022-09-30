/**
 * Global Imports
*/

import React, { Fragment, useContext, useEffect, useMemo, useState } from 'react';

/**
 * Root Imports
*/

import { Css } from '@util';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { FlashContext, FlashMessage, FlashMessages } from '~/providers/FlashProvider';
import { useIsMounted } from '~/hooks/Util';

/**
 * Types/Interfaces
*/

interface Message {
  uid: number;
  ttl: number;
  content: string;
  className: string;
}

interface FlashOverlayMessagesProps {
  messages: FlashMessages;
}

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function Message(props: Message): JSX.Element {
  /** Hooks **/

  const context = useContext(FlashContext);
  const isMounted = useIsMounted();

  /** States **/

  const [ opacityClassName, setOpacityClassName ] = useState<string>();

  /** Side-Effects **/

  useEffect((): void => {
    setOpacityClassName(' opacity-100');
  }, []);

  useEffect((): void => {
    if (isMounted) {
      if (opacityClassName) {
        setTimeout((): void => setOpacityClassName(null), props.ttl + 256); // Add 256ms to account for CSS transition
      } else {
        setTimeout(handleExpired, 256);
      }
    }
  }, [ opacityClassName ]);

  /** Event Handlers **/

  /**
   * @return {void}
   */
  const handleExpired = (): void => {
    delete context.messagesRef.current[props.uid];

    context.setFlushCount((current: number): number => {
      return (current || 0) + 1;
    });
  };

  /** Output **/

  return (
    <Text className={ props.className + (opacityClassName || ' opacity-0') }>
      { props.content }
    </Text>
  );
}

/**
 * @return {JSX.Element}
 */
function FlashOverlayMessages(props: FlashOverlayMessagesProps): JSX.Element {
  return (
    <Fragment>
      {
        Object.entries(props.messages).map(([, message], index: number): JSX.Element => (
          <Message
            key={ message.uid }
            uid={ message.uid }
            ttl={ message.ttl }
            content={ message.content }
            className={ Css.join('flash-message inline-block px-4 py-2 rounded-full', message.className, index > 0 && 'mt-4') }
          />
        ))
      }
    </Fragment>
  );
}

FlashOverlayMessages.defaultProps = {
  messages: [],
};

/**
 * @return {JSX.Element}
 */
export function FlashOverlay(): JSX.Element {
  /** Hooks **/

  const context = useContext(FlashContext);

  /** Renderers **/

  /**
   * @return {JSX.Element}
   */
  const renderMessages = (): JSX.Element => (
    <FlashOverlayMessages messages={ context.messagesRef.current } />
  );

  /** Output **/

  return (
    <View className='flex flex-col items-center w-full mt-8'>
      { useMemo(renderMessages, [context.flushCount]) }
    </View>
  );
}
