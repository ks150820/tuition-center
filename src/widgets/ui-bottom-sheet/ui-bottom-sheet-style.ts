import {StyleSheet} from 'react-native';

import {COLORS} from '@resources/colors';

export const styles = StyleSheet.create({
  sideMenuStyle: {
    padding: 0,
    margin: 0,
    height: 0,
  },
  childrenComponent: {
    width: '100%',
    backgroundColor: COLORS.WHITE.white,
    position: 'absolute',
    bottom: 0,
  },
});
