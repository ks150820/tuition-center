import colors from '@theme/colors';
import {StyleSheet} from 'react-native';

export const styles = (isLive?: boolean, isUpcoming?: boolean) =>
  StyleSheet.create({
    component: {
      padding: 10,
      flex: 1,
      backgroundColor: colors.gray_scale.gallery,
    },
    uiTabsComponent: {
        paddingTop: 5,
        paddingBottom: 10,
    },
    tabsComponentStyle: {
      borderWidth: 0,
      borderRadius: 0,
      padding: 0,
      backgroundColor: 'none',
    },
    activeTabsStyle: {
      padding: 1,
      borderRadius: 6,
      backgroundColor: colors.primary.cardinal,
      marginRight: 10,
    },
    inActiveTabsStyle: {
      padding: 1,
      borderRadius: 6,
      borderWidth: 0.5,
      borderColor: colors.gray_scale.silver,
      marginRight: 10,
    },
    cardContainer: {
      padding: 10,
      borderRadius: 8,
      elevation: 0,
      borderWidth: 0.3,
      borderColor: colors.gray_scale.silver,
    },
    cardsInnerComponent: {
      flexDirection: 'row',
    },
    rightComponent: {
      paddingLeft: 10,
      paddingRight: 3,
      flex: 1,
    },
    imageStyle: {
      height: 100,
      width: 95,
      elevation: 0,
    },
    cardHeading: {
      fontWeight: '600',
    },
    cardHeadingComponent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
    },
    rightSideLowerComponent: {
      justifyContent: 'flex-end',
      flex: 1,
    },
    teacherStatusComponent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
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
    statusComponent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    statusText: {
      color: isLive
        ? colors.primary.cardinal
        : isUpcoming
        ? colors.accent.royal_blue
        : colors.gray_scale.mine_shaft,
    },
    cardFooterComponent: {
        backgroundColor: '#FFF6E0',
        elevation: 0,
        borderWidth: 0.3,
        borderColor: colors.gray_scale.silver,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        padding: 10,
    },
    cardFooterInnerComponent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardFooterTextComponent: {
        marginLeft: 10,
    },
    flatListItemSeparator: {
        padding: 5,
    },
    flatListComponent: {flex: 1},
    contentContainerStyle: {paddingVertical: 10},
  });
