import {useCallback, useContext, useEffect, useRef, useState} from 'react';

import LiveChatContext from '@components/contexts/live-chat-context';
import {FlatList, Keyboard} from 'react-native';

const useMessageComponentController = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);
  const {messageResponse, userId, isLoading, handlePagination} = useContext(
    LiveChatContext,
  ) as liveChatContext;

  const flatListRef = useRef<FlatList>(null);

  const pad = (num: number) => ('0' + num).slice(-2); // or use padStart

  /**
   *
   * @param {number} timestamp user message time
   * @returns returns the converted timestamp to readable time in hh:mm
   */
  const getTimeFromDate = (timestamp: number) => {
    const date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return pad(hours) + ':' + pad(minutes);
  };

  /**
   * used to scroll the message component to bottom
   */
  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({
        animated: true,
      });
    }, 300);
  }, [flatListRef]);

  useEffect(() => {
    scrollToBottom();
  }, [isKeyboardVisible, scrollToBottom]);

  useEffect(() => {
    if (messageResponse.length < 26) {
      scrollToBottom();
    }
  }, [messageResponse, isKeyboardVisible, scrollToBottom]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );

    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);

  const loadMoreMessageEvent = (distanceFromTop: number) => {
    distanceFromTop === 0 && handlePagination();
  };

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  return {
    messageResponse,
    flatListRef,
    userId,
    isLoading,
    getTimeFromDate,
    loadMoreMessageEvent,
  };
};

export default useMessageComponentController;
