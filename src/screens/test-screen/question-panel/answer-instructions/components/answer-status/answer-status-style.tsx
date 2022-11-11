import {StyleSheet} from 'react-native';

import {COLORS} from '@resources/colors';

export const answerStyle = StyleSheet.create({
  component: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    position: 'relative',
  },

  textStyle: {color: COLORS.BLACK, marginLeft: 5},
  icon: {
    position: 'absolute',
    padding: 1,
    left: 25,
    top: 22,
    backgroundColor: COLORS.GREEN.russian_green,
    borderRadius: 20,
  },
  buttonstyle: {
    padding: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 5,
    marginRight: 5,
    elevation: 1,
  },
});
