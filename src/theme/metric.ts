import {Dimensions} from 'react-native';
/**
 * created by Ramees P
 * date: 4 Aug 21
 * to get screen height and width in landscape and portrait mode
 */

type ScreenDimensions = 'screenWidth' | 'screenHeight';

type IMetrics = {
  [key in ScreenDimensions]: number;
};

const {width, height} = Dimensions.get('window');

const METRICS: IMetrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};

export default METRICS;
