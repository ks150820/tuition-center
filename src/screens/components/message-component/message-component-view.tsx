import React, {ReactElement} from 'react';
import {
  View,
  Text,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

import {COLORS} from '@resources/colors';
import UILoader from '@widgets/ui-loader';
import {styles} from './message-component-style';

/**
 * returns the messages ui
 * @param {any} params.userMessage array of messages sent by the user
 * @param {any} params.flatListRef to initially scroll the chat at the bottom
 * @param {string} getTimeFromDate chat time
 * @returns
 */
const MessageComponentView = ({
  userMessage,
  flatListRef,
  userId,
  isLoading,
  getTimeFromDate,
  loadMore,
}: IMessageComponentViewProps) => {
  /** return right side message component
   * @param {string} params.message user message
   * @param {object} params.componentStyle style for a component
   * @param {object} params.textStyle style for a text
   */
  const MessageWrapper = ({
    message,
    componentStyle,
    textStyle,
  }: IMessageWrapperProps): ReactElement => {
    return (
      <View style={componentStyle}>
        <Text style={textStyle}>{message}</Text>
      </View>
    );
  };

  /**
   *
   * @param {string} params.name name of the user
   * @param {object} params.componentStyle to give the style avatar
   * @returns
   */
  const AvatarWrapper = ({
    name,
    componentStyle,
  }: IAvatarWrapperProps): ReactElement => {
    return (
      <View style={componentStyle}>
        <Text style={[styles.avatarTitle]}>{name.charAt(0)}</Text>
      </View>
    );
  };

  /**
   *
   * @param message sender message
   * @param userId user id
   * @param name user name
   * @param timestamp time of message sent by the user
   * @returns returns the sender message ui
   */
  const LeftMessage = (
    message: string,
    user_Id: string,
    name: string,
    timestamp: any,
  ): ReactElement => {
    return (
      <View style={[styles.leftMessageComponent]}>
        {user_Id !== userId && user_Id !== previousUserId && (
          <View style={styles.avatarComponent}>
            <AvatarWrapper
              name={name}
              componentStyle={[styles.avatar, styles.commonAvatarStyle]}
            />
            <Text style={styles.timeStyle}>
              {getTimeFromDate(Number(timestamp))}
            </Text>
          </View>
        )}
        <MessageWrapper
          message={message}
          componentStyle={
            user_Id !== userId && user_Id !== previousUserId
              ? [styles.leftMessage, styles.commonMessage]
              : [styles.leftFalseMessage, styles.commonMessage]
          }
          textStyle={styles.leftTextColor}
        />
      </View>
    );
  };

  /**
   *
   * @param {string} message user message
   * @returns return the user message component
   */
  const RightMessage = (message: string): ReactElement => {
    return (
      <View style={styles.rightMessageComponent}>
        <MessageWrapper
          message={message}
          componentStyle={[styles.rightMessage, styles.commonMessage]}
          textStyle={styles.rightTextColor}
        />
      </View>
    );
  };

  /**
   * @param item all the messages of particular video id
   */
  const renderItem = (item: flatListItemParams): ReactElement => {
    return (
      <View>
        {item.userId === userId
          ? RightMessage(item.message)
          : LeftMessage(item.message, item.userId, item.name, item.timestamp)}
      </View>
    );
  };

  const HeaderComponent = () => {
    return (
      <View style={styles.headerComponent}>
        {isLoading && <UILoader size="large" color={COLORS.BLUE.space_cadet} />}
      </View>
    );
  };
  // to use the previous user id
  let previousUserId: string = '';
  return (
    <View style={styles.component}>
      <FlatList
        ref={flatListRef}
        keyExtractor={(_item, index) => index + ''}
        data={userMessage}
        ListHeaderComponent={<HeaderComponent />}
        renderItem={({item}: {item: flatListItemParams}) => {
          let response = renderItem(item);
          previousUserId = item.userId;
          return response;
        }}
        showsVerticalScrollIndicator={false}
        // onEndReached={loadMore}
        // onScrollToTop={loadMore}
        onScroll={(event: NativeSyntheticEvent<NativeScrollEvent>) =>
          loadMore(event.nativeEvent.contentOffset.y)
        }
      />
    </View>
  );
};

export default MessageComponentView;
