import {StyleSheet} from 'react-native';
import {COLORS} from 'resources/colors';

export const styles = StyleSheet.create({
  controllerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  bottomPortrait: {
    bottom: '40%',
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
