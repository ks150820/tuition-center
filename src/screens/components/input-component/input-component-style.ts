import {StyleSheet} from 'react-native';
import {COLORS} from '@resources/colors';

export const styles = StyleSheet.create({
  component: {
    padding: 2,
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
  },
  uiInputComponent: {
    flex: 1,
    marginRight: 3,
  },
  uiInputStyle: {
    borderRadius: 40,
    padding: 10,
    backgroundColor: COLORS.WHITE.ghost_white,
  },
  iconComponent: {
    backgroundColor: COLORS.GREEN.polished_pine,
    padding: 12,
    alignItems: 'center',
    borderRadius: 100,
    top: '3%',
  },
  icon: {
    textAlign: 'center',
    marginTop: -2,
    transform: [{rotateY: '-30deg'}, {rotateZ: '-30deg'}],
  },
  textInputStyle: {padding: 0, marginLeft: 7, color: COLORS.GREY.davys_grey},
});
