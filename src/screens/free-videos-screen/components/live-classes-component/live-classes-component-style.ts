import colors from '@theme/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  component: {
    padding: 0,
    elevation: 0,
    borderRadius: 0,
    marginBottom: 10,
  },
  card_component: {
    elevation: 0,
    borderWidth: 0.5,
    padding: 10,
    borderColor: colors.gray_scale.silver,
    marginVertical: 5,
  },
  image_style: {width: 140, height: 85, elevation: 0},
  inner_card_component:{flexDirection: 'row', flex: 1},
  header_renderItemStyle: {
    flex: 0,
    borderBottomColor: colors.gray_scale.gallery,
  },
  header_tabsComponentStyle: {
    borderRadius: 0,
    backgroundColor: colors.gray_scale.white,
    paddingHorizontal: 5,
  },
  header_activeTabStyle: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary.cardinal,
    borderRadius: 0,
  },
  outer_tabs_component: {marginVertical: 7},
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
  left_component: {position: 'relative', borderRadius: 7, overflow: 'hidden'},
  right_component: {paddingHorizontal: 10, flex: 1},
  outer_blink_icon_component: {
    backgroundColor: '#EC5A61',
    padding: 3,
    opacity: 0.5,
    borderRadius: 6,
    marginRight: 4,
  },
  inner_blink_icon_component: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: colors.primary.cardinal,
    zIndex: 1,
  },
  play_icon_component: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000066',
  },
  right_footer_intro_component: {flex: 1, justifyContent: 'flex-end'},
  right_footer_inner_intro_component: {flexDirection: 'row', justifyContent: 'space-between'},
  live_text_component: {
    justifyContent: 'flex-end',
  },
  live_text_inner_component: {flexDirection: 'row', alignItems: 'center'},
});
