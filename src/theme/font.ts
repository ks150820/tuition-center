import METRICS from './metric';

/**
 * created by Ramees P
 * date: 4 Aug 21
 * font configurations
 */

interface IFont {
  [key: string]: number;
}

const SIZE: IFont = {
  font6: METRICS.screenWidth * (6 / 360),
  font10: METRICS.screenWidth * (10 / 360),
  font11: METRICS.screenWidth * (11 / 360),
  font12: METRICS.screenWidth * (12 / 360),
  font13: METRICS.screenWidth * (13 / 360),
  font14: METRICS.screenWidth * (14 / 360),
  font15: METRICS.screenWidth * (15 / 360),
  font16: METRICS.screenWidth * (16 / 360),
  font17: METRICS.screenWidth * (17 / 360),
  font18: METRICS.screenWidth * (18 / 360),
  font19: METRICS.screenWidth * (19 / 360),
  font20: METRICS.screenWidth * (20 / 360),
};

type FontSizeType =
  | 'tiny'
  | 'xx_small'
  | 'x_small'
  | 'small'
  | 'regular'
  | 'xx_medium'
  | 'x_medium'
  | 'medium'
  | 'large'
  | 'x_large'
  | 'xx_large';

type IFontSize = {
  [key in FontSizeType]: number;
};

export const FONT_SIZE: IFontSize = {
  tiny: SIZE.font10,
  xx_small: SIZE.font11,
  x_small: SIZE.font12,
  small: SIZE.font13,
  regular: SIZE.font14,
  xx_medium: SIZE.font15,
  x_medium: SIZE.font16,
  medium: SIZE.font17,
  large: SIZE.font18,
  x_large: SIZE.font19,
  xx_large: SIZE.font20,
};

type FontType = 'bold' | 'semiBold' | 'light' | 'regular';

type IFontType = {
  [key in FontType]: string;
};

export const FONT_TYPE: IFontType = {
  bold: 'BOLD',
  semiBold: 'SEMI_BOLD',
  light: 'LIGHT',
  regular: 'REGULAR',
};
