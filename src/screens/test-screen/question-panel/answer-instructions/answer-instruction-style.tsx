import {StyleSheet} from 'react-native';

import {COLORS} from '@resources/colors';

export const answerInstructionStyle = StyleSheet.create({
  component: {
    position: 'absolute',
    right: 10,
    top: '90%',
    backgroundColor: COLORS.WHITE.white,
    padding: 10,
    borderRadius: 5,
    zIndex: 1,
    elevation: 2,
  },
  dropdownComponent: {
    marginTop: 5,
    marginBottom: 5,
  },
  textStyle: {marginLeft: 20, fontSize: 15, fontWeight: '500'},
  textColor: {
    color: COLORS.BLACK,
  },
  layoutStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
