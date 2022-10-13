import METRICS from './metric';

/**
 * created by Ramees P
 * date: 4 Aug 21
 * font configurations
 */

console.log(METRICS.screenWidth);

const FONT_SIZE: IFont = {
  font12: 12,
  font14: 14,
  font16: 16,
  font18: 18,
  font20: 20,
};

export const FONT_TYPE: IFontType = {
  H1: {
    fontFamily: 'Mukta-Bold',
    fontSize: FONT_SIZE.font20,
  },
  HEADING: {
    fontFamily: 'Mukta-Bold',
    fontSize: FONT_SIZE.font18,
  },
  SUBHEADING: {
    fontFamily: 'Mukta-Regular',
    fontSize: FONT_SIZE.font16,
  },
  PARAGRAPH: {
    fontFamily: 'Mukta-Regular',
    fontSize: FONT_SIZE.font14,
  },
  INFO: {
    fontFamily: 'Mukta-Regular',
    fontSize: FONT_SIZE.font12,
  },
  BUTTON: {
    fontFamily: 'Mukta-SemiBold',
    fontSize: FONT_SIZE.font16,
  },
  OTHERS: {
    fontFamily: 'Mukta-SemiBold',
    fontSize: FONT_SIZE.font18,
  },
};
