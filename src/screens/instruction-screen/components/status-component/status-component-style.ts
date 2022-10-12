import {StyleSheet} from 'react-native';
import {COLORS} from '@resources/colors';

export const styles = StyleSheet.create({
  answeredStyle: {
    color: COLORS.WHITE.white,
    fontWeight: 'bold',
  },
  notVisitedStyle: {
    color: COLORS.BLACK,
    fontWeight: 'bold',
  },
  statusContainer: {
    height: 48,
    width: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    width: '100%',
  },
});
