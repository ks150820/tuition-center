import colors from '@theme/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  component: {
    borderRadius: 0,
    padding: 15,
    elevation: 0,
  },
  headingText: {
    fontWeight: '700',
  },
  imageComponent: {
    position: 'relative',
  },
  image: {width: '100%', height: 162, elevation: 0},
  enrolledComponent: {
    backgroundColor: '#F7BF1F', // color name is not in the figma
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 4,
    position: 'absolute',
    top: 6,
    right: 7,
  },
  playIconComponent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIconInnerComponent: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: colors.gray_scale.white,
    borderRadius: 10,
    alignItems: 'center',
  },
  cardComponent: {
    borderWidth: 0.8,
    borderColor: '#E0DACB',
    elevation: 0,
    padding: 0,
    width: 235,
    marginRight: 10,
  },
  liveClassTextComponent: {
    alignSelf: 'flex-start',
    paddingHorizontal: 3,
    borderRadius: 3,
    marginTop: 10,
    backgroundColor: '#FEEEEF',
  },
  viewAllCardComponent: {
    elevation: 0,
    width: 70,
    justifyContent: 'center',
    alignItem: 'center',
  },
  viewAllIconComponent: {
    padding: 20,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FEEEEF',
  },
  fontWight700: {fontWeight: '700'},
  fontWight600: {fontWeight: '600'},
  fontWight500: {fontWeight: '500'},
  marginLeft4: {
    marginLeft: 4,
  },
  marginVertical10: {
    marginVertical: 10,
  },
});
