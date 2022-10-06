import {StyleSheet} from 'react-native';
import {COLORS} from '@resources/colors';

export const styles = StyleSheet.create({
  mainLayout: {
    backgroundColor: COLORS.WHITE.white,
    padding: 15,
    flex: 1,
  },
  layoutStyle: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginEnd: 10,
    alignItems: 'center',
  },
  defaultLanguageStyle: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginEnd: 10,
    alignItems: 'center',
  },
  buttonStyle: {
    width: 'auto',
    borderColor: COLORS.RED.tomato,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: COLORS.WHITE.white,
    marginTop: 12,
    alignSelf: 'flex-end',
  },
  buttonText: {color: COLORS.RED.tomato},
  loaderStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
