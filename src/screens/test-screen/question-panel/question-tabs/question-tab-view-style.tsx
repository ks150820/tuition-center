import {StyleSheet} from 'react-native';

import {COLORS} from '@resources/colors';

export const questionTabStyle = StyleSheet.create({
  component: {
    backgroundColor: COLORS.WHITE.azureish_white,
    padding: 2,
  },
  innerComponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnComponent: {
    borderRadius: 5,
    marginRight: 5,
    marginLeft: 5,
    padding: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  iButtonComponent: {
    padding: 10,
    borderLeftWidth: 1,
    marginLeft: 10,
    borderLeftColor: COLORS.BLUE.pale_cornflower_blue,
  },
  iButton: {
    padding: 0,
  },
  btnIconText: {
    fontSize: 30,
  },
  iButtonTextStyle: {
    color: COLORS.BLUE.french_sky_blue,
    textAlign: 'center',
  },
  btnTextStyle: {
    fontWeight: '500',
  },
});
