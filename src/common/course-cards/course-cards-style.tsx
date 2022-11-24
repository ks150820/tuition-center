// import colors from '@theme/colors';
import {Dimensions} from 'react-native';
import colors from '@theme/colors';
import {FONT_TYPE} from '@theme/font';
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
    padding: 4,
  },
  quickBuyButton_fontStyle: {
    fontWeight: '800',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  // coursesCardDesignTwo ----
  coursesCardDesignTwo_component: {
    width: '100%',
    padding: 0,
    backgroundColor: colors.accent.corn_silk,
    elevation: 0,
    borderColor: '#D9D2C1',
    borderWidth: 0.3,
  },
  coursesCardDesignTwo: {
    backgroundColor: colors.gray_scale.white,
    padding: 8,
    // width: 340,
  },
  coursesCardDesignTwo_footer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  coursesCardDesignTwoSubComponent: {
    flexDirection: 'row',
  },
  coursesCardDesignTwo_LeftContainer: {},
  coursesCardDesignTwo_Image: {
    width: 97,
    height: 130,
    borderRadius: 6,
    overflow: 'hidden',
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
  coursesCardDesignTwo_rightArrowIcon: {marginTop: 3},
  coursesCardDesignTwo_priceQuickBuy: {justifyContent: 'flex-end', flex: 1},
  coursesCardDesignTwo_discountComponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coursesCardDesignTwo_discountText: {
    textDecorationLine: 'line-through',
    marginLeft: 5,
    padding: 0,
    margin: 0,
    color: colors.gray_scale.dusty_gray,
  },
  ebooksCoursesCardDesignTwo_discountText: {
    // textDecorationLine: 'line-through',
    marginLeft: 5,
    padding: 0,
    margin: 0,
    color: colors.gray_scale.dusty_gray,
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
  coursesCardDesignTwo_batchComponent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coursesCardDesignTwo_batchDate: {
    marginLeft: 5,
    fontWeight: '650',
  },
  coursesCardDesignTwo_priceComponent: {
    // justifyContent: 'flex-end',
    // borderWidth: 1,
  },
  coursesCardDesignTwo_quickBuyButtonFontStyle: {
    fontWeight: '500',
  },
  coursesCardDesignTwo_pdfButtonFontStyle: {
    fontWeight: '500',
  },
  coursesCardDesignTwo_quickBuyButton: {
    fontSize: FONT_TYPE.INFO,
    justifyContent: 'center',
    borderRadius: 4,
    overflow: 'hidden',
    marginRight: 5,
    // borderColor: colors.gray_scale.white,
    backgroundColor: colors.primary.cardinal,
    paddingVertical: 6,
    paddingHorizontal: 20,
  },
  coursesCardDesignTwo_ViewPDFButton: {
    fontSize: FONT_TYPE.INFO,
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

  // books copmonent style
  booksComponent: {
    padding: 0,
    paddingBottom: 5,
    width: 125,
    elevation: 0,
    borderRadius: 0,
  },
  booksImage: {width: 125, height: 150, borderRadius: 8},
  booksCardTitle: {
    lineHeight: 18,
    fontWeight: '600',
  },
  booksTitleView: {
    marginTop: 15,
  },
  booksViewPrice: {
    fontWeight: '400',
    color: colors.accent.solid_black,
  },
  booksPriceComponent: {
    marginVertical: 3,
  },
  booksBuyButton: {
    marginTop: 10,
  },
  // -------------------------------------
  cardComponent: {
    // width: 85,
    height: 'auto',
    alignItems: 'center',
    elevation: 0,
    padding: 0,
    borderRadius: 0,
  },
  image: {
    width: 43,
    height: 43,
    elevation: 0,
  },
  titleComponent: {
    marginTop: 5,
  },
  title: {
    fontWeight: '600',
    lineHeight: 18,
    textTransform: 'uppercase',
  },
  examCardImageComponent: {
    padding: 15,
    backgroundColor: '#FBF9F7',
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: '#E0DACB',
  },
  buy_button: {
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: colors.primary.cardinal,
    borderRadius: 5,
    padding: 5,
  },
});
