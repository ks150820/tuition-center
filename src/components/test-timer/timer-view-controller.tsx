import {useState, useRef, useEffect} from 'react';
interface ITimerViewControllerProps {
  duration: number;
  timeUpColor: string;
  pauseTimer: boolean;
}
// interface RefCounted {
//   ref(): this;
//   unref(): this;
// }
// interface Timer extends RefCounted {
//   hasRef(): boolean;
//   refresh(): this;
//   [Symbol.toPrimitive](): number;
// }
/**
 * View Controller for Timer
 * @param {number} duration total test time
 * @returns
 */
const useTimerViewController = ({duration}: ITimerViewControllerProps) => {
  const Ref = useRef<null | number>(null);
  const [timer, setTimer] = useState<string>('00:00:00');
  const [timeSpentStatus, setTimeSpentStatus] = useState<boolean>(false);
  /**
   * @param dateEvent
   * @getTimeRemaining  Calculates the duration of the test and updates every second as time passes.
   */
  const getTimeRemaining = (dateEvent: Date) => {
    const remainingSeconds =
      (dateEvent.getTime() - new Date().getTime()) / 1000;
    const seconds = Math.floor(remainingSeconds % 60);
    const minutes = Math.floor((remainingSeconds / 60) % 60);
    const hours = Math.floor(remainingSeconds / (60 * 60));
    return {
      remainingSeconds,
      hours,
      minutes,
      seconds,
    };
  };
  /**
   * @param dateEvent
   * @clearTimer receives the timerEvent from clearTimer and parse it in hour minute second format
   */
  const startTimer = (dateEvent: Date) => {
    let {remainingSeconds, hours, minutes, seconds} =
      getTimeRemaining(dateEvent);
    if (remainingSeconds >= 0) {
      setTimer(
        (hours > 9 ? hours : '0' + hours) +
          ':' +
          (minutes > 9 ? minutes : '0' + minutes) +
          ':' +
          (seconds > 9 ? seconds : '0' + seconds),
      );
    } else {
      setTimer(
        (Math.abs(hours) < 10
          ? `0${Math.abs(hours + 1)}`
          : Math.abs(hours + 1)) +
          ':' +
          (Math.abs(minutes) < 10
            ? `0${Math.abs(minutes + 1)}`
            : Math.abs(minutes + 1)) +
          ':' +
          (Math.abs(seconds) < 10
            ? `0${Math.abs(seconds)}`
            : Math.abs(seconds)),
      );
      setTimeSpentStatus(!timeSpentStatus);
    }
  };
  /**
   * @param timerEvent
   * @clearTimer receives the duration of the test from deadtime. and starts the timer by calling startTimer every sec.
   */
  const clearTimer = (timerEvent: Date) => {
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(timerEvent);
    }, 1000);
    Ref.current = id;
  };
  /**
   * @getDeadTime Calculates the end time and returns in date format
   */
  const getDeadTime = () => {
    let now = new Date();
    now.setMinutes(new Date().getMinutes() + duration);
    return now;
  };
  useEffect(() => {
    clearTimer(getDeadTime());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    timer,
    timeSpentStatus,
  };
};
export default useTimerViewController;
