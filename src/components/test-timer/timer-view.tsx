//styles
import React from 'react';
import {View, Text} from 'react-native';
import {timerStyles} from './test-timer-styles';

interface ITimerViewProps {
  // total: number;
  timer: string;
  timeUpColor: string;
  timeSpentStatus: boolean;
}

/**
 *
 * @param {string} params.timer test time
 * @param {boolean} params.timeSpentStatus true/false, this is for to know whether time is finished or not
 * @returns
 */
const TimerView: React.FunctionComponent<ITimerViewProps> = ({
  timer,
  timeSpentStatus,
}) => {
  return (
    <View>
      <View style={timerStyles?.timerComponent}>
        <Text style={timerStyles?.timeLeftColor}>Time left :</Text>
        <View
          style={
            timeSpentStatus
              ? [timerStyles?.commonTimerGolder, timerStyles.timerHolder]
              : [timerStyles?.commonTimerGolder, timerStyles.timerHiolderExtra]
          }>
          <View>
            <Text
              style={
                timeSpentStatus ? timerStyles.timerExtra : timerStyles.timer
              }>
              {timeSpentStatus ? `- ${timer}` : timer}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TimerView;
