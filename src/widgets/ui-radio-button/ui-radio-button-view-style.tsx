import {StyleSheet} from 'react-native';

import {COLORS} from '@resources/colors';

export const radioStyle = StyleSheet.create({
  radioButton: {
    height: 16,
    width: 16,
    borderRadius: 12,
    borderColor: COLORS.GREY.dark_silver,
    borderWidth: 1,
    marginRight: 10,
  },
  radioButtonSelected: {
    height: 16,
    width: 16,
    borderRadius: 12,
    borderColor: COLORS.BLUE.brilliant_azure,
    borderWidth: 1,
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  radioButtonSelectedDot: {
    height: 10,
    width: 10,
    backgroundColor: COLORS.BLUE.brilliant_azure,
    borderRadius: 8,
  },
});
