import colors from '@theme/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  actionCardSubContainer: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  uITextStyle: {
    marginStart: 12,
  },
  actionCardContainer: {
    marginBottom: 12,
  },
  container: {
    backgroundColor: colors.gray_scale.white,
    flex: 1,
    paddingTop: 32,
  },
  actionsViewContainer: {
    borderBottomWidth: 0.3,
    borderBottomColor: colors.gray_scale.silver,
    marginVertical: 32,
  },
  cardStyle: {
    marginHorizontal: 16,
  },
});
export default styles;
