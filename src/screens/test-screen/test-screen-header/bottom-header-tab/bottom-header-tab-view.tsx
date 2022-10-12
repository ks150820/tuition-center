import React from 'react';
import {View, Text} from 'react-native';

import Timer from '@components/test-timer';
import {COLORS} from '@resources/colors';
import {bottomHeaderStyle} from './bottom-header-tab-style';

interface IBottomHeaderTabViewProps {
  questionIndex: number;
  totalQuestions: number;
  pauseTimer: boolean;
  testDuration: number;
}

/**
 *
 * @param {number} params.questionIndex this is used to display the question number
 * @param {number} params.totalQuestions the total questions number on a particular sections
 * @param {boolean} params.pauseTimer this is use to pause the timer
 * @param {number} params.testDuration total test time
 * @returns
 */
const BottomHeaderTabView = ({
  questionIndex,
  totalQuestions,
  pauseTimer,
  testDuration,
}: IBottomHeaderTabViewProps) => {
  return (
    <View style={bottomHeaderStyle?.component}>
      <View style={bottomHeaderStyle?.questionsNoComponent}>
        <Text style={bottomHeaderStyle?.textColor}>
          Questions {questionIndex} of {totalQuestions}
        </Text>
      </View>
      {testDuration && (
        <Timer
          duration={testDuration}
          timeUpColor={COLORS.RED.red}
          pauseTimer={pauseTimer}
        />
      )}
    </View>
  );
};

export default BottomHeaderTabView;
