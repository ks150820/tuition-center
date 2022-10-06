import React from 'react';
import {View, Text, Pressable, FlatList} from 'react-native';

import UIBottomSheet from '@widgets/ui-bottom-sheet';
import UIIcon from '@widgets/ui-icon';
import {summaryStyle} from './summary-style';
import UIButton from '@widgets/ui-btn';
import {COLORS} from '@resources/colors';

interface statusDataTypes {
  text: string;
  number: number;
}

type ISummaryType = () => void;
interface ISummaryViewProps {
  isVisible: boolean;
  seconds: number;
  timeUp: boolean;
  statusData: statusDataTypes[];
  toggleBottomSheet: ISummaryType;
  handleSubmitButton: ISummaryType;
}

/**
 *
 * @param {statusDataTypes[]} params.statusData status of all the questions
 * @param {boolean} params.isVisible condition to open and close to bottom sheet
 * @param {number} params.seconds time up seconds to close the bottom sheet
 * @param {boolean} params.timeUp this will true when time will finish, if this is true submit and close will not be visible
 * @param {ISummaryType} params.toggleBottomSheet callback method to handle bottom sheet
 * @param {ISummaryType} params.handleSubmitButton callback to call the submit button, after pressing this button will go to the home screen
 * @returns
 */
const SummaryView = ({
  statusData,
  isVisible,
  seconds,
  timeUp,
  toggleBottomSheet,
  handleSubmitButton,
}: ISummaryViewProps) => {
  const Footer = () => {
    const style = {
      btnElementWrapper: summaryStyle?.btn,
    };
    return (
      <View style={summaryStyle?.footerComponent}>
        <UIButton
          btnText="Cancel"
          color={COLORS.RED.venetian_red}
          styles={style}
          disabled={false}
          onPress={toggleBottomSheet}
        />
        <UIButton
          btnText="Submit"
          color={COLORS.RED.venetian_red}
          styles={style}
          disabled={false}
          onPress={handleSubmitButton}
        />
      </View>
    );
  };
  const ListHeaderComponent = () => {
    return (
      <View style={summaryStyle?.headerComponent}>
        <Text style={summaryStyle?.headerTitle}>Test Summary</Text>
        <Text style={summaryStyle?.headerSubheading}>
          Your test have been successfully saved. Please take a moment to review
          this summary
        </Text>
      </View>
    );
  };

  /**
   *
   * @param item questions status details
   * @returns ui of all questions status
   */
  const renderItem = (item: statusDataTypes) => {
    return (
      <View style={summaryStyle?.renderItemComponent}>
        <View>
          <Text style={summaryStyle?.renderItemTitleText}>{item?.text}</Text>
        </View>
        <View>
          <View style={summaryStyle?.renderItemNumberComponent}>
            <Text style={summaryStyle?.renderItemNumberText}>
              {item?.number}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  /**
   *
   * @returns dead time, when test time will finish then this timer will show to auto submit the test after 5 seconds
   */
  const Timer = () => {
    return (
      <View style={summaryStyle?.timerComponent}>
        <UIIcon
          type="ionicon"
          name="timer-outline"
          size={30}
          color={COLORS.RED.venetian_red}
        />
        <Text style={summaryStyle?.timerText}>
          Test will auto submit in 5 seconds
        </Text>
        {seconds > 0 ? (
          <Text style={summaryStyle?.timerText}>00 : 0{seconds}</Text>
        ) : (
          <Text style={summaryStyle?.timerText}>00 : 00</Text>
        )}
      </View>
    );
  };
  return (
    <UIBottomSheet
      visible={isVisible}
      height="80%"
      animationIn="slideInUp"
      animationOut="slideOutDown"
      swipeDirection="down"
      borderTopRadius={10}
      onBackDropPress={toggleBottomSheet}
      onBackButtonPress={toggleBottomSheet}>
      <View style={summaryStyle?.component}>
        <Pressable onPress={toggleBottomSheet} testID="downIcon">
          <UIIcon name="chevron-down" style={summaryStyle?.icon} />
        </Pressable>
        <FlatList
          keyExtractor={(_item, index) => index + ''}
          data={statusData}
          ListHeaderComponent={<ListHeaderComponent />}
          renderItem={({item}: {item: statusDataTypes}) => renderItem(item)}
          ListFooterComponent={() => <View style={summaryStyle?.divider} />}
        />
        {timeUp ? <Timer /> : <Footer />}
      </View>
    </UIBottomSheet>
  );
};

export default SummaryView;
