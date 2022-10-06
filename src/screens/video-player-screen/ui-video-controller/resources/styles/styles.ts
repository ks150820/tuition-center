import {StyleSheet} from 'react-native';
import {COLORS} from 'resources/colors';

export const styles = StyleSheet.create({
  controllerOverlay: {
    height: '100%',
  },

  controllerOverlayView: {
    backgroundColor: COLORS.TRANS_BLACK,
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 30,
  },

  viewWrap: {
    flex: 1,
    justifyContent: 'flex-end',
    marginHorizontal: 15,
  },

  hide: {
    display: 'none',
  },

  playBtn: {
    alignSelf: 'center',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
