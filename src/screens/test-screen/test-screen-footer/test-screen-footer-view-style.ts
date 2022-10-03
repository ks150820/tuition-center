import {StyleSheet} from 'react-native';

import {COLORS} from '@resources/colors';

export const footerStyle = StyleSheet.create({
  component: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.WHITE.cultured,
    borderTopWidth: 0.5,
    borderTopColor: COLORS.GREY.chinese_silver,
  },
  commonComponent: {
    flexDirection: 'row',
    flex: 1,
  },
  clearAndMarkComponent: {
    justifyContent: 'space-between',
    padding: 10,
  },
  secTextColor: {
    color: COLORS.WHITE.white,
  },
  firstTextColor: {
    color: COLORS.BLACK,
  },
  clearResponseButton: {
    padding: 8,
    backgroundColor: COLORS.WHITE.white,
    borderWidth: 0.5,
    borderColor: COLORS.GREY.chinese_silver,
  },
  submitButton: {
    padding: 10,
    backgroundColor: COLORS.BLUE.jordy_blue,
    borderRadius: 0,
  },
  saveAndNextButton: {
    padding: 10,
    backgroundColor: COLORS.GREEN.russian_green,
    borderRadius: 0,
  },
  cmpStyle: {
    flex: 0.5,
  },
});
