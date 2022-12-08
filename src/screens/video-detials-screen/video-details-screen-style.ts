import colors from '@theme/colors';
import {StyleSheet} from 'react-native';

export const styles = (isLive?: boolean, isUpcoming?: boolean) =>
  StyleSheet.create({
    component: {
      flex: 1,
      backgroundColor: colors.gray_scale.gallery,
    },
    innerComponent: {
        flex: 1,
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
      paddingTop: 10,
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
    inActiveTabStyle: {},
    videoCoursesComponent: {
    paddingTop: 10,
      flex: 1,
    },
    videoCoursesInnerComponent: {
        paddingHorizontal: 15,
        paddingVertical: 10,
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
        paddingVertical: 7,
        paddingHorizontal: 11,
    },
    videoDetailsFooterPriceComponent: {
        flexDirection: 'row',
        alignItems: 'flex-end',
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
    videoDetailsFooterDiscountText: {
        padding: 2,
    },
    viewCourseButton: {
        backgroundColor: colors.primary.cardinal,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 8,
    },
    bottomSheetComponent: {
        flex: 1,
    },
    bottomSheetFooterComponent: {justifyContent: 'flex-end'},
    bottomSheetCloseIconComponent: {
        alignItems: 'flex-end',
        padding: 5,
    },
    bottomSheetBannerImageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomSheetBannerImage: {
        width: 200,
        height: 113,
        elevation: 0,
    },
    fontWeight700: {
        fontWeight: '700',
    },
    bottomSheetHeadingContainer: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    bottomSheetHeadingComponent: {
        // backgroundColor: colors.gray_scale.white,
        paddingHorizontal: 5
    },
    bottomSheetHeadingCrossingLine: {
        height: 1,
        backgroundColor: colors.gray_scale.silver,
        // width: 100
        flex: 1,
        // marginTop: -6,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 15,
    },
    bottomSheetDatesButton: {
        flexDirection: 'row',
        flex: 0.4,
        padding: 3,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.accent.royal_blue,
        backgroundColor: '#E7F3FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomSheetDatesButtonIcon: {
        marginRight: 10,
    },
    boughtByUserTextOuterContainer: {alignSelf: 'center', marginTop: 15, marginBottom: 15,},
    boughtByUserTextContainer: {
        flexDirection: 'row',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#E0DACB',
        backgroundColor: '#FEEEEF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    courseDetailsDescriptionOuterContainer: {
        padding: 20,
    },
    courseDetailsDescriptionInnerContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        // alignItems: 'center',
        alignSelf: 'center',
        // justifyContent: 'space-around',
        borderWidth: 0.5,
        borderColor: colors.gray_scale.silver,
        borderRadius: 8,
        padding: 10,
    },
    courseDetailsDescriptionContainerChild: {
        marginLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    courseDetailsDescriptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    courseDetailsDescriptionDoubleCheckIcon: {
        marginRight: 5,
    },
  });
