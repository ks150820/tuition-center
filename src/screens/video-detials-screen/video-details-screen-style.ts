import colors from '@theme/colors';
import {StyleSheet} from 'react-native';

export const styles = (isLive?: boolean, isUpcoming?: boolean) =>
  StyleSheet.create({
    component: {
      flex: 1,
      backgroundColor: colors.gray_scale.gallery,
    },
    videoComponent: {
      position: 'relative',
    },
    videoPlayIconComponent: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00000077',
    },
    videoPlayerImage: {height: 185, width: '100%', elevation: 0},
    uiTabsComponent: {
      paddingHorizontal: 15,
      paddingTop: 15,
    },
    tabsComponentStyle: {
      paddingVertical: 0,
      backgroundColor: "#ededed",
    },
    activeTabComponent: {
      backgroundColor: colors.gray_scale.white,
      elevation: 0,
      padding: 11,
    },
    inActiveTabStyle: {
        // borderTopWidth: 1,
        // borderBottomWidth: 1,
        // borderLeftWidth: 1,
        // borderColor: colors.gray_scale.silver,
        // borderTopRightRadius: 0,
        // borderBottomRightRadius: 0,
    },
    videoCoursesComponent: {
      paddingHorizontal: 15,
      paddingVertical: 15,
      flex: 1,
    },
    videoCoursesCardComponent: {
      padding: 10,
      elevation: 0,
      borderWidth: 0.5,
      borderColor: isLive ? colors.primary.cardinal : colors.gray_scale.gallery,
    },
    videoCoursesCardSubComponent: {
      flexDirection: 'row',
      opacity: isLive ? 0.6 : 1,
      flex: 1,
    },
    videoCoursesCardRightComponent: {
      marginLeft: 10,
      padding: 0,
      flex: 1,
    },
    videoCoursesCardImage: {
      width: 132,
      height: 80,
      elevation: 0,
      borderRadius: 6,
    },
    itemSeparatorComponent: {
      padding: 4,
    },
    fontWeight500: {
      fontWeight: '500',
      padding: 0,
    },
    cardRightComponentBottomTextComponent: {
      justifyContent: 'flex-end',
      flex: 1,
    },
    cardRightComponentBottomTextInnerComponent: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
    },
    fontWeight400: {
      fontWeight: '400',
      padding: 0,
    },
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
    coursesStatusComponent: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    statusTextColors: {
      color: isLive
        ? colors.primary.cardinal
        : isUpcoming
        ? colors.accent.royal_blue
        : colors.gray_scale.mine_shaft,
    },
    videoDetailsFooterComponent: {
        justifyContent: 'flex-end',
        // alignItems: 'center',
        width: '100%',
        overflow: 'hidden',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        backgroundColor: colors.gray_scale.white,
    },
    videoDetailsFooterInnerComponent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    videoDetailsFooterDetailComponent: {
        padding: 10,
    },
    videoDetailsFooterPriceComponent: {
        flexDirection: 'row',
        // justifyContent: 'flex-end',
        alignItems: 'flex-end',
        // alignItems: 'center'
    },
    videoDetailsFooterDiscountedPriceComponent: {
        marginLeft: 5,
        marginBottom: 3,
        justifyContent: 'flex-end',
    },
    videoDetailsFooterDiscountedPrice: {
        textDecorationStyle: 'solid',
        textDecorationLine: 'line-through',
        justifyContent: 'flex-end',
    },
  });
