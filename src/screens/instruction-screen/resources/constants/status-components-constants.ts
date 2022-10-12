import {ImageSourcePropType} from 'react-native';

interface ImageConstantType {
  [key: string]: ImageSourcePropType;
}

export const IMAGE_CONSTANTS: ImageConstantType = {
  IMG_ANSWERED: require('@assets/images/questions-sprite-ans.png'),
  IMG_NOT_VISITED: require('@assets/images/questions-sprite-not-visited.png'),
  IMG_NOT_ANSWERED: require('@assets/images/questions-sprite-not-ans.png'),
  IMG_NOT_ANSWERED_MARKED: require('@assets/images/questions-sprite-not-ans-marked-review.png'),
  IMG_ANSWERED_MARKED: require('@assets/images/questions-sprite-ans-marked-review.png'),
};
