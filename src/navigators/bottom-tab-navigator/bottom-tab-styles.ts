import {StyleSheet} from 'react-native';
import {COLORS} from '@resources/colors';

export const styles = StyleSheet.create({
  commonMyCourseLabel: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 3,
    width: 80,
    backgroundColor: 'transparent',
    fontWeight: '600',
  },
  MyCourseLabel: {
    color: COLORS.RED.tab_item,
    marginLeft: -15,
  },
  MyCourseInActiveLabel: {
    color: COLORS.GREY.gray,
  },
  labelContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: 7,
  },
  labelFocusedContainer: {
    width: 50,
    borderTopWidth: 3,
    position: 'absolute',
    top: 0,
    borderTopColor: COLORS.RED.tab_item,
  },
  labelFocusedStyle: {
    textAlign: 'center',
    marginTop: 3,
    color: COLORS.RED.tab_item,
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: '600',
  },
  labelStyle: {
    textAlign: 'center',
    marginTop: 3,
    color: COLORS.GREY.gray,
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: '600',
  },
  iconStyle: {
    alignSelf: 'center',
    marginTop: 6,
  },
});
