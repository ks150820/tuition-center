import {COLORS} from '@resources/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  component: {
    flex: 1,
    position: 'relative',
  },
  headerComponent: {},
  // ----- avatar
  commonAvatarStyle: {
    padding: 5,
    paddingLeft: 11,
    paddingRight: 11,
    borderRadius: 100,
  },
  avatar: {
    backgroundColor: COLORS.FRESH_AIR,
  },
  avatarLeft: {
    backgroundColor: COLORS.FRESH_AIR,
    padding: 5,
    marginLeft: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 100,
  },
  // ----- avatar end
  leftTextColor: {
    color: COLORS.GREY.davys_grey,
    fontSize: 15,
  },
  rightTextColor: {
    color: COLORS.WHITE.white,
    fontSize: 15,
  },
  avatarTitle: {
    color: COLORS.WHITE.white,
    textAlign: 'center',
    fontSize: 18,
  },
  commonMessage: {
    padding: 15,
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderRadius: 7,
    marginTop: 10,
  },
  leftMessageComponent: {
    // alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginLeft: 5,
  },
  rightMessageComponent: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginRight: 8,
  },
  leftMessage: {
    backgroundColor: COLORS.WHITE.ghost_white,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 17,
    borderBottomRightRadius: 17,
    borderBottomLeftRadius: 17,
  },
  leftFalseMessage: {
    backgroundColor: COLORS.WHITE.ghost_white,
    marginLeft: 44,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 17,
    borderBottomRightRadius: 17,
    borderBottomLeftRadius: 17,
  },
  rightMessage: {
    backgroundColor: COLORS.BLUE.independence,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 17,
    borderBottomRightRadius: 17,
    borderBottomLeftRadius: 17,
  },
  timeStyle: {
    color: COLORS.GREY.davys_grey,
    fontSize: 11,
    textAlign: 'center',
  },
  avatarComponent: {
    flexDirection: 'column',
    marginRight: 10,
    marginTop: 9,
  },
});
