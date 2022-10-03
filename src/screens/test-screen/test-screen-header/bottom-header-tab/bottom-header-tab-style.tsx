import {StyleSheet} from 'react-native';

import {COLORS} from '@resources/colors';

export const bottomHeaderStyle = StyleSheet.create({
  component: {
    backgroundColor: COLORS.BLUE.blueberry,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  questionsNoComponent: {
    backgroundColor: COLORS.WHITE.white,
    padding: 5,
    borderRadius: 5,
  },
  textColor: {
    color: COLORS.BLACK,
  },
});
