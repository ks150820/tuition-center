import {StyleSheet} from 'react-native';

import {COLORS} from '@resources/colors';

export const timerStyles = StyleSheet.create({
  timerComponent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commonTimerGolder: {
    padding: 5,
    paddingEnd: 10,
    paddingStart: 10,
    marginTop: 3,
    marginBottom: 3,
    alignItems: 'center',
    borderRadius: 3,
    elevation: 2,
  },
  timerHolder: {
    backgroundColor: COLORS.BLACK,
  },
  timerHiolderExtra: {
    backgroundColor: COLORS.BLACK,
  },
  timeLeftColor: {
    color: COLORS.WHITE.white,
    marginRight: 5,
  },
  timer: {
    color: COLORS.WHITE.white,
    textAlign: 'center',
  },
  timerExtra: {
    color: COLORS.RED.venetian_red,
    textAlign: 'center',
  },
});
