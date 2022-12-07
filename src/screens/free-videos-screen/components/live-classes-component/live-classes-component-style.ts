import {StyleSheet} from 'react-native';
import colors from '@theme/colors';

export const styles = StyleSheet.create({
  component: {
    padding: 0,
    elevation: 0,
    borderRadius: 0,
    marginBottom: 10,
  },
  cardComponent: {
    elevation: 0,
    borderWidth: 0.5,
    padding: 10,
    borderColor: colors.gray_scale.silver,
    marginVertical: 5,
  },
  imageStyle: {width: 140, height: 85, elevation: 0},
  innerCardComponent:{flexDirection: 'row', flex: 1},
  headerRenderItemStyle: {
    flex: 0,
    borderBottomColor: colors.gray_scale.gallery,
  },
  headerTabsComponentStyle: {
    borderRadius: 0,
    backgroundColor: colors.gray_scale.white,
    paddingHorizontal: 5,
  },
  headerActiveTabStyle: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary.cardinal,
    borderRadius: 0,
  },
  outerTabsComponent: {marginVertical: 7},
  activeTabStyle: {
    paddingVertical: 2,
    backgroundColor: colors.primary.cardinal,
    borderRadius: 6,
    marginRight: 8,
    paddingHorizontal: 12,
  },
  inActiveTabStyle: {
    padding: 2,
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: colors.gray_scale.silver,
    marginRight: 8,
    paddingHorizontal: 12,
    paddingVertical: 1,
  },
  tabsComponentStyle: {
    backgroundColor: colors.gray_scale.white,
    borderWidth: 0,
  },
  leftComponent: {position: 'relative', borderRadius: 7, overflow: 'hidden'},
  rightComponent: {paddingHorizontal: 10, flex: 1},
  outerBlinkIconComponent: {
    backgroundColor: '#EC5A61', // color name is not in the figma
    padding: 3,
    opacity: 0.5,
    borderRadius: 6,
    marginRight: 4,
  },
  innerBlinkIconComponent: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: colors.primary.cardinal,
    zIndex: 1,
  },
  playIconComponent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000066',
  },
  rightFooterIntroComponent: {flex: 1, justifyContent: 'flex-end'},
  rightFooterInnerIntroComponent: {flexDirection: 'row', justifyContent: 'space-between'},
  liveTextComponent: {
    justifyContent: 'flex-end',
  },
  liveTextInnerComponent: {flexDirection: 'row', alignItems: 'center'},
  fontWeight700: {fontWeight: '700'},
  fontWeight400: {fontWeight: '400'},
  fontWeight500: {fontWeight: '500'},
  fontWeight600: {fontWeight: '600'},
  viewAllComponent: {
    backgroundColor: colors.gray_scale.white,
    padding: 8,
    borderTopWidth: 0.8,
    borderTopColor: colors.gray_scale.gallery,
  },
  viewAllText: {
    fontWeight: '700',
  },
});
