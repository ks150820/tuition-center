import {StyleSheet} from 'react-native';
import colors from '@theme/colors';
import {FONT_TYPE} from '@theme/font';

export const styles = StyleSheet.create({
  coursesCardDesignTwo_footer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  coursesCardDesignTwo_batchComponent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coursesCardDesignTwo_batchDate: {
    marginLeft: 5,
    fontWeight: '650',
  },
  coursesCardDesignTwo_component: {
    width: '100%',
    padding: 0,
    backgroundColor: colors.accent.corn_silk,
    elevation: 0,
    borderColor: '#D9D2C1',
    borderWidth: 0.5,
  },
  coursesCardDesignTwo: {
    backgroundColor: colors.gray_scale.white,
    padding: 8,
    // width: 340,
  },
  coursesCardDesignTwoSubComponent: {
    flexDirection: 'row',
  },
  coursesCardDesignTwo_Image: {
    width: 97,
    height: 130,
    borderRadius: 6,
    overflow: 'hidden',
  },
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
  coursesCardDesignTwo_rightContainer: {
    elevation: 0,
    paddingLeft: 10,
    padding: 0,
    flex: 1,
  },
  coursesCardDesignTwo_rightSubContainer: {
    // flexDirection: 'row',
    flex: 1,
  },
  coursesCardDesignTwo_headingComponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 7,
  },
  coursesCardDesignTwo_heading: {
    // marginTop: 15,
    fontWeight: '600',
    flexWrap: 'wrap',
    padding: 0,
    margin: 0,
    lineHeight: 20,
  },
  coursesCardDesignTwo_rightArrowIcon: {marginTop: 3},
  batchTitle: {
    fontWeight: '500',
    flexWrap: 'wrap',
    padding: 0,
    margin: 0,
    lineHeight: 17,
  },
  priceSubComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  priceText: {
    fontWeight: '700',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  ebooksCoursesCardDesignTwo_discountText: {
    // textDecorationLine: 'line-through',
    marginLeft: 5,
    padding: 0,
    margin: 0,
    color: colors.gray_scale.dusty_gray,
  },
  coursesCardDesignTwo_priceQuickBuy: {justifyContent: 'flex-end', flex: 1},
  coursesCardDesignTwo_discountComponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coursesCardDesignTwo_priceComponent: {
    // justifyContent: 'flex-end',
    // borderWidth: 1,
  },
  coursesCardDesignTwo_discountText: {
    textDecorationLine: 'line-through',
    marginLeft: 5,
    padding: 0,
    margin: 0,
    color: colors.gray_scale.dusty_gray,
  },
  coursesCardDesignTwo_ViewPDFButton: {
    fontSize: FONT_TYPE.INFO.fontSize,
    justifyContent: 'center',
    borderRadius: 4,
    overflow: 'hidden',
    marginRight: 5,
    // borderColor: colors.gray_scale.white,
    backgroundColor: colors.gray_scale.white,
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderWidth: 0.8,
    borderColor: colors.primary.cardinal,
  },
  coursesCardDesignTwo_pdfButtonFontStyle: {
    fontWeight: '500',
  },
  coursesCardDesignTwo_quickBuyButton: {
    fontSize: FONT_TYPE.INFO.fontSize,
    justifyContent: 'center',
    borderRadius: 4,
    overflow: 'hidden',
    marginRight: 5,
    // borderColor: colors.gray_scale.white,
    backgroundColor: colors.primary.cardinal,
    paddingVertical: 6,
    paddingHorizontal: 20,
  },
  coursesCardDesignTwo_quickBuyButtonFontStyle: {
    fontWeight: '500',
  },
  shareComponent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareText: {
    marginRight: 5,
    fontWeight: '600'
  },
});
