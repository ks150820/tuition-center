import {StyleSheet} from 'react-native';

import {COLORS} from '@resources/colors';

export const styles = StyleSheet.create({
  componentWidth: {
    padding: 6,
    backgroundColor: COLORS.WHITE.white,
    borderRadius: 2,
    // marginStart: 12,
  },
  dropdownComponent: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.2,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 2,
  },
  optionsWidth: {
    maxWidth: '30%',
  },
  outerComponent: {
    position: 'relative',
    marginTop: 5,
    marginLeft: 6,
  },
  optionsOuterComponent: {
    backgroundColor: COLORS.WHITE.white,
    position: 'absolute',
    elevation: 8,
    // marginStart: 10,
    padding: 5,
    // alignSelf: 'auto',
    width: 'auto',
    left: 1,
    top: 40,
    zIndex: 10,
  },
  textColor: {
    alignSelf: 'flex-start',
    color: COLORS.BLACK,
  },
  iconSize: {
    marginLeft: 5,
  },
});
