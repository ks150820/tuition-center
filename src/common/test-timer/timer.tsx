import React from 'react';

import TimerView from './timer-view';
import useTimerViewController from './timer-view-controller';

export interface ITimerProps {
  duration: number;
  timeUpColor: string;
  pauseTimer: boolean;
}

/**
 *
 * @param {number} params.duration overall time of test
 * @param {string} params.timeUpColor this is used when test is about to end
 * @param {boolean} params.pauseTimer to pause the timer
 * @returns
 */
const Timer: React.FunctionComponent<ITimerProps> = ({
  duration,
  timeUpColor,
  pauseTimer,
}) => {
  const {timer, timeSpentStatus} = useTimerViewController({
    duration,
    timeUpColor,
    pauseTimer,
  });

  return (
    <TimerView
      timeUpColor={timeUpColor}
      timer={timer}
      timeSpentStatus={timeSpentStatus}
    />
  );
};
export default Timer;
