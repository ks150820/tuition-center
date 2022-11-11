import {StyleSheet} from 'react-native';
import {COLORS} from '@resources/colors';

export const styles = StyleSheet.create({
  textColor: {
    color: COLORS.BLACK,
  },
  component: {width: '80%', marginStart: 12},
  instHeader: {
    backgroundColor: COLORS.FRESH_AIR,
    height: 38,
  },
  central: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  marginStart6: {marginStart: 6},
  marginStart42: {marginStart: 42},
  marginBottom38: {marginBottom: 38},
  marginHorizontal: {marginHorizontal: 20},
  marginBottom10: {marginBottom: 10},
  head: {
    fontSize: 18,
    color: COLORS.GREY.granite_grey,
    textDecorationLine: 'underline',
    marginBottom: 32,
    lineHeight: 40,
  },
  paragraph: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    color: COLORS.BLACK,
  },
  strong: {
    fontFamily: 'OpenSans-Regular',
    color: COLORS.BLACK,
    fontSize: 14,
  },
  answered: {
    color: COLORS.WHITE.white,
    flex: 1,
    alignItems: 'flex-start',
    fontWeight: 'bold',
    height: 38,
    lineHeight: 42,
    margin: 3,
    textAlign: 'center',
    width: 34,
  },
  red: {
    fontFamily: 'OpenSans-Regular',
    color: COLORS.RED.red,
    fontSize: 14,
  },
  notVisitedStyle: {
    color: COLORS.BLACK,
    fontWeight: 'bold',
  },
  answeredStyle: {
    color: COLORS.WHITE.white,
    fontWeight: 'bold',
  },
});
