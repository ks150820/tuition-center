import {StyleSheet} from 'react-native';
import {COLORS} from 'resources/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: COLORS.BLACK,
    padding: 40,
    bottom: 0,
    top: 0,
    width: '100%',
  },
  errorTextContainer: {
    alignItems: 'center',
  },
  errorText: {
    marginLeft: 10,
  },
  retryBtn: {
    backgroundColor: COLORS.GREY.philippine_grey,
    borderRadius: 15,
    marginTop: 60,
    padding: 10,
    width: 110,
    alignItems: 'center',
  },
});
