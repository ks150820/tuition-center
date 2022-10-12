import {StyleSheet} from 'react-native';

import {COLORS} from '../../resources/colors';
import {DEVICE_HEIGHT} from '../../helpers/screenDimensions';

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
  modal: {
    padding: 0,
    margin: 0,
    height: 0,
    width: '100%',
  },
  contentContainer: {
    width: '100%',
    backgroundColor: COLORS.WHITE.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    position: 'absolute',
    bottom: 0,
    maxHeight: DEVICE_HEIGHT,
  },
});
