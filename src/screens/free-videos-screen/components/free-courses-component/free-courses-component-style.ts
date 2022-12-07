import colors from '@theme/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  component: {
    backgroundColor: colors.gray_scale.white,
    padding: 5,
  },
  headingText: {
    fontWeight: '700',
    marginLeft: 10,
  },
  viewAllComponent: {
    padding: 7,
    borderTopWidth: 0.8,
    borderColor: colors.gray_scale.gallery,
  },
  viewAllText: {
    fontWeight: '700',
  },
});
