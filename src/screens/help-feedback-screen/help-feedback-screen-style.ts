import {StyleSheet} from 'react-native';
import {COLORS} from '@resources/colors';

export const style = StyleSheet.create({
  component: {
    padding: 20,
    flex: 1,
    backgroundColor: COLORS.WHITE.white,
  },
  title: {
    fontSize: 30,
    color: COLORS.BLACK,
    fontWeight: 'bold',
  },
  textArea: {
    textAlignVertical: 'top',
  },
  buttonStyle: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'tomato',
  },
  buttonTextStyle: {color: '#fff', fontSize: 16},
  buttonComponentStyle: {marginTop: 20},
  dropdownStyle: {width: '100%', paddingTop: 10, paddingBottom: 10},
});
