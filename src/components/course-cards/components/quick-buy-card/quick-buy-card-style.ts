import colors from '@theme/colors';
import { FONT_TYPE } from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  courseCardContainer: {
    width: 300,
    padding: 10,
    elevation: 0,
  },
  subContainer: {
    // flexWrap: 'wrap',
    flexDirection: 'row',
    display: 'flex',
  },
  imageComponent: {
    elevation: 0,
    position: 'relative',
    float: 'right',
    padding: 0,
    // flexWrap: 'wrap',
  },
  imageStyles: {width: 120, height: 90, borderRadius: 8},
  discountCardComponent: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    borderRadius: 5,
    paddingEnd: 4,
    paddingVertical: 1,
    // backgroundColor: colors.gray_scale.white,
  },
  discountText: {
    fontWeight: '700',
  },
  rightComponent: {
    elevation: 0,
    flex: 1,
    paddingLeft: 10,
  },
  cardTitle: {
    fontWeight: '600',
    flexWrap: 'wrap',
    padding: 0,
    margin: 0,
    lineHeight: 17,
  },
  batchTitle: {
    fontWeight: '500',
    flexWrap: 'wrap',
    padding: 0,
    margin: 0,
    lineHeight: 17,
  },
  priceComponent: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  priceSubComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  discountedPrice: {
    textDecorationLine: 'line-through',
    marginLeft: 5,
    fontWeight: '400',
    // backgroundColor: 'pink',
    padding: 0,
    // lineHeight: 14,
    margin: 0,
  },
  priceText: {
    fontWeight: '700',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  detailButton: {
    borderWidth: 0.5,
    fontSize: FONT_TYPE.INFO,
    justifyContent: 'center',
    borderRadius: 4,
    borderColor: colors.gray_scale.dusty_gray,
    // width: 65,
    padding: 3,
  },
  quickBuyButton: {
    fontSize: FONT_TYPE.INFO,
    justifyContent: 'center',
    borderRadius: 4,
    // borderColor: colors.gray_scale.white,
    backgroundColor: colors.primary.cardinal,
    padding: 6,
  },
  quickBuyButton_fontStyle: {
    fontWeight: '800',
  },
});
